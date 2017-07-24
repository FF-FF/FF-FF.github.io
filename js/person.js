$(function(){
	$(".menuright2").prev().children().click(function(){
		$(this).attr("class","baby");
		$(this).siblings().attr("class","stom");
	})
/*	$(".navtext ul li").click(function(){
		$(this).siblings().attr("class","")
		$(this).siblings().css("color","#404040")
		$(this).attr("class","navtextc");
		$(this).css("color","#fff");
	})*/
	$(".navtext ul li").hover(function(){
		if($(this).attr('class')=='navtextc'){
			$(this).css("color","#fff")
		}else{
			$(this).css("color","#ff3366");
		}
	},function(){
		if($(this).attr('class')=='navtextc'){
			$(this).css("color","#fff")
		}else{
			$(this).css("color","#404040");
		}
	})
})