angular.module('vidzyApp', ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'MainController'
        })
        .when('/add', {
            templateUrl: 'partials/add.html',
            controller: 'AddController'
        })
        .when('/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'EditController'
        })
        .otherwise({ redirectTo: '/' });
})
.controller('MainController', function($scope, $http) {
    $http.get('/api/videos').then(function(response) {
        $scope.videos = response.data;
    });

    $scope.delete = function(id) {
        $http.delete('/api/videos/' + id).then(function() {
            $scope.videos = $scope.videos.filter(v => v._id !== id);
        });
    };
})
.controller('AddController', function($scope, $http, $location) {
    $scope.addVideo = function() {
        if (!$scope.video.title || !$scope.video.genre || !$scope.video.description) return;
        $http.post('/api/videos', $scope.video).then(function() {
            $location.path('/');
        });
    };
})
.controller('EditController', function($scope, $http, $routeParams, $location) {
    const id = $routeParams.id;
    $http.get('/api/videos').then(function(response) {
        const video = response.data.find(v => v._id === id);
        $scope.video = angular.copy(video);
    });

    $scope.updateVideo = function() {
        $http.put('/api/videos/' + id, $scope.video).then(function() {
            $location.path('/');
        });
    };
});