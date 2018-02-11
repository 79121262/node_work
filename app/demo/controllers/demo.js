appCtrl.controller('demoCtrl', ['$rootScope','$scope','http', function($rootScope, $scope,http) {
     $scope.firstName = "John";
     $scope.lastName = "Doe";
    //alert($scope.lastName);
      var editor= CKEDITOR.replace( 'ckeditor1' , {
            language: 'zh-cn',
            uiColor: '#EEEEEE'
        });
CKEDITOR.config.extraPlugins = 'image2';
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
        ['Styles','Format','Font','FontSize','links'],
        ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
        ['TextColor','BGColor'],
         //超链接  取消超链接 锚点
                        ['Link','Unlink','Anchor']

        ];
       CKEDITOR.config.removePlugins = 'elementspath'; //去掉底部导航
        // 上传图片路径
       CKEDITOR.config.filebrowserImageUploadUrl = "/proxy/demo-web/file/fileUpload?isAttachment=0";

       CKEDITOR.config.filebrowserUploadUrl ='/proxy/demo-web/file/fileUpload?isAttachment=1';
       CKEDITOR.config.disableObjectResizing = true;
       CKEDITOR.config.image2_disableResizer = false;
        http.get('/proxy/demo-web/user/find', {
             loginName:'andy'
        }, function(argument) {
            //alert(JSON.stringify(argument));
        });
     $scope.data = function() {
        $scope.myVar = !$scope.myVar;

        var html = editor.getData();
        $("#content").html(html);
     }

}]);
