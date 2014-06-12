angular.module('root', ['data'])
    .controller('index' , ['$scope', 'courseData', function($scope, courseData) {
        $scope.value = "soume";
        $scope.courseData = courseData;
    }]);
