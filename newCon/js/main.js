/* 返回顶部 */
function scrolltopBar(){
  /* 返回顶部的显示/隐藏 */
  $(document).scroll(function(){
    var scrollH = $(document).scrollTop() ||  $(window).scrollTop();
    if(scrollH < 100){
      $('.back_top').fadeOut(50);
    }else{
      $('.back_top').fadeIn(50);
    };
  });
  /* 返回顶部 */
  $('.back_top').click(function(){
    $('body,html').animate({scrollTop:0},800);
  });
}

/* 往届回顾 */
function PRIcon(){
  var num = 0;
  var timer=null;
  $('.PR_icon').mouseover(function(){
    var myindex = $(this).parent().index();
    $(this).stop().addClass('PR_icon_cur');
    $(this).parent().siblings().children('.PR_icon').stop().removeClass('PR_icon_cur');
    $('.PR_show li').eq(myindex).stop().addClass('PR_show_cur');
    $('.PR_show li').eq(myindex).siblings().stop().removeClass('PR_show_cur');
    num=myindex;
  })

  function autoplay(){
    num++;
    if(num>3){num=0};
    $('.PR_icon').eq(num).stop().addClass('PR_icon_cur');
    $('.PR_icon').eq(num).parent().siblings().children('.PR_icon').stop().removeClass('PR_icon_cur');
    $('.PR_show li').eq(num).stop().addClass('PR_show_cur');
    $('.PR_show li').eq(num).siblings().stop().removeClass('PR_show_cur');
  }
  timer=setInterval(autoplay,2000);

  $('.PR_icon').hover(function(){                     //鼠标移上时，自动播放暂停；
    clearInterval(timer);
  },function(){
    clearInterval(timer);
    timer=setInterval(autoplay,2000);
  })
  $('.PR_icon').click(function(){                     //鼠标移上时，自动播放暂停；
    clearInterval(timer);
  },function(){
    clearInterval(timer);
    timer=setInterval(autoplay,2000);
  })
}


$(function(){
  /* 导航当前样式 */
  var navCurrentFn =(function(){
    $('.dropdown').on('click',function(){
      $(this).addClass('navCurrent').siblings('.dropdown').removeClass('navCurrent');
    })
  })();

  /* 选项卡：*/
  var TabbedFn =(function(){
    $(".tabs_tit").click(function() {
      $(this).find(".tab_item").addClass('tabs_cur');
      $(this).siblings().find(".tab_item").removeClass('tabs_cur');
      $(this).addClass('moving_bg');
      $(this).siblings().removeClass('moving_bg');
      $(".tabslider_li").eq($(this).index()).show().siblings().hide();
    });
  })();
});

/* 滚动后导航栏悬浮 */
function delay(num,attr1,attr2){
    var wh=parseInt($(document).scrollTop());
    /*alert(wh)*/
    if(wh>num){
        $(attr1).addClass(attr2);
    }else{
        $(attr1).removeClass(attr2);
    };
};