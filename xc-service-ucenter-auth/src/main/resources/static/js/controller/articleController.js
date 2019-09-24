//控制层
app.controller('articleController', function ($scope,$controller, articleService) {

    $controller('baseController', {$scope: $scope});//继承

    $scope.urlss="";
    $scope.findUrl = function () {
        articleService.getBusById().success(
            function (response) {

                $scope.urlss = response.url;
                console.log(response);
                console.log($scope.urlss)
            }
        );
    };

});
