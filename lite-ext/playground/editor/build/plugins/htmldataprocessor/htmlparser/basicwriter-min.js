KISSY.Editor.add("htmlparser-basicwriter",function(){function d(){this._={output:[]}}var c=KISSY.Editor,e=c.Utils;if(!c.HtmlParser.BasicWriter){KISSY.augment(d,{openTag:function(a){this._.output.push("<",a)},openTagClose:function(a,b){b?this._.output.push(" />"):this._.output.push(">")},attribute:function(a,b){if(typeof b=="string")b=e.htmlEncodeAttr(b);this._.output.push(" ",a,'="',b,'"')},closeTag:function(a){this._.output.push("</",a,">")},text:function(a){this._.output.push(a)},comment:function(a){this._.output.push("<!--",
a,"--\>")},write:function(a){this._.output.push(a)},reset:function(){this._.output=[];this._.indent=false},getHtml:function(a){var b=this._.output.join("");a&&this.reset();return b}});c.HtmlParser.BasicWriter=d}});