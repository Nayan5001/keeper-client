(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{53:function(e,t,n){e.exports=n(83)},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(7),o=n.n(l),r=n(49),u=n(12),i=n(46),p=n.n(i);var s=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement(p.a,null),"Keeper"))};var m=function(){var e=(new Date).getFullYear();return c.a.createElement("footer",null,c.a.createElement("p",null,"Copyright \u24d2 ",e))},d=n(48),f=n.n(d);var h=function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},c.a.createElement(f.a,null)))},E=n(36),g=n(35),b=n.n(g),k=n(100),v=n(101),j=n(15),O=n.n(j);var C=function(e){var t=c.a.useState(!1),n=Object(u.a)(t,2),l=n[0],o=n[1],r=Object(a.useState)(0),i=Object(u.a)(r,2),p=i[0],s=i[1],m=Object(a.useState)(!0),d=Object(u.a)(m,2),f=d[0],h=d[1];Object(a.useEffect)((function(){O.a.get("https://keeper999.herokuapp.com/getid").then((function(e){console.log(e.data.idd),s(e.data.idd)})),h(!1)}),[]);var g=Object(a.useState)({title:"",content:"",id:p}),j=Object(u.a)(g,2),C=j[0],S=j[1];function w(e){var t=e.target,n=t.name,a=t.value;S((function(e){return Object(E.a)(Object(E.a)({},e),{},{[n]:a,id:p})}))}function x(t){e.onAdd(C),S({title:"",content:"",id:""}),s(p+1),O.a.post("https://keeper999.herokuapp.com/savenextid",{idd:p}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),t.preventDefault()}function D(){o(!0)}var y=C.title.length>0;return!f&&c.a.createElement("div",null,c.a.createElement("form",{className:"create-note",onSubmit:x},l?c.a.createElement("input",{name:"title",onChange:w,value:C.title,placeholder:"Title",required:!0}):"",l?c.a.createElement("textarea",{name:"content",onClick:D,onChange:w,value:C.content,placeholder:"Take a note...",rows:"3"}):c.a.createElement("textarea",{name:"content",onClick:D,onChange:w,value:C.content,placeholder:"Take a note...",rows:"1"}),l?c.a.createElement(v.a,{in:!0},c.a.createElement(k.a,{disabled:!y,onClick:x},c.a.createElement(b.a,null))):c.a.createElement(v.a,{in:!1},c.a.createElement(k.a,{disabled:!y,onClick:x},c.a.createElement(b.a,null)))))};var S=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(!0),i=Object(u.a)(o,2),p=i[0],d=i[1];function f(e){O.a.post("https://keeper999.herokuapp.com/apidel",{id:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),l((function(t){return t.filter((function(t,n){return t.id!==e}))})),console.log(e)}return Object(a.useEffect)((function(){O.a.get("https://keeper999.herokuapp.com/api").then((function(e){console.log(e.data),l(e.data)})),d(!1)}),[]),!p&&c.a.createElement("div",null,c.a.createElement(s,null),c.a.createElement(C,{onAdd:function(e){console.log(e),O.a.post("https://keeper999.herokuapp.com/apiadd",{newNote:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),l((function(t){return[].concat(Object(r.a)(t),[e])}))}}),n.map((function(e,t){return c.a.createElement(h,{key:t,id:e.id,title:e.title,content:e.content,onDelete:f})})),c.a.createElement(m,null))};o.a.render(c.a.createElement("div",null,c.a.createElement(S,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.35f88bc9.chunk.js.map