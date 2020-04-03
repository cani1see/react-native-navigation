(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),o=(a(0),a(171)),l={id:"overlay-api",title:"Overlay",sidebar_label:"Overlay"},c={id:"overlay-api",title:"Overlay",description:"## `showOverlay()`",source:"@site/docs/api-overlay.mdx",permalink:"/docs/overlay-api",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/api-overlay.mdx",sidebar_label:"Overlay",sidebar:"api",previous:{title:"Modal",permalink:"/docs/modal-api"},next:{title:"Layout",permalink:"/docs/layout"}},b=[{value:"<code>showOverlay()</code>",id:"showoverlay",children:[]},{value:"<code>dismissOverlay()</code>",id:"dismissoverlay",children:[]}],i={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"showoverlay"},Object(o.b)("inlineCode",{parentName:"h2"},"showOverlay()")),Object(o.b)("p",null,"Shows a component as an overlay."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"layout"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"layout"}),"Layout")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any type of layout. Typically, Component layout is used in Overlays but it's possible to load any other layout (",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"bottomTabs-layout"}),"BottomTabs"),", ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"stack-layout"}),"Stack"),", ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"sideMenu-layout"}),"SideMenu"),", ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"component-layout"}),"Component"),")")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.showOverlay({\n  component: {\n    name: 'example.Overlay',\n    options: {\n      overlay: {\n        interceptTouchOutside: true\n      }\n    }\n  }\n});\n")),Object(o.b)("h2",{id:"dismissoverlay"},Object(o.b)("inlineCode",{parentName:"h2"},"dismissOverlay()")),Object(o.b)("p",null,"Dismisses an overlay matching the given overlay componentId."),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentId"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The component id presented in Overlay")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.dismissOverlay(this.props.componentId);\n")))}p.isMDXComponent=!0},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=p(a),s=n,m=u["".concat(l,".").concat(s)]||u[s]||O[s]||o;return a?r.a.createElement(m,c({ref:t},i,{components:a})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);