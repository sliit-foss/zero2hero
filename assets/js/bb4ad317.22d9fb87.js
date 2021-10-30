"use strict";(self.webpackChunkzero_2_hero=self.webpackChunkzero_2_hero||[]).push([[4864],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,s(s({ref:t},l),{},{components:a})):n.createElement(m,s({ref:t},l))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6034:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),s=["components"],i={sidebar_position:1},u="Creating and Using Datasources",c={unversionedId:"AWS/Using Datasources/Using Datasources",id:"AWS/Using Datasources/Using Datasources",isDocsHomePage:!1,title:"Creating and Using Datasources",description:"You can use Amazon ML datasources to train an ML model, evaluate an ML model, and generate batch predictions using an ML model. Datasource objects contain metadata about your input data. When you create a datasource, Amazon ML reads your input data, computes descriptive statistics on its attributes, and stores the statistics, a schema, and other information as part of the datasource object. After you create a datasource, you can use the Amazon ML data insights to explore statistical properties of your input data, and you can use the datasource to train an ML model.",source:"@site/docs/AWS/Using Datasources/Using Datasources.md",sourceDirName:"AWS/Using Datasources",slug:"/AWS/Using Datasources/Using Datasources",permalink:"/zero2hero/docs/AWS/Using Datasources/Using Datasources",editUrl:"https://github.com/sliit-foss/zero2hero/edit/master/docs/AWS/Using Datasources/Using Datasources.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hosting Static Websites on S3",permalink:"/zero2hero/docs/AWS/S3/Static Web Hosting"},next:{title:"Launch MySQL Instance on RDS",permalink:"/zero2hero/docs/AWS/RDS/Create MySQL RDS Instance"}},l=[{value:"1. Understanding the Data Format for Amazon ML",id:"1-understanding-the-data-format-for-amazon-ml",children:[],level:2},{value:"Attributes",id:"attributes",children:[],level:2}],d={toc:l};function p(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-and-using-datasources"},"Creating and Using Datasources"),(0,r.kt)("p",null,"You can use Amazon ML datasources to train an ML model, evaluate an ML model, and generate batch predictions using an ML model. Datasource objects contain metadata about your input data. When you create a datasource, Amazon ML reads your input data, computes descriptive statistics on its attributes, and stores the statistics, a schema, and other information as part of the datasource object. After you create a datasource, you can use the Amazon ML data insights to explore statistical properties of your input data, and you can use the datasource to train an ML model."),(0,r.kt)("h2",{id:"1-understanding-the-data-format-for-amazon-ml"},"1. Understanding the Data Format for Amazon ML"),(0,r.kt)("p",null,"Input data is the data that you use to create a datasource. You must save your input data in the comma-separated values (.csv) format. Each row in the .csv file is a single data record or observation. Each column in the .csv file contains an attribute of the observation. For example, the following figure shows the contents of a .csv file that has four observations, each in its own row. Each observation contains eight attributes, separated by a comma. The attributes represent the following information about each individual represented by an observation: customerId,jobId,education,housing,loan,campaign,duration,willRespondToCampaign."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"Amazon ML requires names for each attribute. You can specify attribute names by:"),(0,r.kt)("p",null,"Including the attribute names in the first line (also known as a header line) of the .csv file that you use as your input data"),(0,r.kt)("p",null,"Including the attribute names in a separate schema file that is located in the same S3 bucket as your input data"),(0,r.kt)("p",null,"For more information about using schema files, see Creating a Data Schema."),(0,r.kt)("p",null,"The following example of a .csv file includes the names of the attributes in the header line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"customerId,jobId,education,housing,loan,campaign,duration,willRespondToCampaign\n\n1,3,basic.4y,no,no,1,261,0\n\n2,1,high.school,no,no,22,149,0\n\n3,1,high.school,yes,no,65,226,1\n\n4,2,basic.6y,no,no,1,151,0\n\n")),(0,r.kt)("p",null,"##Input File Format Requirements\nThe .csv file that contains your input data must meet the following requirements:"),(0,r.kt)("p",null,"Must be in plain text using a character set such as ASCII, Unicode, or EBCDIC."),(0,r.kt)("p",null,"Consist of observations, one observation per line."),(0,r.kt)("p",null,"For each observation, the attribute values must be separated by commas."),(0,r.kt)("p",null,"If an attribute value contains a comma (the delimiter), the entire attribute value must be enclosed in double quotes."),(0,r.kt)("p",null,"Each observation must be terminated with an end-of-line character, which is a special character or sequence of characters indicating the end of a line."),(0,r.kt)("p",null,"Attribute values cannot include end-of-line characters, even if the attribute value is enclosed in double quotes."),(0,r.kt)("p",null,"Every observation must have the same number of attributes and sequence of attributes."),(0,r.kt)("p",null,"Each observation must be no larger than 100 KB. Amazon ML rejects any observation larger than 100 KB during processing. If Amazon ML rejects more than 10,000 observations, it rejects the entire .csv file."),(0,r.kt)("p",null,"##Using Multiple Files As Data Input to Amazon ML"),(0,r.kt)("p",null,"You can provide your input to Amazon ML as a single file, or as a collection of files. Collections must satisfy these conditions:"),(0,r.kt)("p",null,"All files must have the same data schema."),(0,r.kt)("p",null,"All files must reside in the same Amazon Simple Storage Service (Amazon S3) prefix, and the path that you provide for the collection must end with a forward slash ('/') character."),(0,r.kt)("p",null,"For example, if your data files are named input1.csv, input2.csv, and input3.csv, and your S3 bucket name is s3://examplebucket, your file paths might look like this:"),(0,r.kt)("p",null,"s3://examplebucket/path/to/data/input1.csv"),(0,r.kt)("p",null,"s3://examplebucket/path/to/data/input2.csv"),(0,r.kt)("p",null,"s3://examplebucket/path/to/data/input3.csv"),(0,r.kt)("p",null,"You would provide the following S3 location as input to Amazon ML:"),(0,r.kt)("p",null,"'s3://examplebucket/path/to/data/'"),(0,r.kt)("p",null,"##End-of-Line Characters in CSV Format"),(0,r.kt)("p",null,'When you create your .csv file, each observation will be terminated by a special end-of-line character. This character is not visible, but is automatically included at the end of each observation when you press your Enter or Return key. The special character that represents the end-of-line varies depending on your operating system. Unix systems, such as Linux or OS X, use a line feed character that is indicated by "\\n" (ASCII code 10 in decimal or 0x0a in hexadecimal). Microsoft Windows uses two characters called carriage return and line feed that are indicated by "\\r\\n" (ASCII codes 13 and 10 in decimal or 0x0d and 0x0a in hexadecimal).'),(0,r.kt)("p",null,"If you want to use OS X and Microsoft Excel to create your .csv file, perform the following procedure. Be sure to choose the correct format."),(0,r.kt)("p",null,"To save a .csv file if you use OS X and Excel"),(0,r.kt)("p",null,"When saving the .csv file, choose Format, and then choose Windows Comma Separated (.csv)."),(0,r.kt)("p",null,"Choose Save."),(0,r.kt)("p",null,"####Important\nDo not save the .csv file by using the Comma Separated Values (.csv) or MS-DOS Comma Separated (.csv) formats because Amazon ML is unable to read them."))}p.isMDXComponent=!0}}]);