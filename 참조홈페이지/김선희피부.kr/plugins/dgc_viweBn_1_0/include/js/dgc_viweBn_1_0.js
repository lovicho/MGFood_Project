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
	$("#infosaveButton").click(function(){$("#navigationBarForm").submit();}).css("cursor", "hand");
});