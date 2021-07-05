var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
function ShowtoHide(myid,mysrc) {
if(document.getElementById(myid).innerHTML=="") {
//alert('<img src="'+mysrc+'"/>');
document.getElementById(myid).innerHTML='<img src="'+mysrc+'"/>';}
else
{
document.getElementById(myid).innerHTML="";
}}


(function($) {
	
	/*function fullHeight() {
		var windowHeight = $(window).height();				
		$('#slideshow-screen').css('height', windowHeight);
	}*/
	
	$(document).ready(function() {
		
		$("#btn-to-top").click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
		
		$('#top-bar__navigation-toggler').click(function(){
			if($(this).hasClass('is-active')) {
				$(this).removeClass('is-active');
				$('#top-bar').removeClass('is-expanded');
				//$('body').css('overflow', '');
			} else {
				$(this).addClass('is-active');
				$('#top-bar').addClass('is-expanded');
				//$('body').css('overflow', 'hidden');
			}
		});
		
		$('.nav > li > a, .nav > li > span').each(function(){
			$(this).wrapInner('<span></span>');
		});
		
		if($(window).width() < 992) {
			$('#top-bar__navigation li.deeper.parent > span, #top-bar__navigation li.deeper.parent > a').click(function(){
				$(this).next().slideToggle();
				return false;
			});
		}
		
		$('#slideshow-screen #arrow').click(function(){
			$('html, body').animate({scrollTop:$('#content').offset().top},800);
            return false;
		});
		
		//fullHeight();
		
	});
	
	var lastScrollTop = 199;
	
	$(window).scroll(function(event){		
		if ($(this).scrollTop() > 700) {
            $("#btn-to-top-wrap").fadeIn();
        } else {
            $("#btn-to-top-wrap").fadeOut();
        }		
		
		//($(this).scrollTop() > 200 ) ? $('#top-bar').addClass('is-fixed top-bar--dark') : $('#top-bar').removeClass('is-fixed top-bar--dark is-visible');
		
		st = $(this).scrollTop();
        if(st < lastScrollTop && st > 200) {
            $('#top-bar').addClass('is-visible');
        } else {
            $('#top-bar').removeClass('is-visible');
        }
        lastScrollTop = st;
    });
	
})(jQuery);




function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function zopen(id){
	      
	      //if(op==null)return;
        for(var i=0;i< datalist.length;i++){
            if(datalist[i].label.indexOf(id)){
            sessionStorage["tag1"]="tip"+datalist[i].id;
            window.location.href = './'+datalist[i].url;
            break;
            }         
        }
}

(function($){
 $.fn.extend({
 accordion: function(options) {
    var defaults = {
      accordion: 'true',
      speed: 200,
      closedSign: '[+]',
      openedSign: '[-]'
    };
    var opts = $.extend(defaults, options);
     var $this = $(this);
     $this.find("li").each(function() {
       if($(this).find("ul").size() != 0){
         $(this).find("a:first").append("<span>"+ opts.closedSign +"</span>");
         if($(this).find("a:first").attr('href') == "#"){
           $(this).find("a:first").click(function(){return false;});
         }
       }
     });
     $this.find("li.active").each(function() {
       $(this).parents("ul").slideDown(opts.speed);
       $(this).parents("ul").parent("li").find("span:first").html(opts.openedSign);
     });
     $this.find("li a").click(function() {
       if($(this).parent().find("ul").size() != 0){
         if(opts.accordion){
           if(!$(this).parent().find("ul").is(':visible')){
             parents = $(this).parent().parents("ul");
             visible = $this.find("ul:visible");
             visible.each(function(visibleIndex){
               var close = true;
               parents.each(function(parentIndex){
                 if(parents[parentIndex] == visible[visibleIndex]){
                   close = false;
                   return false;
                 }
               });
               if(close){
                 if($(this).parent().find("ul") != visible[visibleIndex]){
                   $(visible[visibleIndex]).slideUp(opts.speed, function(){
                     $(this).parent("li").find("span:first").html(opts.closedSign);
                   });
                   
                 }
               }
             });
           }
         }
         if($(this).parent().find("ul:first").is(":visible")){
           $(this).parent().find("ul:first").slideUp(opts.speed, function(){
             $(this).parent("li").find("span:first").delay(opts.speed).html(opts.closedSign);
           });
         }else{
           $(this).parent().find("ul:first").slideDown(opts.speed, function(){
             $(this).parent("li").find("span:first").delay(opts.speed).html(opts.openedSign);
           });
         }
       }
     });
 }
});
})(jQuery);

$(document).ready(function() {
  $(".topnav").accordion({
    accordion:false,
    speed: 200,
    closedSign: '<i class="fa fa-chevron-right"></i>',
    openedSign: '<i class="fa fa-chevron-down"></i>'
  });
  
});

$(function(){
$("li").click(function (e){
	var val=e.target.id;
	if(val.includes("tip"))
	sessionStorage["tag1"]=val;
	//console.log(val);
	})
});	


/*
function conlist(){
        var content = document.getElementById('lab1');
        var tag = sessionStorage["tag1"];
        content.innerHTML = '<p><a href="../index.html"><h2>五宙坐标</h2></a></p><ul>';      
        for(var i=0;i< datalist.length;i++){
            if(datalist[i].label.includes(tag))
            content.innerHTML += '<li><a href="../'+datalist[i].url+'">'+datalist[i].title+'</a></li>';           
        }
        content.innerHTML += '</ul>';
}
*/
(function($){
      var content = document.getElementById('top-bar__inner');
      if(content==null)return;
			content.innerHTML='<div id="top-bar__logo">'+
		  '<h1 class="site-logo"><a href="../index.html"><i class="fa fa-home"></i> 伍洲坐标</a></h1>'+
      '<span id="home-ico">'+
      '<a class="weibo" target="_blank" href="https://weibo.com/" title="Weibo"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-weibo fa-stack-1x fa-inverse"></i></span></a>'+
      '<a class="linkedin" target="_blank" href="https://www.linkedin.com/" title="Linkedin"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-linkedin-square fa-stack-1x fa-inverse"></i></span></a>'+
      '<a class="comments" target="_blank" href="#" title="comments"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-comments-o fa-stack-1x fa-inverse"></i></span></a>'+
      '<a class="email" target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=bxcWFS8YGhUHABpBFxYV" title="Email"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-envelope fa-stack-1x fa-inverse"></i></span></a>'+
      '</span></div><a id="top-bar__navigation-toggler" href="javascript:void(0);"><span></span></a>';
			//'<div id="top-bar__navigation-wrap"><nav id="top-bar__navigation" class="navigation">';
        var newDiv = document.createElement('div');
        newDiv.id = "top-bar__navigation-wrap";
        var newnav = document.createElement('nav');
        newnav.className = "navigation";
        newnav.id = "top-bar__navigation";
        			
        var tag = sessionStorage["tag1"];
        
        var newUL1 = document.createElement('ul');
        newUL1.className = "topnav";
        //content.innerHTML = '<ul class="topnav">';      
        //newUL1.innerHTML += '<li><a href="../index.html"><i class="fa fa-home"></i> 伍洲坐标</a></li>'; 
        for(var z=0;z<labels.length;z++){

        	var newUL2 = document.createElement('ul');
          var num = 0;
          for(var i=0;i< datalist.length;i++){
            if(datalist[i].label.includes(labels[z].id)){
            var tip = "tip"+datalist[i].id;
            var cs  = (tag==tip)?'<li class="active">':'<li>';
            newUL2.innerHTML += cs+'<a id="'+tip+'" href="../'+datalist[i].url+'">'+datalist[i].title+'</a></li>';
            
            num++;
            }           
          }
        	 var newLI = document.createElement('li');
        	          
           if(num > 0){
           	newLI.innerHTML += '<a href="javascript:;">'+labels[z].label+'『 '+num+' 』</a>'; 
            newLI.appendChild(newUL2);
           }
           else
           newLI.innerHTML += '<a href="javascript:;">'+labels[z].label+'</a>'; 
           
           newUL1.appendChild(newLI);
          
        }
        newUL1.innerHTML += '<li><a href="../tools.html"><i class="fa fa-balance-scale"></i> 小工具</a></li><li><a href="../about.html"><i class="fa fa-coffee"></i> 关于</a></li>';
        newnav.appendChild(newUL1);
        newDiv.appendChild(newnav);
        content.appendChild(newDiv);
})(jQuery);

function Homelist(id,list){

        var content = document.getElementById(id);
            
        //var tag = sessionStorage["tag1"];
        
        //循环生成div标签，然后为innerHTML属性添加内容
        for(var i=0;i< datalist.length;i++){
        	
        	if(datalist[i].label.includes(list)){
            //生成新标签
            var newDiv = document.createElement('div');
            //绑定类名和ID
            newDiv.className = "entry";
            //newDiv.id = "tip"+datalist[i].id;
            //改变位置
            //var topValue = parseInt(Math.random()*400);
            //var leftValue = parseInt(Math.random()*700);
            // newDiv.style.top = topValue+"px";
            //newDiv.style.left = leftValue+"px";

            newDiv.innerHTML = '<h1><a class="post-title" href="'+datalist[i].url+'" rel="bookmark">'+datalist[i].title+'</a></h1>'+            
                                '<div class="post-meta"><i class="fa fa-calendar" aria-hidden="true"></i> '+datalist[i].time+
                                ' <i class="fa fa-link"></i> <a class="post-title" href="'+datalist[i].url+'">Read more ...</a></div>'+
                                '<div class="clear"></div><div class="entry-content"><a href="'+datalist[i].url+'" rel="tag">'+
                                '<img src="./file/'+datalist[i].pic+'" class="thumb" /></a>'+datalist[i].resume+
                                '</div></div>';
            //把新创建的元素放入content里面
            content.appendChild(newDiv);
           }
         //centerY += newDiv.offsetHeight;
   if((document.documentElement.clientWidth > 1100 && i > 4 )|| (document.documentElement.clientWidth < 1100 && i > 2 ))
        break;

  /*if(centerY/2 > document.documentElement.clientHeight-400){ break;}*/            
        }
}

//不是首页
/*if(!RegExp(/index/).test(window.location.href))
conlist();
else
{
//Homelist('software',1);
//Homelist('radio',2);
//Homelist('mcu',3);
//Homelist('rd',4);
//Homelist('data',5);
}
*/