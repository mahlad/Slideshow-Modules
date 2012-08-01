// Right Text Slideshow JavaScript
window.onload=function(){
		
		var currentSlide=0, currentLi=0,
			listImg=document.getElementsByClassName('imgFirst').item(0),
			contentLeft=document.getElementsByClassName('sectionFirst').item(0);
		goSlideFirst=function(n){
			if(n>listFirst.length-1)n=0; 
			listImg.style.top=(-270*n)+'px';
			listFirst.item(currentSlide).className='';
			listFirst.item(n).className='active';
			contentLeft.style.right=(-375*n)+'px';
			currentSlide=n;
		
		}
		nextFirst=function(){
			goSlideFirst(currentSlide+1);
		}
		var listFirst=document.getElementsByClassName('navFirst').item(0).getElementsByTagName('li');
		for(var i=0;i<listFirst.length;i++ ){
			(function(j){
				listFirst.item(j).onclick=function(){
					goSlideFirst(j);
				}
			})(i)	
		}
		setInterval(nextFirst,4000);
	}