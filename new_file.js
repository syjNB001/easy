(function (){
	var oleft = document.querySelector('.left');
	var ol1 = document.querySelector('.l1');
	var ol2 = document.querySelector('.l2');
	var ocon = document.querySelector('.con');
	var oright = document.querySelector('.right');
	index = 0;//图片第几张的索引
	oclock = false;
	function fanye (){
		if(oclock) return ;
		oclock = true ;
		index++;
		index%=7;
		oleft.classList.add('on');//添加类名
		document.addEventListener('transitionend',function(){
			oleft.classList.remove('on');
			ol1.style.backgroundImage = ocon.style.backgroundImage = 'url("jpg/vee'+index+'.png")';
			ol2.style.backgroundImage = oright.style.backgroundImage = 'url("jpg/vee'+(index+1)%7+'.png")';
			oclock = false;
				});//事件监听，翻页结束执行
		}
		// document.onclick = function (){
		// 	fanye();
		// }
		setInterval(fanye,1500);
})();
