$(function(){
	/*登录注册的切换*/
	$(".old p").click(function(){
		$('.user').hide();
		$('.login').show();
	})
	$(".new p").click(function(){
		$('.user').show();
		$('.login').hide();
	})
	/*获取验证码*/
	var n=60;
	$("#getcode").click(function(){
		if(n<6&&n>0){

		}else{
			$("#getcode").val(n+"秒后重试")
			var go=function(){
				n--;
				if(n>0){
					$("#getcode").val(n+"秒后重试")
				}else{
					clearInterval(t);
					$("#getcode").val("重新发送");
					t=null;
					n=60;
				}
			}
			var t=setInterval(go,1000);
		}
	})
})
