webpackJsonp([28],{378:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),r=l(1),m=function(e){return e&&e.__esModule?e:{default:e}}(r),u=l(10),d="http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/55189630.jpg",o="http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/92456680.jpg",i="http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/94425102.jpg",f="http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/19643068.jpg",E="http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/92330201.jpg",h="http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/14452818.jpg",p="http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/38213335.jpg",b="http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/38181942.jpg",g="http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/40298099.jpg",j="http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/39193365.jpg",N=[d,o,i,f,E,h,p,b,g,j,d,o,i,f,E,h,p,b,g,j,d,o,i,f,E,h,p,b,g,j,d,o,i,f,E,h,p,b,g,j],v=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),s(t,[{key:"handlePreviewWithThumbnails",value:function(){(0,u.ImagePreview)({images:N,thumbnails:N,index:0})}},{key:"handlePreview",value:function(e){(0,u.ImagePreview)({images:N,index:0})}},{key:"handlePreviewSingle",value:function(){(0,u.ImagePreview)({images:["http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/55189630.jpg"],index:0})}},{key:"render",value:function(){return m.default.createElement("div",null,m.default.createElement("button",{className:"btn btn-default gm-marginRight10",onClick:this.handlePreviewWithThumbnails.bind(this)},"带缩略图"),m.default.createElement("button",{className:"btn btn-primary",onClick:this.handlePreview.bind(this)},"不带缩略图"),m.default.createElement("button",{className:"btn btn-default",onClick:this.handlePreviewSingle.bind(this)},"单张图片"))}}]),t}(m.default.Component),w=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={},l}return c(t,e),s(t,[{key:"handleToggleCode",value:function(e){var t={};t["showCode"+e]=!this.state["showCode"+e],this.setState(t)}},{key:"render",value:function(){return m.default.createElement("div",{className:"doc"},m.default.createElement("h2",{id:"imagepreview"},m.default.createElement("a",{className:"header-anchor",href:"#imagepreview","aria-hidden":"true"},"¶")," ImagePreview"),m.default.createElement("p",null,"图片预览"),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example")),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-description"},m.default.createElement("p",null,"以下example依赖的数据")),m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},"    ",m.default.createElement("span",{className:"hljs-keyword"},"const")," demo2 = ",m.default.createElement("span",{className:"hljs-string"},"'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/55189630.jpg'"),";",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"const")," demo3 = ",m.default.createElement("span",{className:"hljs-string"},"'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/92456680.jpg'"),";",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"const")," long = ",m.default.createElement("span",{className:"hljs-string"},"'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/94425102.jpg'"),";",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"const")," node = ",m.default.createElement("span",{className:"hljs-string"},"'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/19643068.jpg'"),";",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"const")," react1 = ",m.default.createElement("span",{className:"hljs-string"},"'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/92330201.jpg'"),";",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"const")," react2 = ",m.default.createElement("span",{className:"hljs-string"},"'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/14452818.jpg'"),";",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"const")," react3 = ",m.default.createElement("span",{className:"hljs-string"},"'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/38213335.jpg'"),";",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"const")," react4 = ",m.default.createElement("span",{className:"hljs-string"},"'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/38181942.jpg'"),";",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"const")," react5 = ",m.default.createElement("span",{className:"hljs-string"},"'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/40298099.jpg'"),";",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"const")," vue = ",m.default.createElement("span",{className:"hljs-string"},"'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/39193365.jpg'"),";",m.default.createElement("br",null),"    ",m.default.createElement("span",{className:"hljs-keyword"},"const")," srcList = [",m.default.createElement("br",null),"        demo2, demo3, long, node, react1, react2, react3, react4, react5, vue,",m.default.createElement("br",null),"        demo2, demo3, long, node, react1, react2, react3, react4, react5, vue,",m.default.createElement("br",null),"        demo2, demo3, long, node, react1, react2, react3, react4, react5, vue,",m.default.createElement("br",null),"        demo2, demo3, long, node, react1, react2, react3, react4, react5, vue",m.default.createElement("br",null),"    ];",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},m.default.createElement("i",null)))),m.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode9?"doc-demo-code-active":"")},m.default.createElement("div",{className:"doc-demo-instance"},m.default.createElement("h4",null,"Example"),m.default.createElement(v,null)),m.default.createElement("div",{className:"doc-demo-meta"},m.default.createElement("div",{className:"doc-demo-description"},m.default.createElement("p",null,"打开模态框后带缩略图")),m.default.createElement("div",{className:"doc-demo-code"},m.default.createElement("pre",null,m.default.createElement("code",{className:"language-js"},m.default.createElement("span",{className:"hljs-class"},m.default.createElement("span",{className:"hljs-keyword"},"class")," ",m.default.createElement("span",{className:"hljs-title"},"ImagePreviewWrap")," ",m.default.createElement("span",{className:"hljs-keyword"},"extends")," ",m.default.createElement("span",{className:"hljs-title"},"React"),".",m.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",m.default.createElement("br",null),"    handlePreviewWithThumbnails() ","{",m.default.createElement("br",null),"        ImagePreview(","{",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"images"),": srcList,",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"thumbnails"),": srcList,",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"index"),": ",m.default.createElement("span",{className:"hljs-number"},"0"),m.default.createElement("br",null),"        ","}",");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"    ",m.default.createElement("br",null),"    handlePreview(index) ","{",m.default.createElement("br",null),"        ImagePreview(","{",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"images"),": srcList,",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"index"),": ",m.default.createElement("span",{className:"hljs-number"},"0"),m.default.createElement("br",null),"        ","}",");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"handlePreviewSingle() ","{",m.default.createElement("br",null),"        ImagePreview(","{",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"images"),": [",m.default.createElement("span",{className:"hljs-string"},"'http://7xlnio.com1.z0.glb.clouddn.com/18-3-9/55189630.jpg'"),"],",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-attr"},"index"),": ",m.default.createElement("span",{className:"hljs-number"},"0"),m.default.createElement("br",null),"        ","}",");",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"render() ","{",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-keyword"},"return")," (",m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"xml"},m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"div"),">"),m.default.createElement("br",null),"               ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"button")," ",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"className"),"=",m.default.createElement("span",{className:"hljs-string"},'"btn btn-default gm-marginRight10"')," ",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",m.default.createElement("span",{className:"hljs-string"},"{","::this.handlePreviewWithThumbnails","}"),m.default.createElement("br",null),"                >"),"带缩略图",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"button"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"button")," ",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"className"),"=",m.default.createElement("span",{className:"hljs-string"},'"btn btn-primary"')," ",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",m.default.createElement("span",{className:"hljs-string"},"{","::this.handlePreview","}"),m.default.createElement("br",null),"                >"),"不带缩略图",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"button"),">"),m.default.createElement("br",null),"                ",m.default.createElement("span",{className:"hljs-tag"},"<",m.default.createElement("span",{className:"hljs-name"},"button")," ",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"className"),"=",m.default.createElement("span",{className:"hljs-string"},'"btn btn-default"')," ",m.default.createElement("br",null),"                    ",m.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",m.default.createElement("span",{className:"hljs-string"},"{","::this.handlePreviewSingle","}"),m.default.createElement("br",null),"                >"),"单张图片",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"button"),">"),m.default.createElement("br",null),"            ",m.default.createElement("span",{className:"hljs-tag"},"</",m.default.createElement("span",{className:"hljs-name"},"div"),">")),m.default.createElement("br",null),"        );",m.default.createElement("br",null),"    ","}",m.default.createElement("br",null),"}",m.default.createElement("br",null))),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-jsx"},"<ImagePreviewWrap />",m.default.createElement("br",null)))),m.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,9)},m.default.createElement("i",null)))),m.default.createElement("h3",{id:"static"},m.default.createElement("a",{className:"header-anchor",href:"#static","aria-hidden":"true"},"¶")," Static"),m.default.createElement("ul",null,m.default.createElement("li",null,m.default.createElement("code",null,"ImagePreview(object|isRequired)"),"   参数详情请看下方")),m.default.createElement("pre",null,m.default.createElement("code",{className:"language-javascript"},"    object = ","{"," ",m.default.createElement("br",null),"        ",m.default.createElement("span",{className:"hljs-attr"},"images"),": (array | isRequired),   ",m.default.createElement("span",{className:"hljs-comment"},"// 原图数组"),m.default.createElement("br",null),"        thumbnails: (array),            ",m.default.createElement("span",{className:"hljs-comment"},"// 缩略图数组"),m.default.createElement("br",null),"        index: (number | isRequired)    ",m.default.createElement("span",{className:"hljs-comment"},"// 当前图片下标"),m.default.createElement("br",null),"    ","}",m.default.createElement("br",null))))}}]),t}(m.default.Component);t.default=w}});
//# sourceMappingURL=28.4d5e411b.bundle.js.map