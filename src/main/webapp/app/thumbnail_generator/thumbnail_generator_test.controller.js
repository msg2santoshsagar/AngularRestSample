(function() {
	'use strict';

	angular
	.module('angularSampleApp')
	.controller('ThumbnailGeneratorTestController', ThumbnailGeneratorTestController);

	ThumbnailGeneratorTestController.$inject = ['$rootScope','SelectFileService','ThumbnailGenerator','$http'];

	function ThumbnailGeneratorTestController ($rootScope,SelectFileService,ThumbnailGenerator,$http) {
		var vm 						=  	this;
		//var SELECTION_TYPE 			=  	"image/*";
		var SELECTION_TYPE 			=  	null;
		var THUMBNAIL_HEIGHT_WIDTH 	= 	300;
		var ENCODING_OPTION_FACTOR  =   0.8;

		vm.imageList 		= 	[];
		vm.file      		=	{};
		vm.file.fileName	= 	"";

		vm.printImageList=function(){
			console.log("Image List :: ",vm.imageList);
		} 

		function setThumbnailAtIndex(data,index){
			vm.imageList[index].thumbnailSrc = data;
		}

		vm.selectFiles = function(isMultiple){

			SelectFileService.selectFile(SELECTION_TYPE,isMultiple).then(
					function(response){
						console.log("File has been selected :: ",response);

						if(response!=null &&  response.length > 0){

							vm.imageList = response;
							var len      = response.length;

							function setThumbnailData(index){
								console.log("Set Image THumbnail ",index);
								var currentImageData = vm.imageList[index] ;
								var image = new Image();
								
								if(! currentImageData.type.startsWith("image") ){
									if(index < len-1){
										var reader = new FileReader();
										reader.onload=function(e){
											vm.imageList[index].src = e.target.result;
											setThumbnailData(++index);
										}
										reader.readAsDataURL(currentImageData);
									}else{
										return;
									}
								}

								image.onload = function(){

									var scalingFactor = 0.25;

									if(image.height > image.width){
										scalingFactor = THUMBNAIL_HEIGHT_WIDTH / image.height ;
									}else{
										scalingFactor = THUMBNAIL_HEIGHT_WIDTH / image.width ;
									}
									var opts ={
											scaling  		:  scalingFactor,
											encodingOption  :  ENCODING_OPTION_FACTOR
									};

									console.log("THUMBNAIL  GENERATOR OPTIONS ",index," :: ",opts);

									var thumbnailSrc = ThumbnailGenerator.generateThumbnail(image,opts);
									setThumbnailAtIndex(thumbnailSrc,index);
									console.log("thumbnail Setting Done ",index);
									if(index < len-1){
										setThumbnailData(++index);
									}
								}

								image.src = currentImageData.src;
							}
							setThumbnailData(0);
						}

					},function(errResponse){
						console.error("Error Occured while selecting files :: ",errResponse);
					}	
			);

		}

		
		
		vm.uploadData=function(){
			console.log("Image List Data ",vm.imageList);
			$http.post("api/uploadFile",vm.imageList).then(
					function(res){
						console.log("Success --  ",res.data);
					},function(errRes){
						console.log("Failuere --- ",errRes);
					}
			)
		}
		
		vm.fetchedImageData = [];
		vm.FetchImageData = function(){
			$http.post("api/getFileList").then(
					function(res){
						console.log("Success --  ",res.data);
						vm.fetchedImageData = res.data;
					},function(errRes){
						console.log("Failuere --- ",errRes);
					}
			)
		}
		
		
		vm.createUri=function(fileName){
			return "http://localhost:8080/api/getFileData?fileName="+fileName;
		}
		
		
	}
})();
