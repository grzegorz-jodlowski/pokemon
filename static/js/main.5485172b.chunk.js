(this.webpackJsonppokesite=this.webpackJsonppokesite||[]).push([[0],{11:function(e,t,a){e.exports={root:"PokemonPage_root__26Dvp",card:"PokemonPage_card__3N1-2",image:"PokemonPage_image__37blq",descriptionContainer:"PokemonPage_descriptionContainer__3Rwev",statsContainer:"PokemonPage_statsContainer__tQC1y",name:"PokemonPage_name__2fR5E",stats:"PokemonPage_stats__2fZZN",tooltiptext:"PokemonPage_tooltiptext__1Quo4",error:"PokemonPage_error__3QaLg"}},12:function(e,t,a){e.exports={root:"Navigation_root__3RmmM",navLink:"Navigation_navLink__13N4U",grow:"Navigation_grow__gtIS7",active:"Navigation_active__3p-sv"}},17:function(e,t,a){e.exports={root:"HomePage_root__3WB1Y",search:"HomePage_search__1qPqM",button:"HomePage_button__3nIwi",error:"HomePage_error__1hreV"}},19:function(e,t,a){e.exports={root:"AppBar_root__1s4AF",navigation:"AppBar_navigation__24pb7"}},20:function(e,t,a){e.exports={root:"Pokemon_root__19P4G",title:"Pokemon_title__1O1l4",button:"Pokemon_button__kTlwf"}},21:function(e,t,a){e.exports={root:"Spinner_root__3KSOZ",spinner:"Spinner_spinner__2FfVx",spin:"Spinner_spin__3mDhZ",full:"Spinner_full__1uATH"}},26:function(e,t,a){e.exports={root:"SearchInput_root__22IAp",input:"SearchInput_input__AFMG9"}},38:function(e,t,a){e.exports={root:"MainLayout_root__3pldq"}},39:function(e,t,a){e.exports={root:"Logo_root__bewmh"}},41:function(e,t,a){},42:function(e,t,a){e.exports={root:"Copyright_root__Vl81E"}},43:function(e,t,a){e.exports={root:"PokemonList_root__3zDkm"}},44:function(e,t,a){e.exports={root:"ButtonLink_root__-1d72"}},45:function(e,t,a){e.exports={root:"Button_root__1Mx6D"}},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),o=a.n(c),s=a(37),r=a.n(s),i=a(3),j=a(2),l=a(38),m=a.n(l),u=a(19),b=a.n(u),_=a(10),p=a(39),O=a.n(p),f=function(e){var t=e.className;return Object(n.jsx)(_.b,{to:"".concat("/pokemon","/"),className:Object(j.a)(t,O.a.root),children:"PokeSite"})},x=a(12),d=a.n(x),h=function(e){var t=e.className;return Object(n.jsxs)("nav",{className:Object(j.a)(t,d.a.root),children:[Object(n.jsx)(_.c,{className:Object(j.a)(d.a.navLink),exact:!0,to:"".concat("/pokemon","/"),activeClassName:d.a.active,children:"Home"}),Object(n.jsx)(_.c,{className:Object(j.a)(d.a.navLink),exact:!0,to:"".concat("/pokemon","/blog"),activeClassName:d.a.active,children:"Blog"}),Object(n.jsx)(_.c,{className:Object(j.a)(d.a.navLink),exact:!0,to:"".concat("/pokemon","/contact"),activeClassName:d.a.active,children:"Contact"})]})},N=function(e){var t=e.className;e.children;return Object(n.jsxs)("div",{className:Object(j.a)(t,b.a.root),children:[Object(n.jsx)(f,{className:b.a.logo}),Object(n.jsx)(h,{className:b.a.navigation})]})},g=a(41),v=a.n(g),k=a(42),P=a.n(k),S=function(e){var t=e.className;return Object(n.jsx)("p",{className:Object(j.a)(t,P.a.root),children:"Copyright \xa9 ".concat((new Date).getFullYear()," Grzegorz Jod\u0142owski")})},C=function(e){var t=e.className;return Object(n.jsx)("footer",{id:"contact",className:Object(j.a)(t,v.a.root),children:Object(n.jsx)(S,{})})},w=function(e){var t=e.className,a=e.children;return Object(n.jsxs)("div",{className:Object(j.a)(t,m.a.root),children:[Object(n.jsx)(N,{}),a,Object(n.jsx)(C,{})]})},L=a(27),y=a(8),B=a(16),A=a.n(B),F=a(17),H=a.n(F),I="https://pokeapi.co/api/v2/pokemon",M=a(43),D=a.n(M),E=a(20),q=a.n(E),Z=function(e){return e&&"string"===typeof e?e.charAt(0).toUpperCase()+e.slice(1):void 0},z=a(44),G=a.n(z),J=function(e){var t=e.className,a=e.text,c=e.href;return Object(n.jsx)(_.b,{className:Object(j.a)(t,G.a.root),to:c,children:a})},Q=function(e){var t=e.className,a=e.pokemon;return Object(n.jsxs)("article",{className:Object(j.a)(t,q.a.root),children:[Object(n.jsx)("p",{className:q.a.title,children:Z(a.name)}),Object(n.jsx)(J,{text:"See more",href:"".concat("/pokemon","/pokemons/").concat(a.name),className:q.a.button})]})},R=function(e){var t=e.className,a=e.pokemons;return Object(n.jsx)("section",{className:Object(j.a)(t,D.a.root),children:a.map((function(e){return Object(n.jsx)(Q,{pokemon:e},"".concat(e.name," ").concat(e.url))}))})},V=a(21),T=a.n(V),U=function(e){var t=e.className,a=e.full;return Object(n.jsx)("div",{className:Object(j.a)(t,T.a.root,a&&T.a.full),children:Object(n.jsx)("div",{className:Object(j.a)(T.a.spinner)})})},Y=a(45),K=a.n(Y),W=function(e){var t=e.className,a=e.text,c=e.action;return Object(n.jsx)("button",{className:Object(j.a)(t,K.a.root),onClick:c||null,children:a})},X=a(26),$=a.n(X),ee=function(e){var t=e.className,a=e.setSearchString;return Object(n.jsx)("div",{className:Object(j.a)(t,$.a.root),children:Object(n.jsx)("input",{className:$.a.input,type:"text",placeholder:"Search...",onChange:function(e){return a(e.target.value)}})})},te=function(e){var t=e.className,a=Object(c.useState)([]),o=Object(y.a)(a,2),s=o[0],r=o[1],i=Object(c.useState)(""),l=Object(y.a)(i,2),m=l[0],u=l[1],b=Object(c.useState)(!1),_=Object(y.a)(b,2),p=_[0],O=_[1],f=Object(c.useState)(!1),x=Object(y.a)(f,2),d=x[0],h=x[1],N=Object(c.useState)(""),g=Object(y.a)(N,2),v=g[0],k=g[1],P=Object(c.useState)(""),S=Object(y.a)(P,2),C=S[0],w=S[1],B=Object(c.useState)(0),F=Object(y.a)(B,2),M=F[0],D=F[1];Object(c.useEffect)((function(){O(!0),A.a.get("".concat(I,"/")).then((function(e){O(!1),k(e.data.next),r(e.data.results),D(e.data.count)})).catch((function(e){O(!1),w(e.message)}))}),[]);var E=s.filter((function(e){return e.name.includes(m.toLocaleLowerCase())}));return Object(n.jsx)("main",{className:Object(j.a)(t,H.a.root),children:p?Object(n.jsx)(U,{}):C?Object(n.jsx)("p",{className:H.a.error,children:"B\u0142\u0105d pobierania danych, spr\xf3buj ponownie"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ee,{className:H.a.search,setSearchString:u}),Object(n.jsx)(R,{pokemons:E}),d?Object(n.jsx)(U,{}):s.length<M&&Object(n.jsx)(W,{text:"Load more Pokemons!",action:function(){h(!0),A.a.get(v).then((function(e){h(!1),k(e.data.next),r([].concat(Object(L.a)(s),Object(L.a)(e.data.results)))})).catch((function(e){h(!1),w(e.message)}))},className:H.a.button})]})})},ae=function(e){if(e&&"string"===typeof e)switch(e){case"attack":return"fas fa-fist-raised";case"defense":return"fas fa-umbrella";case"special-attack":return"fas fa-meteor";case"special-defense":return"fas fa-shield-alt";case"speed":return"fas fa-tachometer-alt";default:return"fas fa-meteor"}},ne=a(11),ce=a.n(ne),oe=function(e){var t=e.className,a=e.match,o=Object(c.useState)(null),s=Object(y.a)(o,2),r=s[0],i=s[1],l=Object(c.useState)(!1),m=Object(y.a)(l,2),u=m[0],b=m[1],_=Object(c.useState)(""),p=Object(y.a)(_,2),O=p[0],f=p[1];return Object(c.useEffect)((function(){b(!0),A.a.get("".concat(I,"/").concat(a.params.id)).then((function(e){b(!1),i(e.data)})).catch((function(e){b(!1),f(e.message)}))}),[a.params.id]),Object(n.jsx)("main",{className:Object(j.a)(t,ce.a.root),children:u?Object(n.jsx)(U,{}):O?Object(n.jsx)("p",{className:ce.a.error,children:"B\u0142\u0105d pobierania danych, spr\xf3buj ponownie"}):Object(n.jsx)("article",{className:Object(j.a)(t,ce.a.card),children:r?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:r.sprites.front_default,alt:r.name,className:ce.a.image}),Object(n.jsxs)("div",{className:ce.a.descriptionContainer,children:[Object(n.jsx)("h4",{className:ce.a.name,children:Z(r.name)}),Object(n.jsx)("div",{className:ce.a.statsContainer,children:r.stats.slice(1,5).map((function(e,t){return Object(n.jsxs)("div",{className:ce.a.stats,children:[Object(n.jsx)("i",{className:ae(e.stat.name)}),"".concat(e.base_stat),Object(n.jsx)("span",{className:ce.a.tooltiptext,children:e.stat.name})]},"".concat(r.name,"-stat-").concat(t))}))})]})]}):null})})},se=function(){return Object(n.jsx)(w,{children:Object(n.jsxs)(i.c,{children:[Object(n.jsx)(i.a,{exact:!0,path:"".concat("/pokemon","/"),component:te}),Object(n.jsx)(i.a,{exact:!0,path:"".concat("/pokemon","/pokemons/:id"),component:oe})]})})};a(74),a(75);r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(_.a,{children:Object(n.jsx)(se,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.5485172b.chunk.js.map