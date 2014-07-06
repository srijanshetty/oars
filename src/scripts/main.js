angular.module('root', ['data', 'pasvaz.bindonce'])
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })
    .controller('index' , ['$scope', 'courseData', function($scope, courseData) {
        $scope.courseData = courseData;
        $scope.startSearch = function() {
            $scope.searchQuery = $scope.search;
        }
    }]);
