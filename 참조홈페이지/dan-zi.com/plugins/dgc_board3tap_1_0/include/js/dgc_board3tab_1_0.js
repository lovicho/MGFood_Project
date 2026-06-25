$(document).ready(function() {
	$("#closeButton2").css("cursor", "hand").click(function(){
		jQuery.FrameDialog.closeDialog();
	});
	
	$("#mainGalleryForm").submit(function(){
		if(!$("input:[name*='boardNo']:checked").length){
			alert("게시판을 선택하세요.");
			return false;
		}

		if(!$("#listCountVer, #$listCountHor").val()){
			alert("출력게시물 수를 입력하세요.");
			$(this).focus();
			return false;
		}		
		return false;
	});
	
	$("input:[id*='boardNo_']").click(function(){
		if($(this).attr("checked")){
			$("#boardDispOrder").append("<option value='"+$(this).val()+"' selected>"+$(this).attr("textname")+"</option>");
		}else{
			var removeId = $(this).val();
			$("#boardDispOrder option").each(function(){
				if(removeId==$(this).val())$(this).remove();	
			});
			
		}
	});
	if($("#default_skin_no").length>0){
		$("#default_skin_no").change( function(){
			$("#previewSkin").attr("src",pluginDir+"/views/"+$("#default_skin_no option:selected").text()+"/images/thumb2.jpg");
		});
	}
});
