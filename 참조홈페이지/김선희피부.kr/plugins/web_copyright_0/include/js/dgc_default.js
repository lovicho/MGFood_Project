$(document).ready(function() { 
	$("#closeButton, #closeButton2").css("cursor", "hand").click(function(){
		jQuery.FrameDialog.closeDialog();
	});
	
	$("#dgcSubMenuBase > div").mouseover(function(){
		$(this).children().each(function(){
			if($(this).attr("class")=="gu_tap_left"){
				$(this).attr("class","gu_tap_left_ov");
			}
			else if($(this).attr("class")=="gu_tap_center"){
				$(this).attr("class","gu_tap_center_ov");
			}
			else if($(this).attr("class")=="gu_tap_right"){
				$(this).attr("class","gu_tap_right_ov");
			}			
		});
	}).mouseout(function(){
		$(this).children().each(function(){
			if($(this).attr("class")=="gu_tap_left_ov"){
				$(this).attr("class","gu_tap_left");
			}
			else if($(this).attr("class")=="gu_tap_center_ov"){
				$(this).attr("class","gu_tap_center");
			}
			else if($(this).attr("class")=="gu_tap_right_ov"){
				$(this).attr("class","gu_tap_right");
			}			
		});
	});
	
});