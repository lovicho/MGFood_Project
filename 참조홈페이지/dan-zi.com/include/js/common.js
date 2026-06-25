// 홈피매니저 공용 javascript
function setPng24(obj) {
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter ="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src='';
	return '';
}

function MM_preloadImages() { //v3.0
	  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
	}

function MM_swapImgRestore() { //v3.0
	  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
	  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
	  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function openWindowFrameless(url,winname,x,y){
	win = window.open( "" ,winname, "fullscreen=1,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width="+x+",height="+y+";");
	if (win !== null) {
		var cx = Math.ceil( (window.screen.width - x) / 2 );
		var cy = Math.ceil( (window.screen.height - y) / 2 );
		win.resizeTo( Math.ceil( x ) , Math.ceil(y) );
		win.moveTo ( Math.ceil( cx ) , Math.ceil( cy ) );
		win.document.location.replace(url);
		return win;
	} else {
		alert("팝업을 해제 해주세요.");
		return null;
	}
}

function openPopup(url,winname,x,y,cx,cy){ //주소,창이름,창크기x,창크기y,창위치x,창위치y
	win = window.open( "" ,winname, "fullscreen=0,toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,width=" + x + ",height=" + y + ",left=" + cx + ",top=" + cy);
	if (win !== null) {
		win.resizeTo( Math.ceil( x ) , Math.ceil(y) );
		win.moveTo ( Math.ceil( cx ) , Math.ceil( cy ) );
		win.document.location.replace(url);
		return win;
	} else {
		alert("팝업을 해제 해주세요.");
		return null;
	}
}

//플래시 활성화: flashWrite(파일경로, 가로, 세로, 아이디, 배경색, 윈도우모드)
function flashWrite(url,w,h,id,bg,win,text){

        // 플래시 코드 정의
        var flashStr=
        "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='"+w+"' height='"+h+"' id='"+id+"' align='middle'>"+
        "<!-- "+text+" -->"+
        "<param name='movie' value='"+url+"' />"+
        "<param name='wmode' value='"+win+"' />"+
		"<param name='menu' value='false' />"+
        "<param name='quality' value='high' />"+
        "<param name='bgcolor' value='"+bg+"' />"+
        "<embed src='"+url+"' wmode='"+win+"' menu='false' quality='high' bgcolor='"+bg+"' width='"+w+"' height='"+h+"' name='"+id+"' align='middle' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />"+
        "</object>";

        // 플래시 코드 출력
        document.write(flashStr);
}

// script 에서 js 파일 로드
function importScript(FILES) {
    var _importScript = function(filename) { 
    	if (filename) {
    		document.write('<script type="text/javascript" src="/include/js/'+filename+'.js"></s'+'cript>');
        }
    };
    
    for (var i=0; i<FILES.length; i++) {
    	_importScript(FILES[i]);
    }
}

// IE6에서 png파일 투명이미지 처리
function setPng24(obj){
	if($.browser.msie == true && msieversion() <7 ){	
		obj.width = obj.height = 1;
		obj.className = obj.className.replace(/\bpng24\b/i,'');
		obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + obj.src + "', sizingMethod = 'image');";
		obj.src = '';
	}
	return '';
}

//한글 및 숫자(128이상) 입력가능 체크
function hangul_check(val){
	for (i=0; i< val.length; i++){
	var CodeNum = val.charCodeAt(i);
		if ((CodeNum < 48 || CodeNum > 57) && (CodeNum < 128)) {
			return true;
		}
	}
}

//숫자(48~57),영문만(65~90,97~122),특수문자 언더바만 입력가능 체크
function eng_check(val){
	for (i=0; i< val.length; i++){
	var CodeNum = val.charCodeAt(i);
		if((CodeNum < 48 || CodeNum > 57) && (CodeNum < 65 || CodeNum > 90) && (CodeNum < 97 || CodeNum > 122) && (CodeNum != 95)){ 
			return true;
		}
	}
}

//숫자만 체크
function num_check(val)
{
	var exp = /^[0-9]+$/;
	
	if(exp.test(val))
		return false;
	else
		return true;
}

/**
 * 화폐 3자리로 자르기
 */
function number_format(val){
	val = val.toString();
	return val.replace(/(\d)(?=(?:\d{3})+(?!\d))/g,'$1,');
}

/**
 * 문자열 자르기
 * @param str
 * @param len
 * @param tail
 * @returns
 */
function cutString(str, len, tail)
{
    var l = 0;
    for (var i=0; i<str.length; i++)
    {
        l += (str.charCodeAt(i) > 128) ? 2 : 1;
        if (l > len) return str.substring(0,i) + tail;
    }
    return str;
}

//라디오 버튼 선택된게 있는지 체크
function radio_check(obj){
	var radioCount = 0;
	for(i = 0, i_len = obj.length; i < i_len; i++){
		if(obj[i].checked){
			radioCount++;
		}
	}
	if(radioCount <= 0){
		return true;
	}else{
		return false;
	}
}

// modal으로 progressbar를 보여주며 ajaxSubmit()을 사용하는 함수
function modalAjaxSubmit(form, progressbarTitle, formOptions){			
	// 모달창 사용시 스크롤바 생기는 부분 감춤
	$(".ui-widget-overlay").css({ "overflow-x":"hidden", "overflow-y":"hidden"});

	form.prepend("<div id=\"progressbarTitle\"><div id=\"progressbar\"></div></div>");
	
	// 프로그래스바 보이기
	$("#progressbarTitle").attr('title',progressbarTitle);
	$("#progressbarTitle").dialog({ "modal": true , "height": "76", "resizable":false });
	$("#progressbar").progressbar({ value: 100 });

	form.ajaxSubmit(formOptions);
}

// modal창 표시
function modalProgressbarOpen(title) {
	// 모달창 사용시 스크롤바 생기는 부분 감춤
	$(".ui-widget-overlay").css({ "overflow-x":"hidden", "overflow-y":"hidden"});

	$("body").append("<div id=\"progressbarTitle\"><div id=\"progressbar\"></div></div>");
	
	// 프로그래스바 보이기
	$("#progressbarTitle").attr('title',title);
	$("#progressbarTitle").dialog({ "modal": true , "height": "76", "resizable":false });
	$("#progressbar").progressbar({ value: 100 });
}

function modalProgressbarClose() {
	// dialog 닫기
	$("#progressbarTitle").dialog("close");

	// modal사용을 위해 추가한 div 삭제
	$("#progressbarTitle").remove();
}

//---------------------------------- ie bug patch
if (/MSIE/.test(navigator.userAgent) && window.attachEvent) {
	window.attachEvent("onload", function () {
		document.execCommand("BackgroundImageCache", false, true);
		//--------------------------------------------------patch form's button's value bug when submit to server in IE
		var f = document.forms;
		var f_button_patch = function (frm, btn) {
			if (frm.getAttribute("validation") === null || frm.getAttribute("validation") == "complete") {
				var submitbyenter = false;
				var btns = frm.getElementsByTagName("BUTTON");
				for (var i = 0, i_len = btns.length; i < i_len; i++) {
					var btns_each = btns[i];
					if (btn === null) { // onsubmit by enter key
						if (submitbyenter === true) {
							btns_each.disabled = true;
						}
						if (frm.getAttribute("patched") != "patched") {
							if (btns_each.disabled === false && btns_each.type == "submit") {
								var browser_version = navigator.userAgent.match(/MSIE \d+\./);
								browser_version = (browser_version === null) ? 0 : Number(browser_version[0].replace(/[^\d]/g, ""));
								if (browser_version <= 6) {
									if (btns_each.attributes.getNamedItem("value") !== null) {
										btns_each.value = btns_each.attributes.getNamedItem("value").nodeValue;
									}
								} else {
									if (btns_each.name != "" || btns_each.name !== undefined) {
										var input = document.createElement("INPUT");
										input.type = "hidden";
										input.name = btns_each.name;
										if (btns_each.attributes.getNamedItem("value") !== null) {
											input.value = btns_each.attributes.getNamedItem("value").nodeValue;
										}
										frm.appendChild(input);
									}
								}
								frm.setAttribute("patched", "patched");
								submitbyenter = true;
							}
						}
					} else { // onclick
						if (btns_each === btn) {
							if (btns_each.attributes.getNamedItem("value") !== null) {
								btns_each.value = btns_each.attributes.getNamedItem("value").nodeValue;
							}
						} else {
							btns_each.disabled = true;
						}
					}
				}
			}
		}
		for (var i = 0, i_len = f.length; i < i_len; i++) {
			(function () {
				var f_each = f[i];
				var btn = f_each.getElementsByTagName("BUTTON");
				for (var j = 0, j_len = btn.length; j < j_len; j++) {
					var btn_each = btn[j];
					btn_each.attachEvent("onclick", function (event) {
						if (f_each.getAttribute("patched") === null) {
							f_each.setAttribute("patched", "patched");
						}
						f_button_patch(f_each, event.srcElement);
					});
				}
				f_each.attachEvent("onsubmit", function () { f_button_patch(f_each, null); });
			})();
		}
		//--------------------------------------------------patch form's button's value bug when submit to server in IE
	});
}
//---------------------------------- ie bug patch


var regexps = {
	'date': "",
	'datetime': "",
	'datetime-local': "",
	'email': "",
	'month': "",
	'number': /^-?\d+$/,
	'range': "",
	'tel': "",
	'time': "",
	'url': "",
	'week': "",
	isNumber: function (arg) { return this.number.test(arg); },
	setNumber: function (arg) { return arg.replace(/[^\d]/g, ""); },
	setNumberFormat: function (arg) { return String(arg).split("").reverse().join("").replace(/(\d{3})/g, "$1,").replace(/,$/, "").split("").reverse().join(""); },
	removeString: function (arg) { return arg.replace(/[^\d]/g, ""); }
};


//jQuery dependency by bermann
if (typeof jQuery == "function" && typeof $ == "function" && jQuery === $) {
$(document).ready(function () {

	//---------------------------------- a link to JavaScript window.open each has 'js_wo' className
	$("a.js_wo").each(function (i, e) {
		$(this).bind("click", function (event) {
			var uri = this.href;
			var popup_w = /popup_w=([1-9][0-9]*)/.exec(uri);
			var popup_h = /popup_h=([1-9][0-9]*)/.exec(uri);
			var popup_l = 0;
			var popup_t = 0;
			popup_w = (popup_w !== null && popup_w.length == 2 && popup_w[1]) ? Number(popup_w[1]) : 760;
			popup_h = (popup_h !== null && popup_h.length == 2 && popup_h[1]) ? Number(popup_h[1]) : 500;
			popup_l = screen.availWidth / 2 - popup_w / 2;
			popup_t = screen.availHeight / 2 - popup_h / 2;
			if (popup_l < 0) { popup_l = 0; }
			if (popup_t < 0) { popup_t = 0; }
			var wo = window.open(uri, "wo", "menubar=no,toolbar=no,directories=no,location=no,status=no,scrollbars=yes,resizable=yes,left=" + popup_l + ",top=" + popup_t + ",width=" + popup_w + ",height=" + popup_h);
			event.preventDefault();
		});
	});
	//---------------------------------- a link to JavaScript window.open each has 'js_wo' className

	//---------------------------------- checkbox check uncheck (return true or false form's onsubmit event handler)
	//ex)
	//<form>
	//<input type="checkbox" id="js_checkuncheck_NAME[]" class="js_checkuncheck" /> : check, uncheck controller
	//<input type="checkbox" name="NAME[]" /> : applied form's input elements by check, uncheck controller
	//<input type="checkbox" name="NAME[]" /> ...
	//</form>
	$("form .js_checkuncheck").each(function (i) {
		var nodeid = $(this).attr("id").replace(/js_checkuncheck_/, "");
		if (!nodeid === false) {
			var nodeform = this;
			while (!$(nodeform).is("form")) { nodeform = $(nodeform).parent(); }
			$(this).bind("click", function () {
				//not checkbox controller (button, label ...) patch
				if ($(this).attr("checked") === undefined || ($(this).attr("checked") !== true && $(this).attr("checked") !== false)) {
					$(this).attr("checked", (($(this).attr("checked") === undefined || $(this).attr("checked") == "") ? "checked" : ""));
				}
				//not checkbox controller (button, label ...) patch
				var nodechecked = ($(this).attr("checked") === true || $(this).attr("checked") == "checked") ? true : false;
				$(nodeform).find('[name="' + nodeid + '"]').each(function () {
					$(this).attr("checked", nodechecked);
				});
			});
			$(nodeform).bind("submit", function () {
				var checkedlen = 0;
				$(nodeform).find('[name="' + nodeid + '"]').each(function () {
					if ($(this).attr("checked") === true) { checkedlen++; }
				});
				if (checkedlen == 0) {
					alert("체크된 항목이 없습니다.");//alert("didn't check anything!");
					return false;
				} else {
					return true;
				}
			});
		}
	});
	//---------------------------------- checkbox check uncheck (return true or false form's onsubmit event handler)

	//---------------------------------- form's required fields check. compatibility html5 & underline effect on empty value element
	$('form button[type="submit"]').each(function () {
		if ($(this).attr("formnovalidate") == "formnovalidate") {
			$(this).bind("click", function () {
				//$(this.form).find('*[required="required"]').removeAttr("required"); // didn't check in Chrome, Safari, Opera
				var required_fields_load = this.form.elements;
				for (var i = 0, i_len = required_fields_load.length; i < i_len; i++) {
					var required_field_load = required_fields_load[i];
					if (required_field_load.getAttribute("required") == "required") {
						required_field_load.removeAttribute("required");
						required_field_load.setAttribute("formnovalidate", "formnovalidate");
					}
				}
				if ($.browser.msie && Number($.browser.version) <= 7) {
					var btn_clicked = this;
					$(this.form).find('button[type="submit"]').each(function () {
						if (btn_clicked === this) {
							this.value = this.attributes.getNamedItem("value").nodeValue;
						} else {
							this.disabled = true;
						}
					});
				}
				$(this.form).attr("validation", "complete");
			});
		} else {
			$(this).attr("formnovalidate", "formnovalidate"); // for Chrome (apply JavaScript effect. instead of html5 default action)
		}
	});
	$('form *[required="required"]').each(function () {
		$(this).attr("backgroundImage", $(this).css("background-image"));
		$(this).attr("backgroundPosition", $(this).css("background-position")); // $(this).css("background-position") is undefined in IE8
		$(this).attr("backgroundRepeat", $(this).css("background-repeat"));
		if ($(this.form).attr("validation") === undefined) {
			$(this.form).attr("validation", "ready");
			// ------- for ie button value bug
			if ($.browser.msie) {
				var required_fields_ie = $(this.form).find('*[required="required"]');
				required_fields_ie.each(function () {
					$(this).bind("blur keyup", function () {
						var required_fields_ie_pre = $(this.form).find('*[required="required"]'); // re-declaration because may be dynamically DOM update
						var required_fields_ie_pre_size = required_fields_ie_pre.size();
						required_fields_ie_pre.each(function () {
							if (!this.value) { required_fields_ie_pre_size--; }
						});
						if (required_fields_ie_pre_size === required_fields_ie_pre.size()) {
							$(this.form).attr("validation", "complete");
						} else {
							$(this.form).attr("validation", "ready");
						}
					});
				});
				//IE bug. form has only one required field. (and text field doesn't exists anymore ?)
				if (required_fields_ie.size() === 1) {// && $(this.form).find(":text").size() === 1) {
					var input_dummy = document.createElement("INPUT");
					input_dummy.type = "text";
					input_dummy.style.display = "none";
					this.form.appendChild(input_dummy);
					input_dummy = null;
				}
				//IE bug. form has only one required field. (and text field doesn't exists anymore ?)
			}
			// ------- for ie button value bug
			$(this.form).bind("submit", function () {
				var is_validate = 0;
				// var required_fields = $(this).find('*[required="required"]'); // didn't check in Chrome, Safari, Opera
				var required_fields = $([]);
				var required_fields_load = this.elements;
				for (var i = 0, i_len = required_fields_load.length; i < i_len; i++) {
					var required_field_load = required_fields_load[i];
					if (required_field_load.nodeName != "FIELDSET" && required_field_load.getAttribute("required") == "required") {
						required_fields.push(required_field_load);
					}
				}
				required_fields.each(function () {
					if (!this.value) {
						$(this).css({
							"background-image": "url(/images/underline-required.gif)",
							"background-position": "left bottom",
							"background-repeat": "repeat-x"
						});
					} else {
						$(this).css({
							"background-image": $(this).attr("backgroundImage"),
							"background-position": $(this).attr("backgroundPosition"),
							"background-repeat": $(this).attr("backgroundRepeat")
						});
						is_validate++;
					}
				});
				if (is_validate === required_fields.size()) {
					$(this).attr("validation", "complete");
				} else {
					$(this).attr("validation", "ready");
				}
				if ($(this).attr("validation") != "complete") {
					return false;
				}
			});
		}
	});
	//---------------------------------- form's required fields check. compatibility html5 & underline effect on empty value element

	//---------------------------------- apply background-color by created background-color from daumeditor
	//$("body div.webmaker-swapbody").css("height", $(this).height());
	$("body > div.webmaker-swapbody").parent().css("background-color", function () {
		var bg = $(this).children().attr("style").match(/background-color:\s?([^;]+)/i);//ignore case option is for IE
		if (bg.length == 2 && bg[1] !== undefined) { return bg[1]; }
	});
	//---------------------------------- apply background-color by created background-color from daumeditor

	//---------------------------------- check not supported html5
	var html5 = {
		support: true,
		autofocusEL: null
	};
	if (//아직 html5 를 판별하기에 부적합. : 아래 조건중 다 만족하지 않으면서도 웹폼2를 지원하는 html5 브라우저->Opera, Safari. 아래 조건항목은 html5 pdf 문서정의사항
		window.openDatabase === undefined || 
		window.applicationCache === undefined || 
		window.localStorage === undefined || 
		window.webkitNotifications === undefined
	) {
		html5.support = false;
	}
	//---------------------------------- check not supported html5

	//---------------------------------- html5 compatibility autofocus
	if (html5.support === false) {
		$("input[type!=hidden]").each(function () {
			var attr_autofocus = $(this).attr("autofocus");
			if (attr_autofocus !== undefined && attr_autofocus !== false) { html5.autofocusEL = this; }
		});
		if (html5.autofocusEL !== null) { html5.autofocusEL.focus(); }
	}
	//---------------------------------- html5 compatibility autofocus

	//---------------------------------- input type value check ([focus, blur] - html5 also can't check hangeul)
	$("[type=number]").each(function () {
		$(this).bind("focus blur", function () {
			if (!regexps.isNumber(this.value)) { this.value = regexps.setNumber(this.value); }
		});
		if (html5.support === false) {
			$(this).bind("keyup mouseover", function () {//mouseover is drag the selected text to input type number.
				var min = this.getAttribute("min");
				var max = this.getAttribute("max");
				if (!regexps.isNumber(this.value)) { this.value = regexps.setNumber(this.value); }
				if (max !== null) {
					max = Number(max);
					if (this.value > max) { this.value = max; }
				}
				if (min !== null) {
					min = Number(min);
					if (this.value < min) { this.value = min; }
				}
			});
			$(this).bind("mousewheel", function (event) {
				var min = this.getAttribute("min");
				var max = this.getAttribute("max");
				var delta = 0;
				if (event.wheelDelta) {
					delta = event.wheelDelta / 120;
				} else if (event.detail) {
					delta = (0 - event.detail) / 3;
				}
				if (delta > 0) {//up
					this.value = Number(this.value) + 1;
					if (max !== null) {
						max = Number(max);
						if (this.value > max) { this.value = max; }
					}
				} else {//down
					this.value = Number(this.value) - 1;
					if (min !== null) {
						min = Number(min);
						if (this.value < min) { this.value = min; }
					}
				}
				event.preventDefault();
			});
		}
	});
	//---------------------------------- input type value check ([focus, blur] - html5 also can't check hangeul)

	//---------------------------------- dynamic height for container's separator(admin management)
	$(".managementLeft").css("height", $(".managementLeft").parent().height());
	$(".extendLeftMenu").css("height", $(".extendLeftMenu").parent().height());
	//---------------------------------- dynamic height for container's separator(admin management)

});
}
//jQuery dependency by bermann

// 2013-04-18 그래프 랜더러 클래스 추가
var chartBar = function(_config){
	
	// 타이머
	this.timer = false;

	// 오늘 갯수
	this.todaySize = 0;

	// 전체 갯수
	this.totalSize = 0;

	// 데이터 갯수
	this.dataSize = 0;

	// 데이터 최대값
	this.max_value = 0;

	// 데이터
	this._data = {};

	// 기본설정
	this.config = {
		url : "/admin/management/visitChartData",	// 서버 주소
		root_id : "#chart",		// 최상위 요소
		data_row_id : ".data-row",	// 데이터 요소
		graph_row_id : ".graph-row",	// 그래프 요소
		colum_id : "li",		// 각 element
		text_row_id : ".text-row",	// 하단 텍스트 요소
		today_id : ".TodayCount",	// 오늘 카운트 요소
		total_id : ".TotalCount",	// 전체 카운트 요소
		thema : "blue",				// 테마
		anim_delay : 3000,			// 애니메이션 딜레이
		anim : true					// 애니메이션 실행여부
	};

	// config 셋팅
	$.extend(this.config, _config) || {};

	// 테마
	this.thema = {
		black : {
			// 폰트 색상
			color : "#7d7e7d",
			// 바 색상
			bar : "background: #7d7e7d;background: -moz-linear-gradient(top,  #7d7e7d 0%, #0e0e0e 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#7d7e7d), color-stop(100%,#0e0e0e));background: -webkit-linear-gradient(top,  #7d7e7d 0%,#0e0e0e 100%);background: -o-linear-gradient(top,  #7d7e7d 0%,#0e0e0e 100%);background: -ms-linear-gradient(top,  #7d7e7d 0%,#0e0e0e 100%);background: linear-gradient(to bottom,  #7d7e7d 0%,#0e0e0e 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=0 );"
		},
		white : {
			color : "#ffffff",
			bar : "background: #ffffff;background: -moz-linear-gradient(top,  #ffffff 0%, #f1f1f1 50%, #e1e1e1 51%, #f6f6f6 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(50%,#f1f1f1), color-stop(51%,#e1e1e1), -stop(100%,#f6f6f6));background: -webkit-linear-gradient(top,  #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%);background: -o-linear-gradient(top,  #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%);background: -ms-linear-gradient(top,  #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%);background: linear-gradient(to bottom,  #ffffff 0%,#f1f1f1 50%,#e1e1e1 51%,#f6f6f6 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0 );"
		},
		blue : {
			color : "#3b679e",
			bar : "background : #3b679e;background : -moz-linear-gradient(top,  #3b679e 0%, #2b88d9 50%, #207cca 51%, #7db9e8 100%);background : -webkit-gradient(linear, left top, left bottom, color-stop(0%,#3b679e), color-stop(50%,#2b88d9), color-stop(51%,#207cca), color-stop(100%,#7db9e8));background : -webkit-linear-gradient(top,  #3b679e 0%,#2b88d9 50%,#207cca 51%,#7db9e8 100%);background : -o-linear-gradient(top,  #3b679e 0%,#2b88d9 50%,#207cca 51%,#7db9e8 100%);background : -ms-linear-gradient(top,  #3b679e 0%,#2b88d9 50%,#207cca 51%,#7db9e8 100%);background : linear-gradient(to bottom,  #3b679e 0%,#2b88d9 50%,#207cca 51%,#7db9e8 100%);filter : progid:DXImageTransform.Microsoft.gradient( startColorstr='#3b679e', endColorstr='#7db9e8',GradientType=0 );"
		},
		green : {
			color : "#b4e391",
			bar : "background: #b4e391;background: -moz-linear-gradient(top,  #b4e391 0%, #61c419 50%, #b4e391 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#b4e391), color-stop(50%,#61c419), color-stop(100%,#b4e391));background: -webkit-linear-gradient(top,  #b4e391 0%,#61c419 50%,#b4e391 100%);background: -o-linear-gradient(top,  #b4e391 0%,#61c419 50%,#b4e391 100%);background: -ms-linear-gradient(top,  #b4e391 0%,#61c419 50%,#b4e391 100%);background: linear-gradient(to bottom,  #b4e391 0%,#61c419 50%,#b4e391 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4e391', endColorstr='#b4e391',GradientType=0 );"
		},
		yellow : {
			color : "#ffff88",
			bar : "background: #ffff88;background: -moz-linear-gradient(top,  #ffff88 0%, #ffff88 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffff88), color-stop(100%,#ffff88));background: -webkit-linear-gradient(top,  #ffff88 0%,#ffff88 100%);background: -o-linear-gradient(top,  #ffff88 0%,#ffff88 100%);background: -ms-linear-gradient(top,  #ffff88 0%,#ffff88 100%);background: linear-gradient(to bottom,  #ffff88 0%,#ffff88 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffff88',GradientType=0 );"
		},
		red : {
			color : "#ff3019",
			bar : "background: #ff3019;background: -moz-linear-gradient(top,  #ff3019 0%, #cf0404 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ff3019), color-stop(100%,#cf0404));background: -webkit-linear-gradient(top,  #ff3019 0%,#cf0404 100%);background: -o-linear-gradient(top,  #ff3019 0%,#cf0404 100%);background: -ms-linear-gradient(top,  #ff3019 0%,#cf0404 100%);background: linear-gradient(to bottom,  #ff3019 0%,#cf0404 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff3019', endColorstr='#cf0404',GradientType=0 );"
		},
		orange : {
			color : "#f2825b",
			bar : "background: #f2825b;background: -moz-linear-gradient(top, #f2825b 0%, #e55b2b 50%, #f07146 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f2825b), color-stop(50%,#e55b2b), color-stop(100%,#f07146));background: -webkit-linear-gradient(top, #f2825b 0%,#e55b2b 50%,#f07146 100%);background: -o-linear-gradient(top, #f2825b 0%,#e55b2b 50%,#f07146 100%);background: -ms-linear-gradient(top, #f2825b 0%,#e55b2b 50%,#f07146 100%);background: linear-gradient(to bottom, #f2825b 0%,#e55b2b 50%,#f07146 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2825b', endColorstr='#f07146',GradientType=0 );"
		},
		pink : {
			color : "#ff5db1",
			bar : "background: #ff5db1;background: -moz-linear-gradient(top,  #ff5db1 0%, #ef017c 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ff5db1), color-stop(100%,#ef017c));background: -webkit-linear-gradient(top,  #ff5db1 0%,#ef017c 100%);background: -o-linear-gradient(top,  #ff5db1 0%,#ef017c 100%);background: -ms-linear-gradient(top,  #ff5db1 0%,#ef017c 100%);background: linear-gradient(to bottom,  #ff5db1 0%,#ef017c 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff5db1', endColorstr='#ef017c',GradientType=0 );"
		}
	};

	// 전체 갯수 셋팅
	this.setTotalSize = function(size){
		this.totalSize = size;
	};

	// 데이터 셋팅
	this.setData = function(data){

		// 초기화
		this._data = data;
		this.dataSize = this._data.length;
		this.max_value = 0;
		this.todaySize = 0;

		// 최대값 구하기
		for(var i = 0; i < this.dataSize; i++){
			var d = this._data[i][1];
			this.todaySize += parseInt(d);
			if(this.max_value < d){
				this.max_value = parseInt(d);
			}
		}
		if(this.max_value > 100) this.max_value += 100;
		else if(this.max_value > 40) this.max_value += 40
		else if(this.max_value > 20) this.max_value += 20
		else if(this.max_value > 5) this.max_value += 5;
		else this.max_value += 3;
	};

	// 그래프 랜더링
	this.rederer = function(){

		// 자신 복제
		var self = this;

		// thema css 추가
		var style = "<style>";
		style += this.config.root_id + " " + this.config.graph_row_id + " " + this.config.colum_id  + " { " + this.thema[this.config.thema].bar + " } ";
		style += "</style>";
		$(document.body).append(style);

		var left_position = 0;

		// 그래프, 하단텍스트, 상단 데이터 ul 객체 설정
		var data_row_obj = $(this.config.root_id + " " + this.config.data_row_id).first();
		var graph_row_obj = $(this.config.root_id + " " + this.config.graph_row_id).first();
		var text_row_obj = $(this.config.root_id + " " + this.config.text_row_id).first();

		// clear children Elements
		data_row_obj.html("");
		graph_row_obj.html("");
		text_row_obj.html("");

		// 바 ul 높이 설정
		var bar_ul_height = "130px";
		// ie 라면
		if(window.navigator.appVersion.toLowerCase().indexOf("msie") > -1) bar_ul_height = "120px";
		graph_row_obj.css("height", bar_ul_height);

		// 바 넓이 설정
		var root_width = $(this.config.root_id).width();
		var bar_width = parseInt(root_width / this.dataSize) / 1.1;
		var bar_padding = bar_width + this.dataSize / 10;
		bar_width -= (bar_padding - bar_width);

		for(var i = 0; i < this.dataSize; i++){
			
			// 좌측 위치 설정
			var left_position = parseInt(i * bar_padding) + "px"

			// 퍼센트 설정
			var per = Math.round(this._data[i][1] * 100 / this.max_value);

			// 애니메이션 설정
			var height = parseInt(per) + "%";

			// 바 그래프 출력
			var bar_li = $("<" + this.config.colum_id + " />").css({
				"left" : left_position,
				"height" : height,
				"bottom" : "35px",
				"float" : "left",
				"position" : "absolute",
				"width" : bar_width + "px",
				"cursor" : "pointer",
				"font-size" : "11px"
			});
			//  바 그래프 마우스 액션 이벤트 추가
			bar_li.hover(function(){
				$(this).css("border", "solid 1px " + self.thema[self.config.thema].color);
			}, function(){
				$(this).css("border", "none");
			});
			bar_li.attr("max_height", height);
			graph_row_obj.append(bar_li);
			
			// 바 상단 데이터 그래프 바로 위 좌표 계산
			var bar_height = bar_li.height();
			if(this.config.anim) bar_li.css("height", "0%");

			// 바 상단 데이터 출력
			var data_li = $("<" + this.config.colum_id + " />").css({
				"left" : left_position,
				"text-align" : "center",
				"bottom" : bar_height + 35,
				"float" : "left",
				"color" : this.thema[this.config.thema].color,
				"font-weight" : "bold",
				"position" : "absolute",
				"width" : bar_width + "px",
				"font-size" : "11px"
			}).text(this._data[i][1]);
			if(this.config.anim) data_li.hide();
			data_row_obj.append(data_li);

			// 하단 기준 텍스트 출력
			var text_li = $("<" + this.config.colum_id + " />").css({
				"left" : left_position,
				"text-align" : "center",
				"bottom" : "5px",
				"float" : "left",
				"color" : this.thema[this.config.thema].color,
				"position" : "absolute",
				"width" : bar_width + "px",
				"font-size" : "11px"
			}).text(this._data[i][0]);
			text_row_obj.append(text_li);	
		}

		// 애니메이션 시작
		if(this.config.anim){
			var bar_count = graph_row_obj.find(this.config.colum_id).size();
			for(var i = 0; i < bar_count; i++){
				
				var _bar = graph_row_obj.find(this.config.colum_id).eq(i);
				var _data = data_row_obj.find(this.config.colum_id).eq(i);

				// 크롬
				if(window.navigator.appVersion.toLowerCase().indexOf("chrome") > -1){
					self.timer = setTimeout(self.barAnimStart(_bar, _data, self), 100);
				}else{
					_bar.stop().animate({
						"height" : _bar.attr("max_height")
					}, self.anim_delay);
					_data.show("slow");
				}
			};
		}
		// 오늘 / 전체 갯수 렌더링
		$(this.config.root_id + " " + this.config.today_id).text(this.todaySize);
		$(this.config.root_id + " " + this.config.total_id).text(this.totalSize);
	};
	
	// 애니메이션 실제 처리
	this.barAnimStart = function(bar, data, owner){
		bar.stop().animate({
			"height" : bar.attr("max_height")
		}, owner.anim_delay, function(){
			data.show("slow");
			clearTimeout(owner.timer);
		});
	};

	// 데이터 통신 후 출력
	this.display = function(y, m, d, t){
	
		var _this = this;
		$.ajax({
			type : "post",
			datatype : "json",
			data : {
				"year" : y,
				"month" : m,
				"day" : d,
				"visitMode" : t
			},
			url : _this.config.url,
			success : function(data){

				var _Data = new Array();

				for(var p in data.items){
					var Temp = new Array();
					Temp[0] = data.items[p][0];
					Temp[1] = data.items[p][1];
					_Data.push(Temp);
				}
				// 전체 갯수 셋팅
				_this.setTotalSize(data.totalSize);
				// 그래프 데이터 셋팅
				_this.setData(_Data);
				// 랜더링
				_this.rederer()
			}
		});
	};
};
// 2013-04-18 그래프 랜더러 클래스 추가