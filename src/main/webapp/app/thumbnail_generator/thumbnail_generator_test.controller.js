(function() {
	'use strict';

	angular
	.module('angularSampleApp')
	.controller('ThumbnailGeneratorTestController', ThumbnailGeneratorTestController);

	ThumbnailGeneratorTestController.$inject = ['$rootScope','SelectFileService','ThumbnailGenerator'];

	function ThumbnailGeneratorTestController ($rootScope,SelectFileService,ThumbnailGenerator) {
		var vm 						=  	this;
		var SELECTION_TYPE 			=  	"image/*";
		var THUMBNAIL_HEIGHT_WIDTH 	= 	300;
		var ENCODING_OPTION_FACTOR  =   0.8;

		vm.imageList 		= 	[];
		vm.file      		=	{};
		vm.file.fileName	= 	"";

		vm.printImageList=function(){
			console.log("Image List :: ",vm.imageList);
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
									vm.imageList[index].thumbnailSrc = thumbnailSrc;
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


	}
})();
