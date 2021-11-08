"use strict";(self.webpackChunkzero_2_hero=self.webpackChunkzero_2_hero||[]).push([[1740],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4159:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:5},c="SOLID architecture",s={unversionedId:"solid-clean-architecture/solid-clean-architecture",id:"solid-clean-architecture/solid-clean-architecture",isDocsHomePage:!1,title:"SOLID architecture",description:"SOLID principles determine how functions and data structures are organized in classes and how these classes relate to each other.",source:"@site/docs/solid-clean-architecture/solid-clean-architecture.md",sourceDirName:"solid-clean-architecture",slug:"/solid-clean-architecture/solid-clean-architecture",permalink:"/zero2hero/docs/solid-clean-architecture/solid-clean-architecture",editUrl:"https://github.com/sliit-foss/zero2hero/edit/master/docs/solid-clean-architecture/solid-clean-architecture.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"VS Code",permalink:"/zero2hero/docs/vscode"},next:{title:"Create a Page",permalink:"/zero2hero/docs/tutorial-basics/create-a-page"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"solid-architecture"},"SOLID architecture"),(0,o.kt)("p",null,"SOLID principles determine how functions and data structures are organized in classes and how these classes relate to each other.\nThe purpose of these principles in creating a mid-level software structure is;"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changes to be appropriate"),(0,o.kt)("li",{parentName:"ul"},"Easy to understand"),(0,o.kt)("li",{parentName:"ul"},"Ability to use basic components used in most software systems")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"THE SINGLE RESPONSIBILITY PRINCIPLE (SRP)",(0,o.kt)("br",null),"\nA class/module should have only one responsibility.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"THE OPEN-CLOSED PRINCIPLE (OCR)",(0,o.kt)("br",null),"\nA software artifact should be open for extension but closed for modification.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"THE LISKOV SUBSTITUTION PRINCIPLE (LSP)",(0,o.kt)("br",null),"\nBaseType MUST be replaceable by its subTypes")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"THE INTERFACE SEGREGATION PRINCIPLE (ISP)",(0,o.kt)("br",null),"\nClients should not depend on methods they do not use.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"THE DEPENDENCY INVERSION PRINCIPLE (DIP)",(0,o.kt)("br",null),"\nHigh-level modules should not depend on low-level modules. Both should depend on abstraction."))),(0,o.kt)("h1",{id:"clean-architecture"},"Clean architecture"),(0,o.kt)("p",null,"Clean architecture is yet another one of these architectural styles, though it might be more accurately described as a set of guidelines. Proposed and evangelized by Robert C. Martin, it acts a blueprint for modular systems that strictly adhere to the separation of concerns design principle. The goal of clean architecture is to create layered architectures that are simple, extendable and easy to maintain.  "),(0,o.kt)("p",null,"5 steps to clean architecture\nTo get started implementing clean architecture, follow the points given below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Split your application's code into layers."),(0,o.kt)("li",{parentName:"ul"},"Place abstractions in the inner layers."),(0,o.kt)("li",{parentName:"ul"},"Put implementation in the outer layers."),(0,o.kt)("li",{parentName:"ul"},"Point dependencies inwards."),(0,o.kt)("li",{parentName:"ul"},"Follow test-driven development outside-in.")))}d.isMDXComponent=!0}}]);