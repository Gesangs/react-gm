webpackJsonp([24],{555:function(e,a,t){"use strict";function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function s(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function n(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var r=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),m=t(1),c=function(e){return e&&e.__esModule?e:{default:e}}(m),u=t(22),d=function(e){function a(){return l(this,a),s(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return n(a,e),r(a,[{key:"renderPopup",value:function(){return c.default.createElement("div",{style:{width:"200px",height:"200px"}},c.default.createElement("div",null,"啦啦啦啦啦啦啦啦啦啦啦"),c.default.createElement("div",null,"啦啦啦啦啦啦啦啦啦啦啦"),c.default.createElement("div",null,"啦啦啦"))}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,"三种行为 focus click hover"),c.default.createElement("div",null,c.default.createElement(u.Popover,{popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"focus me default")),c.default.createElement(u.Popover,{type:"click",popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"click me")),c.default.createElement(u.Popover,{showArrow:!0,type:"hover",popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"hover me"))),c.default.createElement("div",null,"各种位置"),c.default.createElement("div",null,c.default.createElement(u.Popover,{popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"focus me(default)")),c.default.createElement(u.Popover,{right:!0,popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"focus me(right)")),c.default.createElement(u.Popover,{center:!0,popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"focus me(center)"))),c.default.createElement("div",null,c.default.createElement(u.Popover,{top:!0,popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"focus me(top)")),c.default.createElement(u.Popover,{right:!0,top:!0,popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"focus me(right top)")),c.default.createElement(u.Popover,{center:!0,top:!0,popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"focus me(center top)"))),c.default.createElement("div",null,"加角标"),c.default.createElement("div",null,c.default.createElement(u.Popover,{showArrow:!0,popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"showArrow")),c.default.createElement(u.Popover,{showArrow:!0,right:!0,popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"showArrow right")),c.default.createElement(u.Popover,{showArrow:!0,arrowLeft:"0px",popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"showArrow arrowLeft 0"))),c.default.createElement("div",null,"disabled"),c.default.createElement("div",null,c.default.createElement(u.Popover,{disabled:!0,popup:this.renderPopup()},c.default.createElement("button",{className:"btn btn-default"},"focus me(disabled)")),c.default.createElement(u.Popover,{popup:this.renderPopup()},c.default.createElement("button",{disabled:!0,className:"btn btn-default"},"focus me(inner disabled)"))))}}]),a}(c.default.Component),p=function(e){function a(e){l(this,a);var t=s(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return n(a,e),r(a,[{key:"handleToggleCode",value:function(e){var a={};a["showCode"+e]=!this.state["showCode"+e],this.setState(a)}},{key:"render",value:function(){return c.default.createElement("div",{className:"doc"},c.default.createElement("h2",{id:"popover"},c.default.createElement("a",{className:"header-anchor",href:"#popover","aria-hidden":"true"},"¶")," Popover"),c.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode3?"doc-demo-code-active":"")},c.default.createElement("div",{className:"doc-demo-instance"},c.default.createElement("h4",null,"Example"),c.default.createElement(d,null)),c.default.createElement("div",{className:"doc-demo-meta"},c.default.createElement("div",{className:"doc-demo-code"},c.default.createElement("pre",null,c.default.createElement("code",{className:"language-js"},c.default.createElement("span",{className:"hljs-class"},c.default.createElement("span",{className:"hljs-keyword"},"class")," ",c.default.createElement("span",{className:"hljs-title"},"PopoverWrap")," ",c.default.createElement("span",{className:"hljs-keyword"},"extends")," ",c.default.createElement("span",{className:"hljs-title"},"React"),".",c.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",c.default.createElement("br",null),"    renderPopup() ","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"return")," (",c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"xml"},c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div")," ",c.default.createElement("span",{className:"hljs-attr"},"style"),"=",c.default.createElement("span",{className:"hljs-string"},"{","{","width:")," '",c.default.createElement("span",{className:"hljs-attr"},"200px"),"', ",c.default.createElement("span",{className:"hljs-attr"},"height:")," '",c.default.createElement("span",{className:"hljs-attr"},"200px"),"'","}","}",">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),"啦啦啦啦啦啦啦啦啦啦啦",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),"啦啦啦啦啦啦啦啦啦啦啦",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),"啦啦啦",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">")),c.default.createElement("br",null),"        );",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"render() ","{",c.default.createElement("br",null),"        ",c.default.createElement("span",{className:"hljs-keyword"},"return")," (",c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"xml"},c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),"三种行为 focus click hover",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"focus me default",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"type"),"=",c.default.createElement("span",{className:"hljs-string"},'"click"')," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"click me",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"showArrow")," ",c.default.createElement("span",{className:"hljs-attr"},"type"),"=",c.default.createElement("span",{className:"hljs-string"},'"hover"')," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"hover me",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),"各种位置",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"focus me(default)",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"right")," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"focus me(right)",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"center")," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"focus me(center)",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"top")," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"focus me(top)",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"right")," ",c.default.createElement("span",{className:"hljs-attr"},"top")," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"focus me(right top)",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"center")," ",c.default.createElement("span",{className:"hljs-attr"},"top")," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"focus me(center top)",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),"加角标",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"showArrow")," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"showArrow",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"showArrow")," ",c.default.createElement("span",{className:"hljs-attr"},"right")," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"showArrow right",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"showArrow")," ",c.default.createElement("span",{className:"hljs-attr"},"arrowLeft"),"=",c.default.createElement("span",{className:"hljs-string"},'"0px"')," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"showArrow arrowLeft 0",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),"disabled",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"disabled")," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"focus me(disabled)",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"Popover")," ",c.default.createElement("span",{className:"hljs-attr"},"popup"),"=",c.default.createElement("span",{className:"hljs-string"},"{","this.renderPopup()","}"),">"),c.default.createElement("br",null),"                        ",c.default.createElement("span",{className:"hljs-tag"},"<",c.default.createElement("span",{className:"hljs-name"},"button")," ",c.default.createElement("span",{className:"hljs-attr"},"disabled")," ",c.default.createElement("span",{className:"hljs-attr"},"className"),"=",c.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),">"),"focus me(inner disabled)",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"button"),">"),c.default.createElement("br",null),"                    ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"Popover"),">"),c.default.createElement("br",null),"                ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">"),c.default.createElement("br",null),"            ",c.default.createElement("span",{className:"hljs-tag"},"</",c.default.createElement("span",{className:"hljs-name"},"div"),">")),c.default.createElement("br",null),"        );",c.default.createElement("br",null),"    ","}",c.default.createElement("br",null),"}",c.default.createElement("br",null))),c.default.createElement("pre",null,c.default.createElement("code",{className:"language-jsx"},"<PopoverWrap/>",c.default.createElement("br",null)))),c.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,3)},c.default.createElement("i",null)))),c.default.createElement("h3",{id:"props"},c.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),c.default.createElement("ul",null,c.default.createElement("li",null,c.default.createElement("code",null,"type (focus|click|hover)")," 三种模式。 默认 ",c.default.createElement("code",null,"focus"),"。 focus 即获得焦点就显示 popup。click 即点击显示 popup 再点击关闭 popup。hover 即 hover 的时候关闭，其中 hover 关闭的时候会延迟 500ms（避免鼠标移到浮层时，在目标和浮层之间的空隙时触发关闭浮层）。"),c.default.createElement("li",null,c.default.createElement("code",null,"popup (node|isRequired)")," 浮层，如果元素有 disabled，则不会触发浮层"),c.default.createElement("li",null,c.default.createElement("code",null,"children (node|isRequired)")," 必须单个元素，非string"),c.default.createElement("li",null,c.default.createElement("code",null,"disabled")," 不会触发浮层，优先级比",c.default.createElement("code",null,"popup"),"的 disabled 高。 建议使用popup disabled属性，因为有disabled样式。"),c.default.createElement("li",null,c.default.createElement("code",null,"center (bool)")," 和目标居中对齐。"),c.default.createElement("li",null,c.default.createElement("code",null,"right (bool)")," 和目标右对齐。"),c.default.createElement("li",null,c.default.createElement("code",null,"top (bool)")," 在目标的上方。 可和 right center 组合用。"),c.default.createElement("li",null,c.default.createElement("code",null,"showArrow"),"  是否显示trigger的三角标")))}}]),a}(c.default.Component);a.default=p}});