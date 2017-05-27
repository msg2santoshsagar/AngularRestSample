(function() {
	'use strict';

	angular
	.module('angularSampleApp')
	.service('SelectFileService', SelectFileService);

	SelectFileService.$inject = ['$q','$timeout'];

	function SelectFileService ($q,$timeout) {

		var defaultOptions ={
				selectionType : '',
				isMultiple    : false
		}

		var service ={
				selectFile :selectFile
		};
		return service;

		function selectFile(selectionType,isMultiple){
			var deferred = $q.defer();

			selectionType = selectionType || defaultOptions.selectionType;
			isMultiple    = isMultiple    || defaultOptions.isMultiple;


			//console.log("Select File Service called : selectionType, isMultiple ",selectionType,isMultiple);
			var fileElement = document.createElement("INPUT");

			fileElement.setAttribute("type","file");
			fileElement.setAttribute("accept",selectionType);
			if(isMultiple){
				fileElement.setAttribute("multiple","multiple");
			}

			document.body.appendChild(fileElement);

			fileElement.onchange = function(){

				var files	 = fileElement.files;
				console.log("FILE LIST :: ",files);

				var fileList = [];

				var readFiles = function (index) {
					var currentFile = files[index];
					if ( typeof currentFile !== undefined ) {
						var data = {};
						data.name = currentFile.name;
						data.type = currentFile.type;
						data.size = currentFile.size;

						var fileReader = new FileReader();
						fileReader.onload = function (e) {
							data.src = e.target.result
							fileList.push(data);
							if ( fileList.length === files.length ) {
								deferred.resolve(fileList);
							}else{
								index++;
								readFiles(index)
							}
						};
						fileReader.readAsDataURL(currentFile);
					}
				}

				readFiles(0);
			} 

			fileElement.click();


			$timeout(function(){
				try{
					document.body.removeChild(fileElement);
				}catch(err){
					console.error("Error occured while removing fileElement button");
				}
			},100);

			return deferred.promise;
		}



	}
})();
