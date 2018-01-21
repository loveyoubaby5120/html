/**
 * Created by pankai on 16/1/26.
 */

var app = angular.module('myApp', ['infinite-scroll']);


app.controller('MyController',
    function ($scope, demo) {
        $scope.demo = new demo();
        $scope.MoreTitle = "查看更多";
        $scope.show = function(){
            $('.mask').show(0,function(){
                $('body').css({'overflow':'hidden',
                                "position":"fixed"
                                });
            });
        }

        $scope.showTable = function($event,index){

            $('.table:eq('+index+')>.showMore>.last').toggleClass(function(index,cls){
                if($(this).hasClass('jtt')){
                    $scope.MoreTitle = "查看更多";
                }
                else{
                    $scope.MoreTitle = "收起";
                }
                return 'jtt';
            });

            $scope.demo.items[index].toggle = !$scope.demo.items[index].toggle;

        }

    });
// 创建后台数据交互工厂
app.factory('demo', function ($http) {
    var demo = function () {
        this.items = [];
        this.busy = false;
        this.toggle = false;
        this.num = 5;
    };
    demo.prototype.nextPage = function () {
        var _this = this;
        if (_this.busy || _this.num>5) return;
        _this.busy = true;


        var url = "data/data"+_this.num+".json";


        $http.get(url)
            .success(function(response) {
                response.forEach(function (date) {
                    array = {};
                    array.nrs = [];
                    array.toggle = true;
                    array.type =  date.type;
                    array.table =  date.table;
                    //array.blur = date.blur;
                    array[date.blur] = true;
                    date.nrs.forEach(function(value){
                        var nr = {name:value.name,number:value.number,jd:value.jd,xd:value.xd,zc:value.xd,zh:value.zh};
                        array.nrs.push(nr);
                    });
                    _this.items.push(array);
                    _this.busy = false;
                });
                _this.num++;
            }).error(function(){});



    };
    return demo;
});