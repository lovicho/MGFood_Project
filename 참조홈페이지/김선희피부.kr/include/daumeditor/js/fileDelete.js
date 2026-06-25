Trex.module("refresh attachbox on delete entry",
	function(editor, toolbar, sidebar, canvas, config) {
		var attachbox = editor.getAttachBox();

		// 썸네일 이미지가 첨부박스의 entry에 없다면 초기화
		var refreshPreviewImg = function(){
			var currentPreviewImgUrl = attachbox.elPreviewImg.src;
			for( var i=attachbox.datalist.length-1; i>=0; --i ){
				var entry = attachbox.datalist[i];
				if( entry.deletedMark == true && currentPreviewImgUrl == entry.boxAttr.image ){
					attachbox.imageResizer.execResize(TXMSG("@attacher.preview.image"));
					break;
				}
			}
		};
		
		// http get request
		var getXMLHttpRequest = function() {
			if (window.ActiveXObject) {
				try {
					return new ActiveXObject("Msxml2.XMLHTTP");
				} catch(e) {
					try {
						return new ActiveXObject("Microsoft.XMLHTTP");
					} catch(e1) {
						return null;
					}
				}
			} else if (window.XMLHttpRequest) {
				return new XMLHttpRequest();
			} else {
				return null;
			}
		};
		
		// http send request
		var sendRequest = function(url, params, callback, method) {
			var httpRequest = getXMLHttpRequest();
			var httpMethod = method ? method : 'GET';
			if (httpMethod != 'GET' && httpMethod != 'POST') { httpMethod = 'GET'; }
			var httpParams = (params == null || params == '') ? null : params;
			var httpUrl = url;
			if (httpMethod == 'GET' && httpParams != null) { httpUrl = httpUrl + "?" + httpParams; }
			httpRequest.open(httpMethod, httpUrl, true);
			httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			if (callback) { httpRequest.onreadystatechange = callback; }
			httpRequest.send(httpMethod == 'POST' ? httpParams : null);
		};

		// 삭제 함수
		var removeFiles = function(tag){
			var param = "";
			tag = decodeURI(tag);
			param += "tag="+(new RegExp('/data[^"]+')).exec(tag);//"tag="+tag;
			sendRequest("/files/delete",param,'',"POST");
		};

		// 첨부박스에 entry 삭제 이벤트
		attachbox.observeJob(Trex.Ev.__ENTRYBOX_ENTRY_REMOVED, function(ev){
			removeFiles(ev.data.imageurl);
			//console.log(ev.data);
			// 썸네일 갱신
			refreshPreviewImg(this);
		});
		
		/*
		// canvas에서 삭제 이벤트
		canvas.observeJob(Trex.Ev.__CANVAS_PANEL_DELETE_SOMETHING, function(ev){
			// 데이터중에 존재하지 stage에 존재하지 않는 entry는 박스에서 바로 제거
			attachbox.datalist.each(function (entry) {
				//console.log(entry);
				if (entry.type =='image' && entry.actor.name == 'image' && entry.existStage == false) {
					entry.execRemove();
				}
			});
			// 썸네일 갱신
			refreshPreviewImg(attachbox);
		});
		*/
	}
);


