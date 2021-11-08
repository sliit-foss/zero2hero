"use strict";(self.webpackChunkzero_2_hero=self.webpackChunkzero_2_hero||[]).push([[9047],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5614:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:4},l=void 0,s={unversionedId:"machine-learning/Projects/NLP/stt-using-ibm-cloud",id:"machine-learning/Projects/NLP/stt-using-ibm-cloud",isDocsHomePage:!1,title:"stt-using-ibm-cloud",description:"Introduction",source:"@site/docs/machine-learning/Projects/NLP/stt-using-ibm-cloud.md",sourceDirName:"machine-learning/Projects/NLP",slug:"/machine-learning/Projects/NLP/stt-using-ibm-cloud",permalink:"/zero2hero/docs/machine-learning/Projects/NLP/stt-using-ibm-cloud",editUrl:"https://github.com/sliit-foss/zero2hero/edit/master/docs/machine-learning/Projects/NLP/stt-using-ibm-cloud.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"tts-using-ibm-cloud",permalink:"/zero2hero/docs/machine-learning/Projects/NLP/tts-using-ibm-cloud"},next:{title:"video-to-text",permalink:"/zero2hero/docs/machine-learning/Projects/NLP/video-to-text"}},u=[{value:"Introduction",id:"introduction",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this tutorial, we will use IBM Cloud to convert speech to text.\nBy using IBM Cloud we can get natural voices."),(0,a.kt)("p",null,"In order to get a accurate result this uses  knowledge of grammar, language structure, and the composition of audio and voice signals"),(0,a.kt)("p",null,"This application can be in voice-automated chatbots, analytic tools for customer-service call centers, and multi-media transcription."),(0,a.kt)("p",null,"_**You can view thr cod ein github (tts.ipynb) ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/timnirmal/Text-to-Speech-IBM.git"},"https://github.com/timnirmal/Text-to-Speech-IBM.git")),(0,a.kt)("p",null,"Head to ttts.ipynb to see the code and open in Colab._**"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Available languages:"),"\nBrazilian Portuguese, Chinese (Mandarin dialect), Dutch, English (US and UK dialects), French, German, Italian, Japanese, Korean, Spanish (Argentinian, Castilian, Chilean, Colombian, Mexican, and Peruvian dialects), and Modern Standard Arabic (broadband model only)."),(0,a.kt)("p",null,"You can view more details on ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/catalog/services/speech-to-text#about"},"here")),(0,a.kt)("p",null,"Ok So, now let's start to make the application."),(0,a.kt)("h1",{id:"code"},"Code"),(0,a.kt)("p",null,"First we need to install the IBM Watson SDK for Python."),(0,a.kt)("p",null,"To do that use,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"!pip install ibm_watson\n\nfrom ibm_watson import SpeechToTextV1\nfrom ibm_watson.websocket import RecognizeCallback, AudioSource \nfrom ibm_cloud_sdk_core.authenticators import IAMAuthenticator\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Then we need to goto IBM cloud and get our credentials.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/"},"https://cloud.ibm.com/")," Follow this link and Register first if you don't have."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then go to catalogue and choose Text to Speech (",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/catalog/services/speech-to-text"},"https://cloud.ibm.com/catalog/services/speech-to-text"),")")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then select light plan from that."))),(0,a.kt)("p",null,"This will give 500 minute per month."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Then go to manage where the credentials are.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"URL = 'https://api.au-syd.text-to-speech.watson.cloud.ibm.com/instances/cc144'\nAPIkey = 'ROx'\n")),(0,a.kt)("p",null,"In here I have deleted part of my credentials. So replace '' with your credentials.\n5.\n6. Next we need to setup our service and make new stt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Setup Service\nauthenticator = IAMAuthenticator(APIkey)\n\n# New STT service\ntts = TextToSpeechV1(authenticator=authenticator)\n# Set service URL\ntts.set_service_url(URL)\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Now lets set language model.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"}," # Set model for stt\n model='en-US_NarrowbandModel'\n")),(0,a.kt)("p",null,"You can find more language model from here. (",(0,a.kt)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/speech-to-text?topic=speech-to-text-models"},"https://cloud.ibm.com/docs/speech-to-text?topic=speech-to-text-models"),")"),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Then use this command to write the output audio to the Speech.mp3 file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Perform conversion\nwith open('audio.mp3', 'rb') as aud:\n    getAud = stt.recognize(audio=aud, content_type='audio/mp3', continuous=True).get_result()\n\ngetAud\n\ntext = getAud['results'][0]['alternatives'][0]['transcript']\ntext\n\nwith open('output.txt', 'w') as out:\n    out.writelines(text)\n")))}m.isMDXComponent=!0}}]);