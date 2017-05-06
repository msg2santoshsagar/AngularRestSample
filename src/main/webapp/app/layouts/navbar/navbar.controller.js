(function() {
	'use strict';

	angular
	.module('angularSampleApp')
	.controller('NavbarController', NavbarController);

	NavbarController.$inject = ['$state','LoginService'];

	function NavbarController ($state,LoginService) {
		var vm = this;
		vm.login=login;

		function login(){
			LoginService.open();
		}




	}
})();
