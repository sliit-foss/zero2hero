"use strict";(self.webpackChunkzero_2_hero=self.webpackChunkzero_2_hero||[]).push([[8565],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,d=m["".concat(c,".").concat(g)]||m[g]||p[g]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3348:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:6},c=void 0,s={unversionedId:"machine-learning/Projects/NLP/Language-Translation",id:"machine-learning/Projects/NLP/Language-Translation",isDocsHomePage:!1,title:"Language-Translation",description:"Introduction",source:"@site/docs/machine-learning/Projects/NLP/Language-Translation.md",sourceDirName:"machine-learning/Projects/NLP",slug:"/machine-learning/Projects/NLP/Language-Translation",permalink:"/zero2hero/docs/machine-learning/Projects/NLP/Language-Translation",editUrl:"https://github.com/sliit-foss/zero2hero/edit/master/docs/machine-learning/Projects/NLP/Language-Translation.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"video-to-text",permalink:"/zero2hero/docs/machine-learning/Projects/NLP/video-to-text"},next:{title:"coco-ssd",permalink:"/zero2hero/docs/machine-learning/Projects/Object-Detection/coco-ssd"}},u=[{value:"Introduction",id:"introduction",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this tutorial, we will use IBM Cloud to Language Translation, and then we can convert that to another language."),(0,o.kt)("h1",{id:"code"},"Code"),(0,o.kt)("p",null,"First we need to install the IBM Watson SDK for Python."),(0,o.kt)("p",null,"To do that use,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"!pip install ibm_watson\n\n# import deps\nfrom ibm_watson import LanguageTranslatorV3\nfrom ibm_cloud_sdk_core.authenticators import IAMAuthenticator\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Then we need to goto IBM cloud and get our credentials.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/"},"https://cloud.ibm.com/")," Follow this link and Register first if you don't have."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Then go to manage where the credentials are.")),(0,o.kt)("p",null,"You need to create language translation service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"apikey = ''\nurl = ''\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Let's set up the services")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# Setup service\nauthenticator = IAMAuthenticator(apikey)\nlt = LanguageTranslatorV3(version='2018-05-01', authenticator=authenticator)\nlt.set_service_url(url)\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Let's set up the language translation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"translation = lt.translate(text='I am comming home', model_id='en-de').get_result()\ntranslation\n\ntext = translation['translations'][0]['translation']\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Identify Language")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"language = lt.identify('Wir sinken.').get_result()\n\nlanguage\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Convert to another Language")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"with open('./help.mp3', 'wb') as audio_file:\n    res = tts.synthesize(text, accept='audio/mp3', voice='zh-CN_LiNaVoice').get_result()\n    audio_file.write(res.content)\n")))}m.isMDXComponent=!0}}]);