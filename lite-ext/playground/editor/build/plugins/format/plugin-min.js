KISSY.Editor.add("format",function(i){var d=KISSY.Editor,j=KISSY,k=[],e={"普通文本":"p","标题1":"h1","标题2":"h2","标题3":"h3","标题4":"h4","标题5":"h5","标题6":"h6"},m={p:"1em",h1:"2em",h2:"1.5em",h3:"1.17em",h4:"1em",h5:"0.83em",h6:"0.67em"},f={},n=d.Style,b;for(b in e)if(e[b]){f[e[b]]=new n({element:e[b]});k.push({name:b,value:e[b],attrs:{style:"font-size:"+m[e[b]]}})}d.Format||function(){function g(a){g.superclass.constructor.call(this,a);this._init()}g.ATTRS={editor:{}};var h=d.Select;j.extend(g,j.Base,{_init:function(){var a=
this.get("editor");this.el=new h({container:a.toolBarDiv,value:"",doc:a.document,width:this.get("width"),popUpWidth:this.get("popUpWidth"),title:this.get("title"),items:this.get("html")});this.el.on("click",this._vChange,this);a.on("selectionChange",this._selectionChange,this);d.Utils.sourceDisable(a,this)},disable:function(){this.el.set("state",h.DISABLED)},enable:function(){this.el.set("state",h.ENABLED)},_vChange:function(a){var c=this.get("editor"),l=a.newVal;a=a.preVal;c.fire("save");if(l!=a)f[l].apply(c.document);
else{f.p.apply(c.document);this.el.set("value","p")}c.fire("save")},_selectionChange:function(a){this.get("editor");a=a.path;for(var c in f)if(f[c].checkActive(a)){this.el.set("value",c);return}this.el.reset("value")}});d.Format=g}();i.addPlugin(function(){new d.Format({editor:i,html:k,title:"标题",width:"100px",popUpWidth:"120px"})})});