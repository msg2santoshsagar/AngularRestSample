(function() {
	'use strict';

	angular
	.module('angularSampleApp')
	.controller('ThumbnailGeneratorTestController', ThumbnailGeneratorTestController);

	ThumbnailGeneratorTestController.$inject = ['$rootScope','SelectFileService','ThumbnailGenerator'];

	function ThumbnailGeneratorTestController ($rootScope,SelectFileService,ThumbnailGenerator) {
		var vm 				=  this;
		var SELECTION_TYPE 	=  "image/*";

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
									var thumbnailSrc = ThumbnailGenerator.generateThumbnail(image,0.25);
									vm.imageList[index].thumbnailSrc = thumbnailSrc;
									console.log("thumbnail Setting Done ",index);
									if(index < len-1){
										setThumbnailData(index++);
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
