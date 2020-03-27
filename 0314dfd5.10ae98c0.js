(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return o})),i.d(t,"rightToc",(function(){return p})),i.d(t,"default",(function(){return l}));var r=i(1),n=i(9),a=(i(0),i(207)),c={title:"Access App Properties in an Activity"},o={id:"workflow/access-app-properties-web",title:"Access App Properties in an Activity",description:"## Prerequisites",source:"@site/docs/workflow/access-app-properties-web.mdx",permalink:"/dev-center/docs/workflow/access-app-properties-web",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/access-app-properties-web.mdx",sidebar:"workflow",previous:{title:"Implement a Custom Activity for Web Applications",permalink:"/dev-center/docs/workflow/implement-custom-activity-web"},next:{title:"Implement a Custom Form Element for Web Applications",permalink:"/dev-center/docs/workflow/implement-custom-form-elements-web"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"App Activities",id:"app-activities",children:[]},{value:"Example: Custom Activity that Adds a Layer to the Map",id:"example-custom-activity-that-adds-a-layer-to-the-map",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],s={rightToc:p};function l(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Learn how to build a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/workflow/implement-custom-activity-web"}),"custom activity")," for web applications before reading this article."),Object(a.b)("h2",{id:"app-activities"},"App Activities"),Object(a.b)("p",null,"Some activities may need access to resources like the map, the host application or host widget. An ",Object(a.b)("inlineCode",{parentName:"p"},"AppActivity")," base class is that can be used to extend an existing custom activity to access these resources."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Depending on the type of host application different resources will be available."))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Add an import for the ",Object(a.b)("inlineCode",{parentName:"li"},"AppActivity")," base class at the top of your activity .ts(x) file.",Object(a.b)("br",{parentName:"li"}),Object(a.b)("inlineCode",{parentName:"li"},'import { AppActivity } from "@geocortex/workflow/runtime/app/AppActivity";')),Object(a.b)("li",{parentName:"ol"},"Modify the activity class declaration to extend the ",Object(a.b)("inlineCode",{parentName:"li"},"AppActivity")," base class.",Object(a.b)("br",{parentName:"li"}),Object(a.b)("inlineCode",{parentName:"li"},"export class CustomActivity extends AppActivity")),Object(a.b)("li",{parentName:"ol"},"Use the ",Object(a.b)("inlineCode",{parentName:"li"},"map"),", ",Object(a.b)("inlineCode",{parentName:"li"},"app")," or ",Object(a.b)("inlineCode",{parentName:"li"},"widget")," properties of the activity class within the ",Object(a.b)("inlineCode",{parentName:"li"},"execute(inputs)")," method.")),Object(a.b)("h2",{id:"example-custom-activity-that-adds-a-layer-to-the-map"},"Example: Custom Activity that Adds a Layer to the Map"),Object(a.b)("p",null,"The following activity uses ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/workflow/integrating-the-esri-api-web"}),"Esri types")," and the ",Object(a.b)("inlineCode",{parentName:"p"},"AppActivity")," class to create a graphics layer and add it to the host's map. This activity assumes that it will be running in Geocortex Web, and so ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/dev-center/docs/workflow/integrating-the-esri-api-web#swap-out-the-default-esri-3x-api-for-the-4x-api"}),"it uses the Esri 4.X API"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import { AppActivity } from "@geocortex/workflow/runtime/app/AppActivity";\nimport Map = require("esri/Map");\nimport Graphic = require("esri/Graphic");\nimport GraphicsLayer = require("esri/layers/GraphicsLayer");\nimport Polyline = require("esri/geometry/Polyline");\nimport LineSymbol = require("esri/symbols/LineSymbol");\n\n// @supportedApps GWV\n// @displayName AddLayerToMap\n// @category Custom Activities\n// @description An activity which adds a graphics layer to a map.\nexport class AddLayerToMap extends AppActivity {\n    static action = "uuid:a1c505cb-c725-465c-9ca1-f11a5316dfec::AddLayerToMap";\n\n    static suite = "uuid:a1c505cb-c725-465c-9ca1-f11a5316dfec";\n\n    // Perform the execution logic of the activity.\n    async execute(inputs: object): Promise<void> {\n        var polylineGraphic = new Graphic({\n            geometry: new Polyline({\n                paths: [\n                    [\n                        [-111.3, 52.68],\n                        [-98, 49.5],\n                        [-93.94, 29.89],\n                    ],\n                ],\n            }),\n            symbol: new LineSymbol({\n                color: [226, 119, 40],\n                width: 4,\n            }),\n        });\n\n        var graphicsLayer = new GraphicsLayer({\n            graphics: [polylineGraphic],\n        });\n\n        (this.map as Map).add(graphicsLayer);\n\n        return;\n    }\n}\n')),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)("p",null,"TODO - not even sure if this is appropiate here"))}l.isMDXComponent=!0},207:function(e,t,i){"use strict";i.d(t,"a",(function(){return b})),i.d(t,"b",(function(){return u}));var r=i(0),n=i.n(r);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=n.a.createContext({}),l=function(e){var t=n.a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o({},t,{},e)),i},b=function(e){var t=l(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(i),m=r,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||a;return i?n.a.createElement(u,o({ref:t},s,{components:i})):n.a.createElement(u,o({ref:t},s))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,c=new Array(a);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<a;s++)c[s]=i[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"}}]);