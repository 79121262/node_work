appCtrl.controller('demoCtrl', ['$rootScope','$scope','http', function($rootScope, $scope,http) {
     $scope.firstName = "John";
     $scope.lastName = "Doe";
    //alert($scope.lastName);


      var editor= CKEDITOR.replace( 'ckeditor1' , {
            language: 'zh-cn',
            uiColor: '#EEEEEE'
        });

        CKEDITOR.config.toolbar = 'Full';
        //工具栏
        CKEDITOR.config.toolbar_Full = [
        //['Source','-','Save','NewPage','Preview','-','Templates'],
        ['Cut','Copy','Paste','-','-','-','-', '-','-'],
        ['Undo','Redo','-','-','-','-','-','-'],
        ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
        ['NumberedList','BulletedList','-','-','-','-'],
        ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
        '/',
        ['Styles','Format','Font','FontSize'],
        ['TextColor','BGColor']
        ];
        CKEDITOR.config.removePlugins = 'elementspath'; //去掉底部导航


        http.get('/proxy/demo-web/user/find', {
loginName:'Andy'
                }, function(argument) {
alert(argument);
                });
}]);
