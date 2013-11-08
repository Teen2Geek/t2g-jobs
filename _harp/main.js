var app = angular.module('jobs', []);

function internshipCtrl($scope, $http) {
	$http({method: 'GET', url: '/jobs.json'}).success(function(data){
		$scope.jobs = data.jobs;
	});

}