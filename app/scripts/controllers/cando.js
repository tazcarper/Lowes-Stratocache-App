'use strict';

/**
 * @ngdoc function
 * @name stratocacheApp.controller:CandoCtrl
 * @description
 * # CandoCtrl
 * Controller of the stratocacheApp
 */
angular.module('stratocacheApp')
	.controller('CandoCtrl', ['$scope', 'CanDoList', function($scope, CanDoList) {

		$scope.list = [];
		$scope.hotspot_coord = [];
		$scope.bodyClass = 'cando';

		$scope.menu = ['Home Protection','Water Leak'];

		$scope.setMaster = function(section) {
			$scope.selected = section;
		};

		$scope.isSelected = function(section) {
			return $scope.selected === section;
		};

		$scope.sectionSelect = function(section){
			 $scope.activeSection = section;
		};

		$scope.isSelecteded = function(section) {
			return $scope.activeSection === section;
		};

		$scope.mainImage = {
			"background-image": "url('images/cando/house.jpg')",
		};
		$scope.checkIt = function(sec) {
			$scope.activeSection = sec;
			
			$scope.mainImage = {
				"background": "url('images/cando/" + $scope.list[sec].img + "')"
			};

			$scope.imgImg = 'images/cando/' + $scope.list[sec].img ;
			$scope.hotspot_coord = [];
			$scope.currentSection = $scope.list[sec];
			var hotspotList = $scope.list[sec].hotspots;
			for (var key in hotspotList) {

				var value = hotspotList[key];
				//console.log(value);
				$scope.hotspot_coord.push(value);
			}

		


		};
		
		CanDoList.query().$promise.then(function(data) {
			$scope.list = data;
			$scope.checkIt(0);
		});
		
	}]);