(this["webpackJsonpinit-react-js"]=this["webpackJsonpinit-react-js"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),m=a(8),l=a.n(m),c=a(4),r=a(2),o=a(3),s=a.n(o);var _=function(e){let{id:t,coverImg:a,title:n,year:m,summary:l,genres:r}=e;return i.a.createElement("div",{className:s.a.movie},i.a.createElement("img",{src:a,alt:n,className:s.a.movie__img}),i.a.createElement("div",null,i.a.createElement("h2",{className:s.a.movie__title},i.a.createElement(c.b,{to:"/movie/".concat(t)},n)),i.a.createElement("h3",{className:s.a.movie__year},m),i.a.createElement("p",null,l.length>235?"".concat(l.slice(0,235),"..."):l),i.a.createElement("ul",{className:s.a.movie__genres},r.map(e=>i.a.createElement("li",{key:e},e)))))},v=a(5),u=a.n(v);var E=function(){const[e,t]=Object(n.useState)(!0),[a,m]=Object(n.useState)([]);return Object(n.useEffect)(()=>{(async()=>{const e=await(await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();m(e.data.movies),t(!1)})()},[]),i.a.createElement("div",{className:u.a.container},e?i.a.createElement("div",{className:u.a.loader},i.a.createElement("span",null,"Loading...")):i.a.createElement("div",{className:u.a.movies},a.map(e=>i.a.createElement(_,{key:e.id,id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres}))))};var d=function(){const{id:e}=Object(r.q)(),t="https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e),[a,m]=Object(n.useState)(!0),[l,c]=Object(n.useState)({}),o=Object(n.useCallback)(async()=>{const e=await(await fetch(t)).json();c(e.data.movie),m(!1)},[t]);return Object(n.useEffect)(()=>{o()},[]),i.a.createElement("div",null,i.a.createElement("h1",null,"Detail"),a?i.a.createElement("strong",null,"Loading..."):i.a.createElement("div",null,i.a.createElement("h1",null,l.title)))};var p=function(){return i.a.createElement(c.a,{basename:"/reactjs"},i.a.createElement(r.c,null,i.a.createElement(r.a,{path:"/hello",element:i.a.createElement("h1",null,"Hello")}),i.a.createElement(r.a,{path:"/",element:i.a.createElement(E,null)}),i.a.createElement(r.a,{path:"/movie/:id",element:i.a.createElement(d,null)})))};a(17);l.a.createRoot(document.getElementById("root")).render(i.a.createElement(p,null))},3:function(e,t,a){e.exports={movie:"Movie_movie__27rBX",movie__img:"Movie_movie__img__23OrX",movie__title:"Movie_movie__title__p6svq",movie__year:"Movie_movie__year__1Fz81",movie__genres:"Movie_movie__genres__2j2Od"}},5:function(e,t,a){e.exports={container:"Home_container__97rpc",loader:"Home_loader__4iU7f",movies:"Home_movies__3Ohm2"}},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.d593775f.chunk.js.map