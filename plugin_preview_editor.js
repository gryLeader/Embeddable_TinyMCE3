(function(){tinymce.create("tinymce.plugins.Preview",{init:function(a,b){var d=this,c=tinymce.explode(a.settings.content_css),DOM = tinymce.DOM,vpv2;d.editor=a;vpv2 = DOM.getViewPort();tinymce.each(c,function(f,e){c[e]=a.documentBaseURI.toAbsolute(f)});a.addCommand("mcePreview",function(){a.windowManager.open({file:a.getParam("plugin_preview_pageurl",b+"/plugin_preview.html"),width:parseInt(a.getParam("plugin_preview_width",(vpv2.w / 1.7))),height:parseInt(a.getParam("plugin_preview_height",(vpv2.h / 1.2))),resizable:"yes",scrollbars:"yes",popup_css:c?c.join(","):a.baseURI.toAbsolute("skin_"+a.settings.skin+"_content.css"),inline:a.getParam("plugin_preview_inline",1)},{base:a.documentBaseURI.getURI()})});a.addButton("preview",{title:"preview.preview_desc",cmd:"mcePreview"})},getInfo:function(){return{longname:"Preview",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/preview",version:tinymce.majorVersion+"."+tinymce.minorVersion}}});tinymce.PluginManager.add("preview",tinymce.plugins.Preview)})();