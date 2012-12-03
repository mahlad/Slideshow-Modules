// Bottom Text Slideshow JavaScript
$(function(){	
	var slideshow=$('div.sl-btm div.sl-btm-img'),
		allSlides=$('div.sl-btm-img img'),
		slNext=$('div.sl-btm div.sl-btm-next'),
		slPrev=$('div.sl-btm div.sl-btm-prev'),
		slText=$('div.sl-btm-text'),
		curentSlide=0,
		autoplayID=false;
	//alert((-600*curentSlide)+'px');
	go2slide=function(n){
		if(n>allSlides.length-1)n=0;
		if(n<0)n=allSlides.length-1;
		slideshow.animate({
			left:-600*n
		},500,'ease-in-out');
		slText.animate({
			left:-600*n
		},500,'ease-in-out');
		// slImg.css('left',-600*n+'px');
		// slText.css('left',-600*n+'px');
		curentSlide=n;
	};
	$('div.sl-btm div.sl-btm-next').click(nextSlide=function(){
		go2slide(curentSlide+1);
	});
	slPrev.click(prevSlide=function(){
		go2slide(curentSlide-1);
	});
	(startAuto=function(){
		if(autoplayID)return;
		autoplayID=setInterval(nextSlide,2000);
	})();
	stopAuto=function(){
		clearInterval(autoplayID);
		autoplayID=false;
	}
	$('div.sl-btm div.sl-btm-img').mouseout(startAuto);
	$('div.sl-btm div.sl-btm-img').mouseover(stopAuto);
});
/*_-_-_-_-_-_-_-with javascript-_-_-_-_-_-_-_*/
/*
window.onload=function(){
	var slideshow=document.getElementsByClassName('sl-btm').item(0),
		listImg=slideshow.getElementsByClassName('sl-btm-img').item(0),
		listText=slideshow.getElementsByClassName('sl-btm-text').item(0),
		totalImg=slideshow.getElementsByClassName('sl-btm-img').item(0).getElementsByTagName('img'),
		curentSlide=0;
		go2slide=function(n){
			if(n>totalImg.length-1)n=0;
			if(n<0)n=totalImg.length-1;
			listImg.style.left=(-600*n)+'px';
			listText.style.left=(-600*n)+'px';
			curentSlide=n;
		}
		nextSlide=function(){
			go2slide(curentSlide+1);	
		}
		prevSlide=function(){
			go2slide(curentSlide-1);
		}
		var flag=false;
		(startAuto=slideshow.onmouseout=function(){
			flag=setInterval(nextSlide,2000);
			document.getElementsByClassName('sl-btm-next').item(0).style.display='none';
			document.getElementsByClassName('sl-btm-prev').item(0).style.display='none';
			if(flag)return;	
			
		})();
		stopAuto=slideshow.onmouseover=function(){
			clearInterval(flag);
			flag=false;	
			document.getElementsByClassName('sl-btm-next').item(0).style.display='block';
			document.getElementsByClassName('sl-btm-prev').item(0).style.display='block';
		}
		document.getElementsByClassName('sl-btm-next').item(0).onclick=nextSlide;
		document.getElementsByClassName('sl-btm-prev').item(0).onclick=prevSlide;
			
}*/