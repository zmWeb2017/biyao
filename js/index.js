
require(["js/shoufengqin"],function(s){
	s.show();
})


//顶部悬浮
window.onscroll=function(){
	let scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
	if(scrollTop>=500){
		$(".dingbuxuanfu-box").css("display","block");
	}else{
		$(".dingbuxuanfu-box").css("display","none");
	}
	$(".cebianlan-huidaodingbu").click(function(){
			scrollTop=0;
	});
	//回到顶部
	if(scrollTop>=200){
		$(".cebianlan-huidaodingbu").css({
			display:"block",
			src:"img/cebianlan-hover-erweima.png"
		});
	}else{
		$(".cebianlan-huidaodingbu").css("display","none");
	}
}