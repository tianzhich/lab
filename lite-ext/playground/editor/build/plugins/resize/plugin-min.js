KISSY.Editor.add("resize",function(e){var d=KISSY,b=d.Editor,m=d.Node;b.Resizer||function(){function f(a){this.editor=a;this._init()}var n=b.Draggable;d.augment(f,{_init:function(){var a=this.editor,c=a.statusDiv,g=new m("<div class='ke-resizer'></div>");g.appendTo(c);c=new n({node:g});var h=0,i=0,j=a.wrap,k=a.editorWrap;c.on("start",function(){h=j.height();i=k.width()});c.on("move",function(l){var o=l.pageX-this.startMousePos.left;j.height(h+(l.pageY-this.startMousePos.top));k.width(i+o)})}});b.Resizer=
f}();e.addPlugin(function(){new b.Resizer(e)})});