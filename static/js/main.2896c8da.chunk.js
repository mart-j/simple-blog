(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{43:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(4),i=c(3),r=c.n(i),o=c(15),s=c(35),b=c.n(s),a=(c(43),c(7)),j=c(17),u=c(36),l=c.n(u),d=function(){var e=Object(i.useState)(),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){l.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){var t=e.data;return n(t)}))}),[]),c},O=function(){var e,t=Object(a.f)();return Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"S\u0101kums"}),d&&(null===(e=d())||void 0===e?void 0:e.map((function(e){var c=e.id,i=e.title;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:i},c.toString()),Object(n.jsx)("br",{}),Object(n.jsx)("button",{onClick:function(){return function(e){t.push("/simple-blog/articles/".concat(e))}(c)},children:"read more"}),Object(n.jsx)("br",{})]})})))]})},h=function(){return Object(n.jsxs)("section",{children:[Object(n.jsx)("h1",{children:"Sveiks, tas esmu es bloga autors!"}),Object(n.jsx)("p",{children:"Es rakstu blogu."})]})},p=c(25);p.a.initializeApp({apiKey:"AIzaSyCNW_jOg636V5KXrqJxFOmV6i4q2sVpEz8",authDomain:"react-crud-b64eb.firebaseapp.com",databaseURL:"https://react-crud-b64eb.firebaseio.com",projectId:"react-crud-b64eb",storageBucket:"react-crud-b64eb.appspot.com",messagingSenderId:"76311953971",appId:"1:76311953971:web:be9547d05bbf3883aad946"});var m=p.a,v=function(){var e,t=Object(i.useState)(),c=Object(j.a)(t,2),r=c[0],o=c[1],s=Object(i.useState)(),b=Object(j.a)(s,2),u=b[0],l=b[1],O=Object(i.useState)(""),h=Object(j.a)(O,2),p=h[0],v=h[1],f=Object(a.g)().articleId,x=Object(i.useRef)(null),g=Object(a.f)(),C=null===(e=d())||void 0===e?void 0:e.find((function(e){return String(e.id)===f})),S=null===r||void 0===r?void 0:r.filter((function(e){return e.id===Number(f)}));Object(i.useEffect)((function(){m.database().ref("Comments").on("value",(function(e){e.val()?(o(Object.values(e.val())),l(Object.keys(e.val()))):o([])}))}),[]);return Object(n.jsxs)("section",{children:[Object(n.jsxs)("h1",{children:[null===C||void 0===C?void 0:C.id," ",null===C||void 0===C?void 0:C.title]}),Object(n.jsx)("p",{children:null===C||void 0===C?void 0:C.body}),Object(n.jsx)("button",{onClick:function(){g.push("/simple-blog")},children:"Go Back"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{onChange:function(){v(x.current.value)},ref:x,type:"text"}),Object(n.jsx)("button",{onClick:function(){return e=Number(null===C||void 0===C?void 0:C.id),void(x.current.value&&(m.database().ref("Comments").push({comment:p,id:e}),x.current.value=""));var e},children:"Add comment"}),Object(n.jsx)("div",{children:"Comments:"}),r&&(null===S||void 0===S?void 0:S.map((function(e,t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:e.comment},e.toString()),Object(n.jsx)("button",{onClick:function(){return e=t,void m.database().ref("Comments").child(u[e]).remove();var e},children:"delete"})]})})))]})},f=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.b,{to:"/simple-blog",children:"Home"}),Object(n.jsx)(o.b,{to:"/simple-blog/about",children:"About"}),Object(n.jsxs)(a.c,{children:[Object(n.jsx)(a.a,{exact:!0,path:"/simple-blog",children:Object(n.jsx)(O,{})}),Object(n.jsx)(a.a,{exact:!0,path:"/simple-blog/about",children:Object(n.jsx)(h,{})}),Object(n.jsx)(a.a,{path:"/simple-blog/articles/:articleId",children:Object(n.jsx)(v,{})})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),i(e),r(e),o(e)}))};b.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(f,{})})}),document.getElementById("root")),x()}},[[68,1,2]]]);
//# sourceMappingURL=main.2896c8da.chunk.js.map