$(function(){
	    $('.pointer').bind('click',function(){
		  var start=null;
		  var stop=Math.floor(Math.random()*3600);
		  var i=0;
		  var v=10;
		  var a=1;
		  var isfan=false;
		  
		  start=setInterval(function(){
		       v=v+a*1;
			   i=i+v*1;
			   $('#turn').css('transform','rotate('+i+'deg)');
			   if(i>1/2*stop && isfan==false){
			      a=-a;
				  isfan=true;
				  }
			   if(i>=stop || v<10){
			      clearInterval(start);
				  if(i%360>=0 && i%360<30){
				      alert('恭喜您:中奖12个月的绿钻')
					  }else if(i%360>=30 && i%360<60){
					   alert('恭喜您:中奖11个月的绿钻')
					   }else if(i%360>=60 && i%360<90){
					    alert('恭喜您:中奖10个月的绿钻')
						}else if(i%360>=90 && i%360<120){
						 alert('恭喜您:中奖9个月的绿钻')
						 }else if(i%360>=120 && i%360<150){
								alert('恭喜您:中奖8个月的绿钻');
							}else if(i%360>=150 && i%360<180){
								alert('恭喜您:中奖7个月的绿钻');
							}else if(i%360>=180 && i%360<210){
								alert('恭喜您:中奖6个月的绿钻');
							}else if(i%360>=210 && i%360<240){
								alert('恭喜您:中奖5个月的绿钻');
							}else if(i%360>=240 && i%360<270){
								alert('恭喜您:中奖4个月的绿钻');
							}else if(i%360>=270 && i%360<300){
								alert('恭喜您:中奖3个月的绿钻');
							}else if(i%360>=300 && i%360<330){
								alert('恭喜您:中奖2个月的绿钻');
							}else{
								alert('恭喜您:中奖1个月的绿钻');
							}
					   }
					
					},100);
		 })
	  })