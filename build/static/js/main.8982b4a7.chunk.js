(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),u=n(4),i=n(3),l=n(2),m=n.n(l),s=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return o.a.createElement("li",null," ",e.content,o.a.createElement("button",{onClick:n}," ",a," "))},f="http://localhost:3001/api/notes",p=function(){return m.a.get(f).then((function(t){return t.data}))},d=function(t){return m.a.post(f,t).then((function(t){return t.data}))},b=function(t,e){return m.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))},g=(n(37),function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"error"},e)}),h=function(t){var e=Object(a.useState)([]),n=Object(i.a)(e,2),r=n[0],c=n[1],l=Object(a.useState)("a new note..."),m=Object(i.a)(l,2),f=m[0],h=m[1],v=Object(a.useState)(!0),E=Object(i.a)(v,2),j=E[0],O=E[1],k=Object(a.useState)("some error happened..."),w=Object(i.a)(k,2),S=w[0],y=w[1];Object(a.useEffect)((function(){p().then((function(t){c(t)}))}),[]),console.log("render",r.length,"notes");var C=j?r:r.filter((function(t){return!0===t.important})),I=function(t){var e=r.find((function(e){return e.id==t})),n=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});b(t,n).then((function(e){c(r.map((function(n){return n.id!==t?n:e})))})).catch((function(n){y("Note ".concat(e.content," was already removed from the server")),setTimeout((function(){y(null)}),5e3),c(r.filter((function(e){return e.id!==t})))})),console.log("importance of"+t+"needs to be toggled")};return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(g,{message:S}),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return O(!j)}},"show ",j?"important":"all")),o.a.createElement("ul",null,C.map((function(t){return o.a.createElement(s,{key:t.id,note:t,toggleImportance:I.bind(void 0,t.id)})}))),o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log("button clicked",t.target);var e={content:f,date:(new Date).toString(),important:Math.random()<5};d(e).then((function(t){c(r.concat(t)),h("")}))}},o.a.createElement("input",{value:f,onChange:function(t){console.log(t.target.value),h(t.target.value)}}),o.a.createElement("button",{type:"submit"}," save ")))};c.a.render(o.a.createElement(h,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8982b4a7.chunk.js.map