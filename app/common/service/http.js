appServices.factory('http', ['$http','$location', function($http,$location) {
	var SEVRER_RUL = '';
	var ajaxCount = 0;
	var search = $location.search();
	var loginUrl =  'https://auth.bfintra.com/cas/auth/login.html?service=https%3A%2F%2Fadmin.bfintra.com%2Fproxy%2Fvpal-oss%2Fcas%2Fj_cas_login';
	return {
		get: function(url, param, successFn, errorFn) {
			NProgress.start();
			$('.loadingMask').removeClass('hide');
			ajaxCount++;
			var req = {
				method: 'GET',
				url: SEVRER_RUL + url,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: param,
				cache: false
			}
			return $.ajax(req)
				.error(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (typeof errorFn === 'function') {
						errorFn(response)
					}
				})
				.success(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (response && response.data && (response.data.respCode == 'not.login' || response.data.respCode == 302)) {
						$.confirm('用户认证信息过期，请重新登录', function() {
							if(search.targetName!='beifu'){
								location.href = loginUrl;
							}
						}, function() {}, false)
					}
					if (typeof response.error !== 'undefined') {
						alert(response.error.message)
						return false
					}
					if (typeof successFn === 'function') {
						successFn(response)
					}
				})
		},
		getJson: function(url, param, successFn, errorFn) {
			NProgress.start();
			$('.loadingMask').removeClass('hide');
			ajaxCount++;
			var req = {
				method: 'GET',
				url: SEVRER_RUL + url,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				data: JSON.stringify(param),
				cache: false
			}
			return $.ajax(req)
				.error(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (typeof errorFn === 'function') {
						errorFn(response)
					}
				})
				.success(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (response && response.data && (response.data.respCode == 'not.login' || response.data.respCode == 302)) {
						$.confirm('用户认证信息过期，请重新登录', function() {
							if(search.targetName!='beifu'){
								location.href = loginUrl;
							}
						}, function() {}, false)
					}
					if (typeof response.error !== 'undefined') {
						alert(response.error.message)
						return false
					}
					if (typeof successFn === 'function') {
						successFn(response)
					}
				})
		},
		post: function(url, param, successFn, errorFn) {
			NProgress.start();
			$('.loadingMask').removeClass('hide');
			ajaxCount++;
			var req = {
				method: 'POST',
				url: SEVRER_RUL + url,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: param,
				cache: false
			}
			return $.ajax(req)
				.error(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (typeof errorFn === 'function') {
						errorFn(response)
					}
					if (!errorFn && typeof response.error !== 'undefined') {
						alert(response.responseJSON.error.message)
						return false
					}
				})
				.success(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (response && response.data && (response.data.respCode == 'not.login' || response.data.respCode == 302)) {
						$.confirm('用户认证信息过期，请重新登录', function() {
							if(search.targetName!='beifu'){
								location.href = loginUrl;
							}
						}, function() {}, false)
					}
					if (typeof response.error !== 'undefined') {
						alert(response.error.message)
						return false
					}
					if (typeof successFn === 'function') {
						successFn(response)
					}
				})
		},
		postJson: function(url, param, successFn, errorFn) {
			NProgress.start();
			$('.loadingMask').removeClass('hide');
			ajaxCount++;
			var req = {
				method: 'POST',
				url: SEVRER_RUL + url,
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				data:  JSON.stringify(param),
				cache: false,
				timeout : 2000
			}
			return $.ajax(req)
				.error(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (typeof errorFn === 'function') {
						errorFn(response)
					}
					if (!errorFn && typeof response.error !== 'undefined') {
						try{
	                        alert(response.responseJSON.error.message)
	                        return false
	                    }catch(e){
	                    	alert("服务器接口异常");
	                    	return false;
	                    }
                    }
				})
				.success(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (response && response.data && (response.data.respCode == 'not.login' || response.data.respCode == 302)) {
						$.confirm('用户认证信息过期，请重新登录', function() {
							if(search.targetName!='beifu'){
								location.href = loginUrl;
							}
						}, function() {}, false)
					}
					if (typeof response.error !== 'undefined') {
						alert(response.error.message)
						return false
					}
					if (typeof successFn === 'function') {
						successFn(response)
					}
				})
		},
		uploadFile : function(url,data,successFn,errorFn){
			NProgress.start();
			$('.loadingMask').removeClass('hide');  //mask show
			ajaxCount ++;
			var req = {
					    url: SEVRER_RUL + url,
					    type: 'POST',
					    cache: false,
					    data: data,
					    processData: false,
					    contentType: false,
					    timeout : 3000
			};
			return $.ajax(req)
				.error(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (typeof errorFn === 'function') {
						errorFn(response)
					}
				})
				.success(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (response && response.data && (response.data.respCode == 'not.login' || response.data.respCode == 302)) {
						$.confirm('用户认证信息过期，请重新登录', function() {
							if(search.targetName!='beifu'){
								location.href = loginUrl;
							}
						}, function() {}, false)
					}
					if (typeof response.error !== 'undefined') {
						alert(response.error.message)
						return false
					}
					if (typeof successFn === 'function') {
						successFn(response)
					}
				});
		},
		downloadFile : function(url,data,successFn,errorFn){
			NProgress.start();
			$('.loadingMask').removeClass('hide');  //mask show
			ajaxCount ++;
			var req = {
					    url: SEVRER_RUL + url,
					    type: 'POST',
					    cache: false,
					    data: data,
					    processData: false,
					    contentType: false,
					    timeout : 5000
			};
			return $.ajax(req)
				.error(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (typeof errorFn === 'function') {
						errorFn(response)
					}
				})
				.success(function(response) {
					ajaxCount--;
					if (ajaxCount === 0) {
						NProgress.done();
						$('.loadingMask').addClass('hide');
					}
					if (response && response.data && (response.data.respCode == 'not.login' || response.data.respCode == 302)) {
						$.confirm('用户认证信息过期，请重新登录', function() {
							if(search.targetName!='beifu'){
								location.href = loginUrl;
							}
						}, function() {}, false)
					}
					if (typeof response.error !== 'undefined') {
						alert(response.error.message)
						return false
					}
					if (typeof successFn === 'function') {
						successFn(response)
					}
				});
		}
	}
}]);