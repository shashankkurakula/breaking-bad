(this["webpackJsonpbreaking-bad-brad-react"]=this["webpackJsonpbreaking-bad-brad-react"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/logo.3795f66d.png"},30:function(e,t,a){e.exports=a.p+"static/media/spinner.235b9b3e.gif"},31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),s=a(11),i=a(1),o=(a(36),a(28)),u=a.n(o);var m=function(){return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:u.a,alt:"logo"}))};function d(){return r.a.createElement("div",{className:"menu"},r.a.createElement(s.b,{to:"/breaking-bad",className:"nav-link"},"Characters"),r.a.createElement(s.b,{to:"/quotes",className:"nav-link"},"Quotes"))}var p=a(8),E=a.n(p),f=a(12),b=a(7),g=a(13),h=a.n(g),v=function(e){var t=e.item,a=t.better_call_saul_appearance;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",{style:{bottom:0}},t.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"occupation:")," ",t.occupation.toString()),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",t.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",t.status),a.length>0?r.a.createElement("li",null,r.a.createElement("strong",null,"Also Starred in Better Call Saul")):" ",r.a.createElement("br",null),r.a.createElement("li",{style:{color:"#0d0d0d",fontSize:"18px"}},r.a.createElement("strong",{style:{fontWeight:"bold"}},"Actor:")," ",t.portrayed),r.a.createElement("li",{style:{color:"#0d0d0d",fontSize:"18px"}},r.a.createElement("strong",{style:{fontWeight:"bold"}},"DOB:")," ",t.birthday)))))},x=a(30),k=a.n(x),y=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:k.a,alt:"Loading...",style:{width:"200px",margin:"auto",display:"block"}}))},N=function(e){var t=e.isLoading,a=e.items;return t?r.a.createElement(y,null):r.a.createElement("section",{className:"cards"},a.map((function(e){return r.a.createElement(v,{key:e.char_id,item:e})})))},O=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(b.a)(a,2),l=c[0],s=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"search characters",value:l,onChange:function(e){return a=e.target.value,s(a),void t(a.toLowerCase());var a}})))},j=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),s=Object(b.a)(l,2),i=s[0],o=s[1],u=Object(n.useState)(""),m=Object(b.a)(u,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://www.breakingbadapi.com/api/characters?name=".concat(d));case 2:t=e.sent,c(t.data),o(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d]),r.a.createElement("div",{className:"container"},r.a.createElement(O,{getQuery:function(e){return p(e)}}),r.a.createElement(N,{isLoading:i,items:a}))},w=function(e){var t=e.item,a=e.characters,n=t.author,c=t.quote,l="";a.forEach((function(e){n===e.name&&(l=e.img)}));var s="25px";return c.length<30?s="45px":c.length<50?s="37px":c.length<80?s="30px":c.length<100?s="25px":c.length<130?s="23px":c.length>130&&(s="20px"),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front",style:{backgroundColor:"#333333",padding:"20px"}},r.a.createElement("p",{style:{fontSize:s,wordWrap:"break-Word "}},c),r.a.createElement("p",{style:{position:"absolute",fontSize:"12px",bottom:0,padding:"15px",right:0}},"- ",t.author)),r.a.createElement("div",{className:"card-back2"},r.a.createElement("img",{src:l,alt:""}))))},S=function(e){var t=e.isLoading,a=e.items,n=e.characters;return t?r.a.createElement(y,null):r.a.createElement("section",{className:"cards"},a.map((function(e){return r.a.createElement(w,{key:e.quote_id,item:e,characters:n})})))},L=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(b.a)(l,2),i=s[0],o=s[1],u=Object(n.useState)(!0),m=Object(b.a)(u,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://breakingbadapi.com/api/quotes?series=Breaking+Bad");case 2:t=e.sent,o(t.data),p(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://www.breakingbadapi.com/api/characters");case 2:t=e.sent,c(t.data),p(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(S,{isLoading:d,items:i,characters:a}))},q=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(m,null),r.a.createElement(d,null),r.a.createElement(i.a,{path:"/breaking-bad",exact:!0,component:j}),r.a.createElement(i.a,{path:"/quotes",exact:!0,component:L})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.84a3cfe6.chunk.js.map