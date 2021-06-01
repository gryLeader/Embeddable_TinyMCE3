(function(){
	var tinyDom=tinymce.DOM;
	tinymce.ThemeManager.requireLangPack("simple");	
	tinymce.create("tinymce.themes.SimpleTheme",{
		init:function(c,d){
			var e=this,b=["Bold","Italic","Underline","Strikethrough","InsertUnorderedList","InsertOrderedList"],stngs=c.settings;
			e.editor=c;
			c.contentCSS.push(tinymce.baseURL+"/skin_"+stngs.skin+"_content.css");
			c.onInit.add(function(){c.onNodeChange.add(function(h,g){tinymce.each(b,function(i){g.get(i.toLowerCase()).setActive(h.queryCommandState(i))})})});
			tinyDom.loadCSS((stngs.editor_css?c.documentBaseURI.toAbsolute(stngs.editor_css):"")||tinymce.baseURL+"/skin_"+stngs.skin+"_ui.css")},
			renderUI:function(h){
				var e=this,i=h.targetNode,b,tbar,d=e.editor,ctrlmgr=d.controlManager,g;				
				i=tinyDom.insertAfter(tinyDom.create("span",{id:d.id+"_container","class":"mceEditor "+d.settings.skin+"SimpleSkin"}),i);
				i=g=tinyDom.add(i,"table",{cellPadding:0,cellSpacing:0,"class":"mceLayout"});
				i=tbar=tinyDom.add(i,"tbody");
				i=tinyDom.add(tbar,"tr");
				i=b=tinyDom.add(tinyDom.add(i,"td"),"div",{"class":"mceIframeContainer"});		
				i=tinyDom.add(tinyDom.add(tbar,"tr",{"class":"last"}),"td",{"class":"mceToolbar mceLast",align:"center"});				
				tbar=e.toolbar=ctrlmgr.createToolbar("tools1");
					tbar.add(ctrlmgr.createButton("bold",{title:"simple.bold_desc",cmd:"Bold"}));
					tbar.add(ctrlmgr.createButton("italic",{title:"simple.italic_desc",cmd:"Italic"}));
					tbar.add(ctrlmgr.createButton("underline",{title:"simple.underline_desc",cmd:"Underline"}));
					tbar.add(ctrlmgr.createButton("strikethrough",{title:"simple.striketrough_desc",cmd:"Strikethrough"}));
					tbar.add(ctrlmgr.createSeparator());
					tbar.add(ctrlmgr.createButton("undo",{title:"simple.undo_desc",cmd:"Undo"}));
					tbar.add(ctrlmgr.createButton("redo",{title:"simple.redo_desc",cmd:"Redo"}));
					tbar.add(ctrlmgr.createSeparator());
					tbar.add(ctrlmgr.createButton("cleanup",{title:"simple.cleanup_desc",cmd:"mceCleanup"}));
					tbar.add(ctrlmgr.createSeparator());
					tbar.add(ctrlmgr.createButton("insertunorderedlist",{title:"simple.bullist_desc",cmd:"InsertUnorderedList"}));
					tbar.add(ctrlmgr.createButton("insertorderedlist",{title:"simple.numlist_desc",cmd:"InsertOrderedList"}));					
				tbar.renderTo(i);				
				return{iframeContainer:b,editorContainer:d.id+"_container",sizeContainer:g,deltaHeight:-20}
				},
			getInfo:function(){return{longname:"Simple theme",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",version:tinymce.majorVersion+"."+tinymce.minorVersion}}
		});
	tinymce.ThemeManager.add("simple",tinymce.themes.SimpleTheme)})();