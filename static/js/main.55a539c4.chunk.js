(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=(n(79),n(19)),l=n(20),s=n(22),d=n(21),u=n(23),m=(n(81),n(28)),f=n(4),h=n.n(f),y=(n(173),n(29)),g=y.b.Map({"custom-block-h3":{element:"h3"}}),p=h.a.DefaultDraftBlockRenderMap.merge(g),b=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.block.getData();return r.a.createElement("div",{"data-offset-key":"0tys1-0-0",className:"public-DraftStyleDefault-block public-DraftStyleDefault-ltr"},r.a.createElement("span",{"data-offset-key":"0tys1-0-0"},r.a.createElement("span",{"data-text":"true"},t.get("some"))))}}]),e}(r.a.Component),C=function(t){if("custom"===t.getType())return{component:b,editable:!0}},k=n(73),v=n(72),E=function(t,e,n){var a=t.getCurrentContent();n=n||t.getSelection();var r=f.EditorState.createEmpty(),o=f.BlockMapBuilder.createFromArray(e);if(n.isCollapsed()){var i=f.Modifier.replaceWithFragment(a,n,o);r=f.EditorState.push(t,i,"insert-fragment")}return r},O=function(t){return t.map(function(t){return new f.ContentBlock(Object(k.a)({},t,{key:Object(f.genKey)(),data:new y.a({})}))})},S=function(t){return{terms:v.blocks}[t]},j=function(){var t=document.getElementsByClassName("DraftEditor-editorContainer")[0];t&&t.offsetHeight},D=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(d.a)(e).call(this,t))).onStyleButtonClick=function(t){n.onChange(f.RichUtils.toggleInlineStyle(n.state.editorState,t.target.name))},n.insertContent=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=n.state.editorState,r=E(a,t,e);n.onChange(r)},n.handleDrop=function(t,e,a){if("external"===a){var r=e.data.getData("text"),o=O(S(r));return n.insertContent(o,t),"handled"}},n.state={editorState:f.EditorState.createEmpty()},n.onChange=function(t){n.setState({editorState:t}),j()},n.handleKeyCommand=n.handleKeyCommand.bind(Object(m.a)(Object(m.a)(n))),n}return Object(u.a)(e,t),Object(l.a)(e,[{key:"handleKeyCommand",value:function(t,e){var n=f.RichUtils.handleKeyCommand(e,t);return n?(this.onChange(n),"handled"):"not-handled"}},{key:"render",value:function(){var t=this,e=["BOLD","ITALIC","UNDERLINE"].map(function(e){return r.a.createElement("button",{key:e,onClick:t.onStyleButtonClick,name:e},e)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"New Editor"),r.a.createElement("div",{className:"toolbar"},e,r.a.createElement("button",{key:"logger",onClick:function(){return e=t.state.editorState,void console.log(Object(f.convertToRaw)(e.getCurrentContent()));var e}},"LOG STATE"),r.a.createElement("button",{key:"text",onClick:function(){return t.insertContent(O(S("terms")))}},"INSERT"),r.a.createElement("button",{key:"input",onClick:function(){return t.insertContent(function(){var t=prompt();return[new f.ContentBlock({text:t,key:Object(f.genKey)(),data:new y.a({})})]}())}},"INPUT")),r.a.createElement("div",{className:"terms",draggable:!0,id:"terms",onDragStart:function(t){return(e=t).dataTransfer.setData("text",e.target.id),void e.target.classList.add("dragging");var e},onDragEnd:function(t){t.target.classList.remove("dragging")}},"Terms"),r.a.createElement(f.Editor,{editorState:this.state.editorState,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,ref:"editor",handleDrop:this.handleDrop,blockRendererFn:C,blockRenderMap:p,placeholder:"Start typing..."}))}}]),e}(r.a.Component),R=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null))}}]),e}(a.Component);i.a.render(r.a.createElement(R,null),document.getElementById("root"))},72:function(t){t.exports={blocks:[{key:"dausv",text:"",type:"unstyled",depth:0,inlineStyleRanges:[],entityRanges:[],data:{}},{key:"7njs1",text:"Terms and Conditions",type:"custom-block-h3",depth:0,inlineStyleRanges:[{offset:0,length:20,style:"fontsize-16"},{offset:0,length:20,style:"BOLD"}],entityRanges:[],data:{}},{key:"bhmtm",text:"This Freelance Contract is governed by the terms and conditions provided here and in Attachment A, attached hereto.",type:"unstyled",depth:0,inlineStyleRanges:[{offset:0,length:115,style:"fontsize-16"}],entityRanges:[],data:{"text-align":"justify"}}],entityMap:{}}},74:function(t,e,n){t.exports=n(175)},79:function(t,e,n){},81:function(t,e,n){}},[[74,2,1]]]);
//# sourceMappingURL=main.55a539c4.chunk.js.map