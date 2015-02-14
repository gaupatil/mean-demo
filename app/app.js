angular.module('myapp', ['ngRoute', 'ngResource'])
.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'MainCtrl',
        templateUrl: 'main.html'
    })
})
