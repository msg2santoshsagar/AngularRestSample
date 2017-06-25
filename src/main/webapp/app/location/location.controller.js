(function() {
	'use strict';

	angular
	.module('angularSampleApp')
	.controller('LocationController', LocationController);

	LocationController.$inject = ['$window'];

	function LocationController ($window) {
		var vm 						=  	this;
		var gApiKEy ="AIzaSyDUD3Gf-Oge3ePIX0jrI1yNT8voJJRVTXM";




		var map, infoWindow;

		function initMap() {
			console.log("Init Map called");
			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: -34.397, lng: 150.644},
				zoom: 6
			});
			infoWindow = new google.maps.InfoWindow;

			// Try HTML5 geolocation.
			if (navigator.geolocation) {
				console.log("Navigator GeoLocation Exist");
				navigator.geolocation.getCurrentPosition(function(position) {
					console.log("Current Position Found -- ",position);
					var pos = {
							lat: position.coords.latitude,
							lng: position.coords.longitude
					};

					infoWindow.setPosition(pos);
					infoWindow.setContent('Location found.');
					infoWindow.open(map);
					map.setCenter(pos);
				}, function() {
					handleLocationError(true, infoWindow, map.getCenter());
				});
			} else {
				// Browser doesn't support Geolocation
				handleLocationError(false, infoWindow, map.getCenter());
			}
		}

		function handleLocationError(browserHasGeolocation, infoWindow, pos) {
			console.log("Error Occured while fetching Geo Location");
			infoWindow.setPosition(pos);
			infoWindow.setContent(browserHasGeolocation ?
					'Error: The Geolocation service failed.' :
			'Error: Your browser doesn\'t support geolocation.');
			infoWindow.open(map);
		}

		initMap();

	}//Function End
})();
