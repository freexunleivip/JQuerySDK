jQuery(document).ready(function($){

/*  Get Thunder VIP Member Account
/* ------------------------------------ */
	function GetRandomNum(Min, Max){
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	}
	$("#getxlan").click(function(){
	if($("div").data("sepxlan")==undefined){
		$.getJSON("https://api.9sep.org/xunlei/getan.php", function(response){
			if(response.xlstats == 200) {
				var rxlnum = GetRandomNum(0, response.xlconts - 1);
				$("#showxlan").html(eval('response.sepxl' + rxlnum));
				$("div").data("sepxlan", eval('response.sepxl' + rxlnum));
			}else{
				$("#showxlan").html('Err:并发请求!三分钟后重新刷新获取账号~');
			}});
	}else{
		$("#showxlan").html($("div").data("sepxlan"));
	}
	});
});
