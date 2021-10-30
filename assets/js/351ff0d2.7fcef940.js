"use strict";(self.webpackChunkzero_2_hero=self.webpackChunkzero_2_hero||[]).push([[475],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7172:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},s=void 0,l={unversionedId:"machine-learning/Projects/Object-Detection/coco-ssd",id:"machine-learning/Projects/Object-Detection/coco-ssd",isDocsHomePage:!1,title:"coco-ssd",description:"TensorFlow is an end-to-end open source platform for machine learning.",source:"@site/docs/machine-learning/Projects/Object-Detection/coco-ssd.mdx",sourceDirName:"machine-learning/Projects/Object-Detection",slug:"/machine-learning/Projects/Object-Detection/coco-ssd",permalink:"/zero2hero/docs/machine-learning/Projects/Object-Detection/coco-ssd",editUrl:"https://github.com/sliit-foss/zero2hero/edit/master/docs/machine-learning/Projects/Object-Detection/coco-ssd.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Language-Translation",permalink:"/zero2hero/docs/machine-learning/Projects/NLP/Language-Translation"},next:{title:"What is Postman?",permalink:"/zero2hero/docs/Postman/Postman"}},d=[{value:"Demo",id:"demo",children:[],level:2},{value:"Object Detection (Classification) App with COCO-SSD + TensorFlow.js + React",id:"object-detection-classification-app-with-coco-ssd--tensorflowjs--react",children:[],level:2},{value:"Setup React App",id:"setup-react-app",children:[],level:2},{value:"Coding",id:"coding",children:[],level:2},{value:"Code Explain",id:"code-explain",children:[{value:"App.js",id:"appjs",children:[],level:3},{value:"drawReact.js",id:"drawreactjs",children:[],level:3}],level:2},{value:"Final",id:"final",children:[],level:2}],p={toc:d};function u(e){var t=e.components,c=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TensorFlow")," is an end-to-end open source platform for machine learning.\nIt has a large, flexible ecosystem of tools, libraries, and community resources that allow researchers to push the boundaries of machine learning and developers to quickly build and deploy ML-powered applications."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TensorFlow.js")," is a JavaScript library for training and deploying models in the browser and on Node.js.\nAnd there is TensorFlow Lite, lightweight library for deploying models on mobile and embedded devices."),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("iframe",{src:"https://timnirmal.github.io/coco-ssd/",width:"100%",height:"600px",id:"myId",className:"myClassname",display:"initial",allow:"camera",position:"relative"}),(0,r.kt)("p",null,"Before moving to further lets get familiar with TensorFlow.js by creating Object Detection App. In next part lets discuss theory parts and train our own object detection model."),(0,r.kt)("h2",{id:"object-detection-classification-app-with-coco-ssd--tensorflowjs--react"},"Object Detection (Classification) App with COCO-SSD + TensorFlow.js + React"),(0,r.kt)("p",null,"For this let's use COCO-SSD, a built-in library provided by TensorFlow.\nCOCO-SSD stands for  Common Objects in Context \u2014 Single Shot multi-box Detection."),(0,r.kt)("p",null,"This model is defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://cocodataset.org/#home"},"COCO dataset"),", which is a large-scale object detection, segmentation, and captioning dataset."),(0,r.kt)("p",null,"This model is capable of detecting ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts"},"80 classes")," of objects and\nis one of the official object detection models ported to tensorflow.js.\nIt can take input as any browser-based image elements (",(0,r.kt)("inlineCode",{parentName:"p"},"<img>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<video>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<canvas>")," elements, for example) and returns an array of bounding boxes with class name and confidence level (Fig 4)."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5243).Z})),(0,r.kt)("p",null,"As the returns we can see that there are bbox, class and score."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bbox")," is number array ","[x, y, width, height]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"class")," is the name of the object (see what we are doing in object classification)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Score")," is the prediction score (value between 0-1)")),(0,r.kt)("h2",{id:"setup-react-app"},"Setup React App"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create react-app coco-ssd\n")),(0,r.kt)("p",null,"Then install these"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tensorflow/tfjs\nyarn add @tensorflow-models/coco-ssd\nyarn add react-webcam\n\nyarn start\n")),(0,r.kt)("p",null,"or you can simply fork this and start. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timnirmal/coco-ssd-begin.git"},"https://github.com/timnirmal/coco-ssd-begin.git")),(0,r.kt)("h2",{id:"coding"},"Coding"),(0,r.kt)("p",null,"You can refer finish code in needed. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/timnirmal/coco-ssd.git"},"https://github.com/timnirmal/coco-ssd.git")),(0,r.kt)("p",null,"In App.js add this code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React, {useEffect, useRef} from "react";\nimport * as tf from "@tensorflow/tfjs";\nimport * as cocossd from "@tensorflow-models/coco-ssd";\nimport Webcam from "react-webcam";\nimport \'./App.css\';\nimport {drawRect} from "./drawReact";\n\n\nfunction App() {\n    const webcamRef = useRef(null);\n    const canvasRef = useRef(null);\n\n    const detectObj = async (net) => {\n        // Check data is available\n        if (typeof webcamRef.current !== "undefined" &&\n            webcamRef.current !== null &&\n            webcamRef.current.video.readyState === 4)\n        {\n            // Set canvas height and width\n            canvasRef.current.width = webcamRef.current.video.videoWidth;\n            canvasRef.current.height = webcamRef.current.video.videoHeight;\n\n            // Make Detections\n            const obj = await net.detect(webcamRef.current.video);\n\n            // Draw Rect\n            const ctx = canvasRef.current.getContext("2d");\n            drawRect(obj, ctx);\n        }\n    };\n\n    const runCoco = async () => {\n        const net = await cocossd.load();\n        console.log("Model loaded.");\n        setInterval( ()=> detectObj(net),10)\n    };\n\n    useEffect(()=>{ runCoco() },[]);\n\n    return (\n        <div className="App">\n            <header className="App-header">\n                Model is Loading please wait...\n                <Webcam\n                    ref={webcamRef}\n                    muted={true}\n                    style={{\n                        position: "absolute",\n                        marginLeft: "auto",\n                        marginRight: "auto",\n                        textAlign: "center",\n                        width: "auto",\n                        height:"auto",\n                    }}\n                />\n\n                <canvas\n                    ref={canvasRef}\n                    style={{\n                        position: "absolute",\n                        marginLeft: "auto",\n                        marginRight: "auto",\n                        textAlign: "center"\n                    }}\n                />\n            </header>\n        </div>\n    );\n}\n\nexport default App;\n')),(0,r.kt)("p",null,"Then create new file named drawReact.js in same directory and paste this code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'export const drawRect = (obj, ctx) =>{\n    // Loop through each prediction\n    obj.forEach( prediction => {\n\n        // Extract boxes and classes\n        const [x, y, width, height] = prediction["bbox"];\n        const text = prediction["class"];\n        const score = prediction["score"];\n\n        //Class & Score\n        console.log(text +"  "+ score.toFixed(4)*100 + "%");\n        //console.log(obj);\n\n        // Set styling\n        const color = Math.floor(score*16000000).toString(16);\n        ctx.strokeStyle = \'#\' + color\n        ctx.font = \'18px Arial\';\n\n        // Draw rectangles and text\n        ctx.beginPath();\n        ctx.fillStyle = \'#\' + color\n        ctx.lineWidth = 1.5;\n        ctx.fillText(text, x, y-10);\n        ctx.strokeRect(x, y, width, height);\n    });\n}\n')),(0,r.kt)("h2",{id:"code-explain"},"Code Explain"),(0,r.kt)("h3",{id:"appjs"},"App.js"),(0,r.kt)("p",null,"In here webcam is used as the source.\nA canvas is used to display the rectangles and Class name."),(0,r.kt)("p",null,"After importing the necessary things object detection function is defined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const obj = await net.detect(webcamRef.current.video);\n")),(0,r.kt)("p",null,"This can be further modified by changing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Image mode (source)"),(0,r.kt)("li",{parentName:"ul"},"Maximum number of objects detected at once (Object with the highest score will be selected)"),(0,r.kt)("li",{parentName:"ul"},"Minimum score needed for output as detected.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const obj = await net.detect(webcamRef.current.video,1,0.9);`\n\n`//detect(img: tf.Tens`or3D | ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, maxNumBoxes?: number, minScore?: number);\n")),(0,r.kt)("p",null,"Next let's draw rectangles with Class names and prediction score.\nThis will call the drawReact.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const ctx = canvasRef.current.getContext("2d");\ndrawRect(obj, ctx);\n')),(0,r.kt)("p",null,"runCoco function is used to load the model and loop the Object Detecting function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const runCoco = async () => {\n    const net = await cocossd.load();\n    console.log("Model loaded.");\n    setInterval( ()=> detectObj(net),10)\n};\n\nuseEffect(()=>{ runCoco() },[]);\n')),(0,r.kt)("p",null,"In return part\nwebCam and Canvas and their properties are defined."),(0,r.kt)("h3",{id:"drawreactjs"},"drawReact.js"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"obj")," is an array of objects (ex: 2 person, 1 cell phone).\nby using ",(0,r.kt)("inlineCode",{parentName:"p"},"forEach")," each object (",(0,r.kt)("inlineCode",{parentName:"p"},"prediction"),") is accessed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"obj.forEach( prediction => {\n")),(0,r.kt)("p",null,"In each object we can get 3 data."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"bbox ","[x, y, width, height]"),(0,r.kt)("li",{parentName:"ul"},"class"),(0,r.kt)("li",{parentName:"ul"},"score")),(0,r.kt)("p",null,"bbox is number array containing ","[x, y, width, height]"," of the object. This is great since we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"strokeRect")," easily,\nclass is string (ex: person, cell phone)\nscore is number, and it is the prediction score (a number between 0 and 1)."),(0,r.kt)("p",null,"we can view the object in console using,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"console.log(obj);\n")),(0,r.kt)("p",null,"and print each object and their prediction score in console using,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'console.log(text +"  "+ score.toFixed(4)*100 + "%");\n')),(0,r.kt)("p",null,"Then,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const color = Math.floor(score*16000000).toString(16);\n")),(0,r.kt)("p",null,"is used to generate random colors just to make fun. You can simply change it with any color you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    ctx.strokeStyle = '#' + color\n    ctx.font = '18px Arial';\n    ctx.fillText(text, x, y-10);\n")),(0,r.kt)("p",null,"This code will set the font colors and display it.\nThe text can be changed with ",(0,r.kt)("inlineCode",{parentName:"p"},'ctx.fillText(text +"  "+ score.toFixed(4)*100 + "%", x, y-10);'),"\nif you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    ctx.beginPath();\n    ctx.fillStyle = '#' + color\n    ctx.lineWidth = 1.5;\n    ctx.strokeRect(x, y, width, height);\n")),(0,r.kt)("p",null,"This code will set the color and line width of the rectangle and display it."),(0,r.kt)("h2",{id:"final"},"Final"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5914).Z})),(0,r.kt)("p",null,"In next part let's discuss Types of machine learning models and the theories behind them with implementing them."))}u.isMDXComponent=!0},5243:function(e,t,n){t.Z=n.p+"assets/images/img_1-03385095f176ed1bcd48e3a408a71dfd.png"},5914:function(e,t,n){t.Z=n.p+"assets/images/img_2-cd39ef1b60249878f781f022cfc462e8.png"}}]);