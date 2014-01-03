var app = angular.module('jobs', []);

function internshipCtrl($scope, $http) {
	$http({method: 'GET', url: '/jobs.json'}).success(function(data){
		$scope.jobs = data.jobs;
		$scope.mail = 'mailto:' + job.contact + '?subject=' + job.name + '%20Inquiry%20-%20T2G';
	});

}