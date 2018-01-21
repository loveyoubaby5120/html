/**
 * Created by pankai on 16/1/26.
 */

var app = angular.module('myApp', []);


app.controller('MyController',
    function ($scope,$http) {
        $scope.MoreTitle = "查看更多";
        $scope.item = [];
        $scope.type = '';
        $scope.table = '';
        $scope.toggle = false;
        $scope.url = "data/data5.json";

        $scope.update = function(){
            $http.get($scope.url)
            .success(function(response) {
                response.forEach(function (date) {
                    $scope.toggle = false;
                    $scope.type =  date.type;
                    $scope.table =  date.table;
                    date.nrs.forEach(function(value){
                        var nr = {name:value.name,number:value.number,jd:value.jd,xd:value.xd,zc:value.xd,zh:value.zh};
                        $scope.item.push(nr);
                    });
                });
            }).error(function(){});
        }

        

        $scope.show = function(){
            $('.mask').show(0,function(){
                $('body').css({'overflow':'hidden'});
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

            $scope.toggle = !$scope.toggle;

        }

        $scope.update();

    });
