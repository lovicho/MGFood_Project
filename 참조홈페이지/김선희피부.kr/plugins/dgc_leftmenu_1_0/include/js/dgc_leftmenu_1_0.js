$(document).ready(function() { 
	$("#closeButton, #closeButton2").css("cursor", "hand").click(function(){
		jQuery.FrameDialog.closeDialog();
	});
	
	$('#bannerFileUploadForm').submit(function(){
		if(!$("#file").val() && $("#bannerFileUploadFormAction").val()=="fileUpload"){
		    alert("이미지를 선택해주세요.");
		    return false;
		}
	});
	
	$("#allCheck").click(function(){
		if($(this).attr("checked")){
			$("input[name='checkNo[]']").each(function(){
				$(this).attr("checked", true);
			});
		}else{
			$("input[name='checkNo[]']").each(function(){
				$(this).attr("checked", false);
			});
		}
	});
	
	$("#selCheckDel").click(function(){
		if($("input[name='checkNo[]']:checked").length){
			$.post(nowUrl,$('#bannerFileUploadForm').serialize(),function(response){});
		}else{
			alert("하나 이상 선택하여야 합니다.");
			return false;
		}			
	});
	
	$("#selCheckUpdate").click(function(){
		if($("input[name='checkNo[]']:checked").length>1){
			alert("수정 항목은 한가지만 선택 가능 합니다.");
			$("input[name='checkNo[]']:checked").attr("checked", false);
			return false;
		}else if($("input[name='checkNo[]']:checked").length<=0){
			alert("수정 항목을 선택하여 주세요.");
			return false;			
		}else{
			$("#action").val("fileUpdateForm");
			$('#fileDataListForm').submit();
		}			
	});	
	
	$("#selCheckUseY").click(function(){
		if($("input[name='checkNo[]']:checked").length){
			$("#action").val("checkUseY");
			$.post(nowUrl,$('#bannerFileUploadForm').serialize(),function(response){});
		}else{
			alert("하나 이상 선택하여야 합니다.");
			return false;
		}			
	});	
	
	$("#selCheckUseN").click(function(){
		if($("input[name='checkNo[]']:checked").length){
			$("#action").val("checkUseN");
			$.post(nowUrl,$('#bannerFileUploadForm').serialize(),function(response){});
		}else{
			alert("하나 이상 선택하여야 합니다.");
			return false;
		}			
	});	
	
	$("div:[id*='upButton_']").css("cursor","hand").each(function(){
		$(this).click(function(){
			var temp = $(this).attr("id").split("_");
			$("#actionSeqForm").val("seqUp");
			$("#seqFormNo").val(temp[1]);
			$("#seqForm").submit();
		});
	});
	$("div:[id*='downButton_']").css("cursor","hand").each(function(){
		$(this).click(function(){
			var temp = $(this).attr("id").split("_");
			$("#actionSeqForm").val("seqDown");
			$("#seqFormNo").val(temp[1]);
			$("#seqForm").submit();
		});
	});	
});


//플래쉬 호출용
function flashMenu(url,id,width,height,trans,flashvars){
	var strFlashTag = new String();  
	if (navigator.appName.indexOf("Microsoft") != -1) {
		strFlashTag += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
		strFlashTag += 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=version=9,0,0,0" width="' + width + '" id="' + id + '" height="' + height + '">';
		strFlashTag += '<param name="movie" value="' + url + '"/>';      
		strFlashTag += '<param name="FlashVars" value="' + flashvars + '"/>';
		strFlashTag += '<param name="quality" value="best"/>';
		strFlashTag += '<param name="menu" value="false"/>';
		//strFlashTag += '<param name="salign" value="LT"/>';
		//strFlashTag += '<param name="scale" value="noscale"/>';
		//strFlashTag += '<param name="bgcolor" value="' + bgcolor + '"/>';		
		if(trans==true){
			strFlashTag += '<param name="wmode" value="transparent"/>';
		}else{
			strFlashTag += '<param name="wmode" value="opaque"/>';
		}
		strFlashTag += '<param name="allowScriptAccess" value="always"/>';
		strFlashTag += '</object>';
	}else{
		strFlashTag += '<embed src="' + url + '?' + flashvars + '" ';
		strFlashTag += 'quality="best" ';
		strFlashTag += 'width="' + width + '" ';
		strFlashTag += 'height="' + height + '" ';
		strFlashTag += 'menu="false" ';
		strFlashTag += 'name="'+id+'" ';
		//strFlashTag += 'scale="noscale" ';
		//strFlashTag += 'salign="LT" ';
		//strFlashTag += 'bgcolor="' + bgcolor + '" ';		
		if(trans==true){
			strFlashTag += 'wmode="transparent" ';
		}else{
			strFlashTag += 'wmode="opaque" ';
		}
		strFlashTag += 'allowScriptAccess="always" ';
		strFlashTag += '</embed>';
	}
	document.write(strFlashTag);
}