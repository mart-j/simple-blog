(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{14:function(e,t,n){e.exports={section:"Navigation_section__1VV7f",sectionBody:"Navigation_sectionBody__3f93m",log:"Navigation_log__10VcK",item:"Navigation_item__1L8JQ",active:"Navigation_active__3rcEr"}},18:function(e,t,n){e.exports={section:"Posts_section__1wBV7",heading:"Posts_heading__1FfLy",headingSecondary:"Posts_headingSecondary__3ZfKC",post:"Posts_post__23ioh",paragraph:"Posts_paragraph__3B1Nn",buttonWrapper:"Posts_buttonWrapper__1KvJ0"}},39:function(e,t,n){e.exports={button:"Button_button__qHYXB"}},46:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(4),s=n.n(a),i=n(15),r=n(37),o=n.n(r),l=(n(46),n(7)),A=n(18),u=n.n(A),j=n(19),d=n(38),b=n.n(d),m=function(){var e=Object(a.useState)(),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){b.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){var t=e.data;return c(t)}))}),[]),n},g=n(39),v=n.n(g),p=function(e){var t=e.onClickHandler,n=e.children;return Object(c.jsx)("button",{onClick:t,className:v.a.button,children:n})},f=function(){var e,t=Object(l.f)();return Object(c.jsxs)("section",{className:u.a.section,children:[Object(c.jsx)("h1",{className:u.a.heading,children:"Latest stories"}),null===(e=m())||void 0===e?void 0:e.map((function(e){var n=e.id,a=e.title,s=e.body;return Object(c.jsxs)("div",{className:u.a.post,children:[Object(c.jsx)("h2",{className:u.a.headingSecondary,children:a}),Object(c.jsx)("p",{className:u.a.paragraph,children:s}),Object(c.jsx)("div",{className:u.a.buttonWrapper,children:Object(c.jsx)(p,{onClickHandler:function(){return function(e){t.push("/simple-blog/articles/".concat(e))}(n)},children:"View post"})}),Object(c.jsx)("br",{})]},n.toString())}))]})},x=function(){return Object(c.jsx)(f,{})},h=function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)("h1",{children:"Sveiks, tas esmu es bloga autors!"}),Object(c.jsx)("p",{children:"Es rakstu blogu."})]})},O=n(27);O.a.initializeApp({apiKey:"AIzaSyCNW_jOg636V5KXrqJxFOmV6i4q2sVpEz8",authDomain:"react-crud-b64eb.firebaseapp.com",databaseURL:"https://react-crud-b64eb.firebaseio.com",projectId:"react-crud-b64eb",storageBucket:"react-crud-b64eb.appspot.com",messagingSenderId:"76311953971",appId:"1:76311953971:web:be9547d05bbf3883aad946"});var C=O.a,B=function(e){var t=e.inputElement,n=e.changeHandler;return Object(c.jsx)("input",{ref:t,onChange:n,type:"text"})},N=function(e){var t=e.articleId,n=Object(a.useState)(),s=Object(j.a)(n,2),i=s[0],r=s[1],o=Object(a.useState)(),l=Object(j.a)(o,2),A=l[0],u=l[1],d=Object(a.useState)(""),b=Object(j.a)(d,2),m=b[0],g=b[1],v=Object(a.useRef)(null);Object(a.useEffect)((function(){f()}),[]);var f=function(){C.database().ref("Comments").on("value",(function(e){e.val()?(r(Object.values(e.val())),u(Object.keys(e.val()))):r([])}))},x=null===i||void 0===i?void 0:i.filter((function(e){return e.id===Number(t)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:"Comments:"}),Object(c.jsx)(B,{inputElement:v,changeHandler:function(){g(v.current.value)}}),Object(c.jsx)(p,{onClickHandler:function(){(console.log(v.current.value),v.current.value)&&(C.database().ref("Comments").push({comment:m,id:Number(t)}),v.current.value="")},children:"Add comment"}),i&&(null===x||void 0===x?void 0:x.map((function(e,t){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:e.comment},e.toString()),Object(c.jsx)(p,{onClickHandler:function(){return e=t,void C.database().ref("Comments").child(A[e]).remove();var e},children:"delete"})]})})))]})},w=function(){var e,t=Object(l.g)().articleId,n=Object(l.f)(),a=null===(e=m())||void 0===e?void 0:e.find((function(e){return String(e.id)===t}));return Object(c.jsxs)("section",{children:[Object(c.jsxs)("h1",{children:[null===a||void 0===a?void 0:a.id," ",null===a||void 0===a?void 0:a.title]}),Object(c.jsx)("p",{children:null===a||void 0===a?void 0:a.body}),Object(c.jsx)(p,{onClickHandler:function(){n.push("/simple-blog")},children:"Go Back"}),Object(c.jsx)(N,{articleId:t})]})},J=n(14),E=n.n(J),S=function(){return Object(c.jsx)("section",{className:E.a.section,children:Object(c.jsxs)("div",{className:E.a.sectionBody,children:[Object(c.jsx)("div",{className:E.a.logoWrapper,children:Object(c.jsx)("img",{className:E.a.log,src:"data:image/png;base64,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",alt:""})}),Object(c.jsxs)("nav",{className:E.a.nav,children:[Object(c.jsx)(i.b,{className:E.a.item,exact:!0,activeClassName:E.a.active,to:"/simple-blog",children:"Home"}),Object(c.jsx)(i.b,{className:E.a.item,activeClassName:E.a.active,to:"/simple-blog/about",children:"About"})]})]})})},L=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(S,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/simple-blog",children:Object(c.jsx)(x,{})}),Object(c.jsx)(l.a,{exact:!0,path:"/simple-blog/about",children:Object(c.jsx)(h,{})}),Object(c.jsx)(l.a,{path:"/simple-blog/articles/:articleId",children:Object(c.jsx)(w,{})})]})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(i.a,{children:Object(c.jsx)(L,{})})}),document.getElementById("root")),Y()}},[[71,1,2]]]);
//# sourceMappingURL=main.2498e439.chunk.js.map