//服务层
app.service('articleService', function ($http) {


    this.getBusById = function () {
        return $http.get('data/getUrl');
    };


});
