
define(["js/jquery-1.8.3.min"],function(){
	
	//动态创建
	let domAll='<ul id="shoufengqinbox"><li class="shoufengqinlis" style="left:0px;padding-left:0px;"><a href="#"><i class="shoufengqinboxshow"></i><img src="img/accordion01.jpg"/></a></li><li class="shoufengqinlis" style="left:620px"><a href="#"><i></i><img src="img/accordion02.jpg"/></a></li><li class="shoufengqinlis" style="left:710px"><a href="#"><i></i><img src="img/accordion03.jpg"/></a></li><li class="shoufengqinlis" style="left:800px"><a href="#"><i></i><img src="img/accordion04.jpg"/></a></li><li class="shoufengqinlis" style="left:890px"><a href="#"><i></i><img src="img/accordion05.jpg"/></a></li><li class="shoufengqinlis" style="left:980px"><a href="#"><i></i><img src="img/accordion06.jpg"/></a></li></ul>'
	$(".shoufengqin").append(domAll);
	$(".shoufengqinbox").css({
		position:"relative",
		top:150,
		left:100,
		width:1080,
		height: 280,
		display: "flex",
		overflow: "hidden",
		background:"#fff"
	})
	$(".shoufengqinbox li").css({
		listStyle: "none",
		position:"absolute",
		background:"#fff",
		paddingLeft:"10px"
	})
	$(".shoufengqinbox a").css({
		position:"relative",
		display: "block",
	    cursor: "pointer"
	})
	$(".shoufengqinbox i").css({
		position: "absolute",
		width:620,
		height:280,
		transition: "background 0.5s ease-in-out 0s",
	    background: "rgba(0,0,0,.3)"
	})
	$(".shoufengqinboxshow").css({
		background: "rgba(0,0,0,0)",
		transition: "background 0.5s ease-in-out 0s "/*ease-in-out:表示动画执行先慢后快*/
	})
	//左移
	let $lis=$("shoufengqinbox").children();
function moveLeft(ord){
	let $lis=$("shoufengqinbox").children();
	for(let i=0;i<=ord;i++){
		$lis.eq(i).animate({"left":i*90},500);
	}
}
//右移
function moveRight(ord){
	let $lis=$(".shoufengqinbox").children();
	for(let i=ord+1;i<$lis.length;i++){
		$lis.eq(i).animate({"left":(i-1)*90+620},500);
	}
}
function show(){
	for(let i=0;i<$lis.length;i++){
			$lis.eq(i).mouseover(function(){
				//让每个都有遮罩层
				$(".shoufengqinlis i:nth-child(1)").removeClass("shoufengqinboxshow");
				//鼠标滑过谁，给谁添加个清除遮罩层的class
				$(".shoufengqinlis i").eq(i+2).addClass("shoufengqinboxshow");
				
				let position=$(this).position();
				console.log(i)
				if(position.left==i*90){
					moveRight(i); 
				}else{
					moveLeft(i);
				}
			})   
		}
	
	

	}
	return {
		show:show
	};
})