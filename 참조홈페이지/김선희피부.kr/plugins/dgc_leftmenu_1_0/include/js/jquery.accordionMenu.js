(function(jQuery){
     jQuery.fn.extend({  
         accordion: function(menuId, depth, imgPath) {


			// 실제 location 의 카테고리번호 추출
			var category = 0;
			try{
				var temp = window.location.href.split("?");
				temp = temp[0];
				temp = temp.split("/");
				category = temp[temp.length - 1];
			}catch(e){}
			// 실제 location 의 카테고리번호 추출

        	var $ul = $(this);//메뉴를 감싸고 있는 최상위 태그
        	//3차메뉴 정보를 찾아서 보이지 않게 한다.
 			$.each($ul.find('li>ul'), function(){
 				if(depth==2){

						if($(this).parent("li").attr("id")!=menuId){
							$(this).hide();	
						}else{
							if($(this).children("ul>li").length){
								$(this).parent("li").children("img").attr("src", imgPath+"minus.gif");
							}
						}
 				}else{//3차메뉴를 클릭하고 들어왔을
 					var parentCheck = false;
 					$(this).children("li").each(function(){
 						if($(this).attr("id")==menuId) parentCheck = true;
 					});
	 				if(!parentCheck){
	 					$(this).hide(); 
	 				}else{
	 					$(this).parent("li").children("img").attr("src", imgPath+"minus.gif");
	 				}
 				}
			});
 			//2차메뉴에 이벤트를 할당한다.
			$.each($ul.find('li>img'), function(){
				$(this).click(function(e){
					$(this).parent("li").children("ul").slideToggle('fast');
				});
				
				if($(this).attr("src")==imgPath+"plus.gif"){
					$(this).toggle(
							function(){$(this).attr("src",imgPath+"minus.gif");},
							function(){$(this).attr("src",imgPath+"plus.gif");}
					); 
				}else{
					$(this).toggle(
							function(){$(this).attr("src",imgPath+"plus.gif");},
							function(){$(this).attr("src",imgPath+"minus.gif");}
					);					
				}
			});        	


////
			// 카테고리번호가 있을면 --> 쇼핑몰
			if(category && depth == 2){
 				$.each($ul.find('li>ul > li'), function(){

					// 서브 메뉴 링크의 맨 마지막 카테고리번호 추출
					var temp = $(this).children("a").first().attr("href");
					temp = temp.split("/");
					temp = temp[temp.length - 1];
					temp = temp.split("_");
					
					var menu_category = temp[temp.length - 1];

					if(menu_category == category){
						$(this).parent().show();	
					}
				});
			} 
///

        } 
    }); 
})(jQuery);