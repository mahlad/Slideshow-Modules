// Bottom Text Slideshow JavaScript
window.onload=function(){
	var slideshow=document.getElementsByClassName('sl-btm').item(0),
		listImg=slideshow.getElementsByClassName('sl-btm-img').item(0),
		listText=slideshow.getElementsByClassName('sl-btm-text').item(0),
		totalImg=slideshow.getElementsByClassName('sl-btm-img').item(0).getElementsByTagName('img')
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
			if(flag)return;	
		})();
		stopAuto=slideshow.onmouseover=function(){
			clearInterval(flag);
			flag=false;	
		}
		document.getElementsByClassName('sl-btm-next').item(0).onclick=nextSlide;
		document.getElementsByClassName('sl-btm-prev').item(0).onclick=prevSlide;
			
}