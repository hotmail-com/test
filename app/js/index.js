var TextController = ['$http', '$scope', function($http, $scope){
	$http.get('http://localhost:8080/app/js/test.json').success(function(data){
		$scope.q_list = data;
	});

	$scope.clear = function(str){
		var strObj = $(str);
		if(strObj.type=="radio"){
			$(strObj).parents('.row').find('label').removeClass('bold');
		}
		$(strObj).parents('.row').find('label').removeClass('error')
		$(strObj).next('label').toggleClass('bold');
	}

	$scope.submitForm = function(){
		$('form .row').find('label').removeClass('error');
		var each_row = $('form .row');
		$.each(each_row, function(){
			if($(this).find('label').length>0){
				var label = $(this).find('label')[0].getAttribute('for');
				if($(this).find('input[type=checkbox]').length>0 && 
					$(this).find('input[type=checkbox]:checked').length==0 ){
					$('label[for='+label+']').addClass('error');
				}

				if($(this).find('input[type=radio]').length>0 && 
					$(this).find('input[type=radio]:checked').length==0){
					$('label[for='+label+']').addClass('error');
				}

				if($(this).find('input[type=text]').val()==''){
					$('label[for='+label+']').addClass('error');
				}

				if($(this).find('select').val()==''){
					$('label[for='+label+']').addClass('error');
				}
			}
		})
	}
}]