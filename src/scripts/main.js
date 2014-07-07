'use strict';

angular.module('root', ['data', 'pasvaz.bindonce'])
    .controller('index' , ['$scope', 'courseData', function($scope, courseData) {
        $scope.courseData = courseData;
    }]);
