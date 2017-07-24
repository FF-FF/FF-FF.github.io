$(function(){
	//导航栏
	$(".help").hover(function(){
		$(this).find("ul").stop().slideDown()
	},function(){
		$(this).find("ul").stop().slideUp()
	})
	//首页条
	$(".navtext1f").hover(function(){
		$(this).find("ul").stop().slideDown()
	},function(){
		$(this).find("ul").stop().slideUp()
	})
	//图片
	$(".smallimg ul li").mouseover(function(){
		var a=$(this).find("img").attr("src")
		$(".show img").attr("src",a);
	})
	$(".smallimg ul li").hover(function(){
		$(this).attr("style","opacity:1;border-bottom:1px solid red")
	},function(){
		$(this).attr("style","opacity:0.5;border-bottom:0")
	})
	$(".color div img").click(function(){
		var a=$(this).attr("src")
		$(".show img").attr("src",a);
	})
	//尺码
	$(".size div span").click(function(){
		$(".size div span").attr("index","0");
		$(this).css("border","1px solid red").attr("index","1");
		$(this).siblings().css("border","1px solid #e5e5e5").attr("index","0");

	})
	$(".size div span").hover(function(){
		if($(this).attr("index")==0){
			$(this).css("border","1px solid #000");
		}		
	},function(){
		if($(this).attr("index")==0){
			$(this).css("border","1px solid #e5e5e5");
		}
	})
	//购买数量
	var num=parseInt($(".num>div>span").html());
	$(".num>div>span").next().click(function(){
		num++
		$(this).prev().html(num);
	})
	$(".num div span").prev().click(function(){
		num--
		if(num<1){
			num=1;
		}else{
			$(this).next().html(num);
		}
	})
	//商品详情 累计评价切换
	$(".mall").click(function(){
		$(".maindetails").show();
		$(".evaluat").hide()
	})
	$(".eva").click(function(){
		$(".maindetails").hide();
		$(".evaluat").show()
	})
	//楼层
	//不想做了。还有个固定定位
})