(window.webpackJsonp=window.webpackJsonp||[]).push([[13,72],{204:function(e,t,a){"use strict";a.r(t);a(24),a(19),a(20),a(54),a(264);var n=a(0),r=a.n(n),i=a(207),l=a(213),c=a(62),o=a(232),s=a(1),u=a(208),m=a.n(u),d=a(214),f=a(240),h=a(222),b=a(233),v=a(153),p=a.n(v);function E(e){var t=e.item,a=e.onItemClick,i=e.collapsible,l=t.items,c=t.href,o=t.label,u=t.type,d=Object(n.useState)(t.collapsed),f=d[0],v=d[1],p=Object(n.useState)(null),k=p[0],g=p[1];t.collapsed!==k&&(g(t.collapsed),v(t.collapsed));var C=Object(n.useCallback)((function(e){e.preventDefault(),v((function(e){return!e}))}));switch(u){case"category":return l.length>0&&r.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":f}),key:o},r.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":i,"menu__link--active":i&&!t.collapsed}),href:"#!",onClick:i?C:void 0},o),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(E,{key:e.label,item:e,onItemClick:a,collapsible:i})}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:o},r.a.createElement(h.a,Object(s.a)({className:"menu__link",to:c},Object(b.a)(c)?{activeClassName:"menu__link--active",exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"}),o))}}var k=function(e){var t=Object(n.useState)(!1),a=t[0],i=t[1],c=Object(l.a)().siteConfig,o=(c=void 0===c?{}:c).themeConfig.navbar,s=(o=void 0===o?{}:o).title,u=o.logo,h=void 0===u?{}:u,b=Object(d.a)(h.src),v=e.docsSidebars,k=e.path,g=e.sidebar,C=e.sidebarCollapsible;if(Object(f.a)(a),!g)return null;var N=v[g];if(!N)throw new Error('Cannot find the sidebar "'+g+'" in the sidebar config!');return C&&N.forEach((function(e){return function e(t,a){var n=t.items,r=t.href;switch(t.type){case"category":var i=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!i,i;case"link":default:return r===a}}(e,k)})),r.a.createElement("div",{className:p.a.sidebar},r.a.createElement("div",{className:p.a.sidebarLogo},null!=h&&r.a.createElement("img",{src:b,alt:h.alt}),null!=s&&r.a.createElement("strong",null,s)),r.a.createElement("div",{className:m()("menu","menu--responsive",p.a.menu,{"menu--show":a})},r.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){i(!a)}},a?r.a.createElement("span",{className:m()(p.a.sidebarMenuIcon,p.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{className:p.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},N.map((function(e){return r.a.createElement(E,{key:e.label,item:e,onItemClick:function(){i(!1)},collapsible:C})})))))},g=a(253),C=a(9),N=(a(155),a(156)),_=a.n(N),w=function(e){return function(t){var a,n=t.id,i=Object(C.a)(t,["id"]),c=Object(l.a)().siteConfig,o=(c=void 0===c?{}:c).themeConfig,s=(o=void 0===o?{}:o).navbar,u=(s=void 0===s?{}:s).hideOnScroll,d=void 0!==u&&u;return n?r.a.createElement(e,i,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:m()("anchor",(a={},a[_.a.enhancedAnchor]=!d,a)),id:n}),r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#"),i.children):r.a.createElement(e,i)}},y=a(157),O=a.n(y),j={code:function(e){var t=e.children;return"string"==typeof t?r.a.createElement(g.a,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(h.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:O.a.mdxCodeBlock},e))},h1:w("h1"),h2:w("h2"),h3:w("h3"),h4:w("h4"),h5:w("h5"),h6:w("h6")},M=a(238),x=a(234),S=a(158),A=a.n(S);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,s=t.routes.find((function(e){return Object(x.a)(n.pathname,e)}))||{},u=a.permalinkToSidebar,m=a.docsSidebars,d=a.version,f=u[s.path],h=Object(l.a)(),b=h.siteConfig,v=(b=void 0===b?{}:b).themeConfig,p=void 0===v?{}:v,E=h.isClient,g=p.sidebarCollapsible,C=void 0===g||g;return 0===Object.keys(s).length?r.a.createElement(M.default,e):r.a.createElement(o.a,{version:d,key:E},r.a.createElement("div",{className:A.a.docPage},f&&r.a.createElement("div",{className:A.a.docSidebarContainer},r.a.createElement(k,{docsSidebars:m,path:s.path,sidebar:f,sidebarCollapsible:C})),r.a.createElement("main",{className:A.a.docMainContainer},r.a.createElement(i.a,{components:j},Object(c.a)(t.routes)))))}},238:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(232);t.default=function(){return r.a.createElement(i.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},264:function(e,t,a){"use strict";var n=a(17),r=a(265)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),n(n.P+n.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(74)("find")},265:function(e,t,a){var n=a(25),r=a(75),i=a(51),l=a(36),c=a(266);e.exports=function(e,t){var a=1==e,o=2==e,s=3==e,u=4==e,m=6==e,d=5==e||m,f=t||c;return function(t,c,h){for(var b,v,p=i(t),E=r(p),k=n(c,h,3),g=l(E.length),C=0,N=a?f(t,g):o?f(t,0):void 0;g>C;C++)if((d||C in E)&&(v=k(b=E[C],C,p),e))if(a)N[C]=v;else if(v)switch(e){case 3:return!0;case 5:return b;case 6:return C;case 2:N.push(b)}else if(u)return!1;return m?-1:s||u?u:N}}},266:function(e,t,a){var n=a(267);e.exports=function(e,t){return new(n(e))(t)}},267:function(e,t,a){var n=a(11),r=a(268),i=a(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},268:function(e,t,a){var n=a(21);e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);