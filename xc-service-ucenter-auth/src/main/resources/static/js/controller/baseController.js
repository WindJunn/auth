//品牌控制层
app.controller('baseController', function ($scope) {


    //重新加载列表 数据
    $scope.reloadList = function (keywords) {
        //切换页码
        $scope.search($scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage, keywords);
    };

    //分页控件配置
    $scope.paginationConf = {
        currentPage: 1,
        totalItems: '',
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.reloadList('');//重新加载
        }
    };

    $scope.selectIds = [];//选中的ID集合

    //更新复选
    $scope.updateSelections = function ($event, id) {
        if ($event.target.checked) {//如果是被选中,则增加到数组
            $scope.selectIds.push(id);
            console.log($scope.selectIds);
        } else {
            var idx = $scope.selectIds.indexOf(id);
            $scope.selectIds.splice(idx, 1);//删除
            console.log($scope.selectIds);

        }
    };

    $scope.selectStatus = [];//选中的ID集合

    $scope.updateStatus = function ($event, id) {
        if ($event.target.checked) {//如果是被选中,则增加到数组
            $scope.selectStatus.push(id);
            console.log($scope.selectStatus);
        } else {
            var idx = $scope.selectIds.indexOf(id);
            $scope.selectStatus.splice(idx, 1);//删除
            console.log($scope.selectStatus);

        }
    };

    $scope.selectSeat = [];//选中的ID集合

    $scope.updateSeat = function ($event, id) {
        if ($event.target.checked) {//如果是被选中,则增加到数组
            $scope.selectSeat.push(id);
            console.log($scope.selectSeat);
        } else {
            var idx = $scope.selectIds.indexOf(id);
            $scope.selectSeat.splice(idx, 1);//删除
            console.log($scope.selectSeat);

        }
    };

    $scope.jsonToString = function (jsonString, key) {
        var json = JSON.parse(jsonString);
        var value = "";
        for (i = 0; i < json.length; i++) {
            if (i > 0) {
                value += ",";
            }
            value += json[i][key];
        }
        return value;
    };

    $scope.searchObjectById = function (list, key, keyValue) {
        for (var i = 0; i < list.length; i++) {
            if (list[i][key] == keyValue) {
                return list[i];
            }
        }

        return null;
    }


});	