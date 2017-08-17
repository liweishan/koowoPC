$(function(){
//	任务栏首页的链接
    $('nav .left_ul li a').click(function(){
    	$('nav .left_ul li a').removeClass('active');    	
    	$([this]).addClass('active');
    	$([this]).css('textDecoration','none');
    });
//	更多服务隐藏显示
	$('.nav_right .service').hover(function(){
		$('header .service_header').show();
	},function(){
		$('header .service_header').hide();
	});
	$('header .service_header ul li').hover(function(){
		$(this).css({'background':'black'});
	},function(){
		$(this).css({'background':'rgba(0,0,0,0.7)'});
	});
//	登录显示隐藏
	$('.nav_right .Sign_in').hover(function(){
		$('header .entry_header').show();
		$('.nav_right .Sign_in .Sign').css({'background':'url(img/12.png) no-repeat center right' });
	},function(){
		$('header .entry_header').hide();
		$('.nav_right .Sign_in .Sign').css({'background':'url(img/kuwo1.png) no-repeat center right' });
	});
	$('header .entry_header ul li a').hover(function(){
		$(this).css({'color':'#ffcd2d'});
	},function(){
		$(this).css('color','#fff');
	});
//	歌单
    $('.song_sheet_content ul li').hover(function(){
    	$('.song_sheet_content .cover a').eq($(this).index()).show();
    },function(){
    	$('.song_sheet_content .cover a').hide();
    });
//  歌手
    $('.singer_contenr ul .singer_contenr_li').hover(function(){
    	$('.singer_contenr ul li #singer_contenr_hide').eq($(this).index()).show();
    	$('.singer_contenr .cover').eq($(this).index()).hide();
    },function(){
    	$('.singer_contenr ul li #singer_contenr_hide').hide();
    	$('.singer_contenr .cover').show();
    });
})
