angular.module('myapp')
.controller('MainCtrl', function ($scope, $resource) {
    var Cat = $resource('/api/cats');

    function updateCats () {
        Cat.query(function (cats) {
            $scope.cats = cats;
        });
    }
    updateCats()

    $scope.greeting = 'hello';
    $scope.name = 'unnamed';
    $scope.greetMe = function (name) {
        Cat.save({
            name: name
        }, updateCats);
    }
    $scope.$watch('name', function (newVal, oldVal) {
        console.log(newVal, oldVal);
    });
})
