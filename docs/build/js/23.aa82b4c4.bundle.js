webpackJsonp([23],{375:function(e,l,t){"use strict";function a(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function n(e,l){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!l||"object"!=typeof l&&"function"!=typeof l?e:l}function r(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function, not "+typeof l);e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(e,l):e.__proto__=l)}Object.defineProperty(l,"__esModule",{value:!0});var d=function(){function e(e,l){for(var t=0;t<l.length;t++){var a=l[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(l,t,a){return t&&e(l.prototype,t),a&&e(l,a),l}}(),s=t(1),u=function(e){return e&&e.__esModule?e:{default:e}}(s),c=t(8),m=function(e){function l(e){a(this,l);var t=n(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={show:!1},t}return r(l,e),d(l,[{key:"handleModal",value:function(){this.setState({show:!this.state.show})}},{key:"handleModalStatic",value:function(){c.Modal.render({children:"我是内容",title:"我是标题",onHide:c.Modal.hide})}},{key:"handleModalRemove",value:function(){c.Modal.render({children:"我是内容",title:"我是标题",onHide:c.Modal.hide}),setTimeout(function(){c.Modal.hide()},2e3)}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("button",{className:"btn btn-default gm-marginRight10",onClick:this.handleModal.bind(this)},"component 形式(少用)"),u.default.createElement("button",{className:"btn btn-primary",onClick:this.handleModalStatic.bind(this)},"静态方法形式 + title"),u.default.createElement("button",{className:"btn btn-default",onClick:this.handleModalRemove.bind(this)},"静态方法形式 + 2s关闭"),u.default.createElement(c.Modal,{show:this.state.show,onHide:this.handleModal.bind(this)},"我是内容"))}}]),l}(u.default.Component),f=function(e){function l(e){a(this,l);var t=n(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={show:!1},t}return r(l,e),d(l,[{key:"handleModal",value:function(e,l){c.Modal.render({children:"我是内容",title:"我是标题",size:e,style:l,onHide:c.Modal.hide})}},{key:"handleBigModal",value:function(){c.Modal.render({children:u.default.createElement("div",null,u.default.createElement(c.DatePicker,{date:new Date}),u.default.createElement("div",{style:{height:"800px",background:"red"}},"我是内容"),u.default.createElement(c.DatePicker,{date:new Date}),u.default.createElement("div",{style:{height:"400px",background:"red"}},"我是内容")),title:"我是标题",onHide:c.Modal.hide})}},{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("button",{className:"btn btn-default",onClick:this.handleModal.bind(this,"lg",{})},"lg"),u.default.createElement("button",{className:"btn btn-primary",onClick:this.handleModal.bind(this,"md",{})},"默认 md"),u.default.createElement("button",{className:"btn btn-default",onClick:this.handleModal.bind(this,"sm",{})},"sm"),u.default.createElement("button",{className:"btn btn-default",onClick:this.handleModal.bind(this,"sm",{width:"750px"})},"固定750宽"),u.default.createElement("button",{className:"btn btn-default",onClick:this.handleBigModal},"内容很大"))}}]),l}(u.default.Component),o=function(e){function l(){return a(this,l),n(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return r(l,e),d(l,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("button",{className:"btn btn-default",onClick:function(){return c.Modal.render({children:u.default.createElement("div",null,"示例示例",u.default.createElement("br",null),"滴滴滴"),title:"content没padding的modal",onHide:c.Modal.hide,noContentPadding:!0,style:{width:"600px"}})}},"noContentPadding Modal"),u.default.createElement("button",{className:"btn btn-default",onClick:function(){c.Modal.render({children:u.default.createElement("div",null,"示例示例",u.default.createElement("br",null),"滴滴滴"),title:"content没padding的modal",onHide:c.Modal.hide,opacityMask:!0,style:{width:"600px"}})}},"没有遮罩 mask"))}}]),l}(u.default.Component),E=function(e){function l(e){a(this,l);var t=n(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t.state={},t}return r(l,e),d(l,[{key:"handleToggleCode",value:function(e){var l={};l["showCode"+e]=!this.state["showCode"+e],this.setState(l)}},{key:"render",value:function(){return u.default.createElement("div",{className:"doc"},u.default.createElement("h2",{id:"modal"},u.default.createElement("a",{className:"header-anchor",href:"#modal","aria-hidden":"true"},"¶")," Modal"),u.default.createElement("p",null,"模态框，出Modal浮层.  高阶Modal组件:",u.default.createElement("a",{href:"#/doc/RightSideAndCleanModal"},"RightSideModal")," ,",u.default.createElement("a",{href:"#/doc/RightSideAndCleanModal"},"CleanModal")),u.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},u.default.createElement("div",{className:"doc-demo-instance"},u.default.createElement("h4",null,"Example"),u.default.createElement(m,null)),u.default.createElement("div",{className:"doc-demo-meta"},u.default.createElement("div",{className:"doc-demo-code"},u.default.createElement("pre",null,u.default.createElement("code",{className:"language-js"},u.default.createElement("span",{className:"hljs-class"},u.default.createElement("span",{className:"hljs-keyword"},"class")," ",u.default.createElement("span",{className:"hljs-title"},"ModalWrap")," ",u.default.createElement("span",{className:"hljs-keyword"},"extends")," ",u.default.createElement("span",{className:"hljs-title"},"React"),".",u.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",u.default.createElement("br",null),"    ",u.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"show"),": ",u.default.createElement("span",{className:"hljs-literal"},"false"),u.default.createElement("br",null),"        ","}",";",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"    ",u.default.createElement("br",null),"    handleModal()","{",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"this"),".setState(","{",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"show"),": !",u.default.createElement("span",{className:"hljs-keyword"},"this"),".state.show",u.default.createElement("br",null),"        ","}",");",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"    ",u.default.createElement("br",null),"    handleModalStatic()","{",u.default.createElement("br",null),"        Modal.render(","{",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"children"),": ",u.default.createElement("span",{className:"hljs-string"},"'我是内容'"),",",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"title"),": ",u.default.createElement("span",{className:"hljs-string"},"'我是标题'"),",",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"onHide"),": Modal.hide",u.default.createElement("br",null),"        ","}",");",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"    ",u.default.createElement("br",null),"    handleModalRemove()","{",u.default.createElement("br",null),"        Modal.render(","{",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"children"),": ",u.default.createElement("span",{className:"hljs-string"},"'我是内容'"),",",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"title"),": ",u.default.createElement("span",{className:"hljs-string"},"'我是标题'"),",",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"onHide"),": Modal.hide",u.default.createElement("br",null),"        ","}",");",u.default.createElement("br",null),"        setTimeout(",u.default.createElement("span",{className:"hljs-function"},u.default.createElement("span",{className:"hljs-params"},"()")," =>")," ","{","Modal.hide()","}",", ",u.default.createElement("span",{className:"hljs-number"},"2000"),");",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"    ",u.default.createElement("br",null),"    render() ","{",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"return")," (",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"xml"},u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"div"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"button")," ",u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"className"),"=",u.default.createElement("span",{className:"hljs-string"},'"btn btn-default gm-marginRight10"')," ",u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",u.default.createElement("span",{className:"hljs-string"},"{","::this.handleModal","}"),u.default.createElement("br",null),"                >"),"component 形式(少用)",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"button"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"button")," ",u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"className"),"=",u.default.createElement("span",{className:"hljs-string"},'"btn btn-primary"')," ",u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",u.default.createElement("span",{className:"hljs-string"},"{","::this.handleModalStatic","}"),u.default.createElement("br",null),"                >"),"静态方法形式 + title",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"button"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"button")," ",u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"className"),"=",u.default.createElement("span",{className:"hljs-string"},'"btn btn-default"')," ",u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",u.default.createElement("span",{className:"hljs-string"},"{","::this.handleModalRemove","}"),u.default.createElement("br",null),"                >"),"静态方法形式 + 2s关闭",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"button"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"Modal"),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"show"),"=",u.default.createElement("span",{className:"hljs-string"},"{","this.state.show","}"),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"onHide"),"=",u.default.createElement("span",{className:"hljs-string"},"{","::this.handleModal","}"),u.default.createElement("br",null),"                >"),u.default.createElement("br",null),"                    我是内容",u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"Modal"),">"),u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"div"),">")),u.default.createElement("br",null),"        );",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"}",u.default.createElement("br",null))),u.default.createElement("pre",null,u.default.createElement("code",{className:"language-jsx"},"<ModalWrap/>",u.default.createElement("br",null)))),u.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},u.default.createElement("i",null)))),u.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode10?"doc-demo-code-active":"")},u.default.createElement("div",{className:"doc-demo-instance"},u.default.createElement("h4",null,"Example"),u.default.createElement(f,null)),u.default.createElement("div",{className:"doc-demo-meta"},u.default.createElement("div",{className:"doc-demo-description"},u.default.createElement("p",null,"各种尺寸")),u.default.createElement("div",{className:"doc-demo-code"},u.default.createElement("pre",null,u.default.createElement("code",{className:"language-js"},u.default.createElement("span",{className:"hljs-class"},u.default.createElement("span",{className:"hljs-keyword"},"class")," ",u.default.createElement("span",{className:"hljs-title"},"ModalWrap2")," ",u.default.createElement("span",{className:"hljs-keyword"},"extends")," ",u.default.createElement("span",{className:"hljs-title"},"React"),".",u.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",u.default.createElement("br",null),"    ",u.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props) ","{",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"show"),": ",u.default.createElement("span",{className:"hljs-literal"},"false"),u.default.createElement("br",null),"        ","}",";",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"    ",u.default.createElement("br",null),"    handleModal(size, style)","{",u.default.createElement("br",null),"        Modal.render(","{",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"children"),": ",u.default.createElement("span",{className:"hljs-string"},"'我是内容'"),",",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"title"),": ",u.default.createElement("span",{className:"hljs-string"},"'我是标题'"),",",u.default.createElement("br",null),"            size,",u.default.createElement("br",null),"            style,",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"onHide"),": Modal.hide",u.default.createElement("br",null),"        ","}",");",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"    ",u.default.createElement("br",null),"    handleBigModal()","{",u.default.createElement("br",null),"        Modal.render(","{",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"children"),": (",u.default.createElement("br",null),"                <div>",u.default.createElement("br",null),"                <DatePicker date=","{","new Date","}"," />",u.default.createElement("br",null),"                <div style=","{","{","height: '800px', background: 'red'","}","}",">我是内容</div>",u.default.createElement("br",null),"                <DatePicker date=","{","new Date","}"," />",u.default.createElement("br",null),"                <div style=","{","{","height: '400px', background: 'red'","}","}",">我是内容</div>",u.default.createElement("br",null),"                </div>",u.default.createElement("br",null),"            ),",u.default.createElement("br",null),"            title: '我是标题',",u.default.createElement("br",null),"            onHide: Modal.hide",u.default.createElement("br",null),"        ","}",");",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"    ",u.default.createElement("br",null),"    render() ","{",u.default.createElement("br",null),"        return (",u.default.createElement("br",null),"            <div>",u.default.createElement("br",null),"                <button ",u.default.createElement("br",null),'                    className="btn btn-default" ',u.default.createElement("br",null),"                    onClick=","{","this.handleModal.bind(this, 'lg', ","{","}",")","}",u.default.createElement("br",null),"                >lg</button>",u.default.createElement("br",null),"                <button ",u.default.createElement("br",null),'                    className="btn btn-primary" ',u.default.createElement("br",null),"                    onClick=","{","this.handleModal.bind(this, 'md', ","{","}",")","}",u.default.createElement("br",null),"                >默认 md</button>",u.default.createElement("br",null),"                <button ",u.default.createElement("br",null),'                    className="btn btn-default" ',u.default.createElement("br",null),"                    onClick=","{","this.handleModal.bind(this, 'sm', ","{","}",")","}",u.default.createElement("br",null),"                >sm</button>",u.default.createElement("br",null),"                <button",u.default.createElement("br",null),'                    className="btn btn-default"',u.default.createElement("br",null),"                    onClick=","{","this.handleModal.bind(this, 'sm', ","{","width: '750px'","}",")","}",u.default.createElement("br",null),"                >固定750宽</button>",u.default.createElement("br",null),"                <button ",u.default.createElement("br",null),'                    className="btn btn-default" ',u.default.createElement("br",null),"                    onClick=","{","this.handleBigModal","}",u.default.createElement("br",null),"                >内容很大</button>",u.default.createElement("br",null),"            </div>",u.default.createElement("br",null),"        );",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"}",u.default.createElement("br",null))),u.default.createElement("pre",null,u.default.createElement("code",{className:"language-jsx"},"<ModalWrap2/>",u.default.createElement("br",null)))),u.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,10)},u.default.createElement("i",null)))),u.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode14?"doc-demo-code-active":"")},u.default.createElement("div",{className:"doc-demo-instance"},u.default.createElement("h4",null,"Example"),u.default.createElement(o,null)),u.default.createElement("div",{className:"doc-demo-meta"},u.default.createElement("div",{className:"doc-demo-description"},u.default.createElement("p",null,"其他形态")),u.default.createElement("div",{className:"doc-demo-code"},u.default.createElement("pre",null,u.default.createElement("code",{className:"language-js"},u.default.createElement("span",{className:"hljs-class"},u.default.createElement("span",{className:"hljs-keyword"},"class")," ",u.default.createElement("span",{className:"hljs-title"},"ModalWrap6")," ",u.default.createElement("span",{className:"hljs-keyword"},"extends")," ",u.default.createElement("span",{className:"hljs-title"},"React"),".",u.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",u.default.createElement("br",null),"    render() ","{",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"return")," (",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"xml"},u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"div"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"button"),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"className"),"=",u.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",u.default.createElement("span",{className:"hljs-string"},"{","()")," =>")," Modal.render(","{",u.default.createElement("br",null),"                       children: ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"div"),">"),"示例示例",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"滴滴滴",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"div"),">"),",",u.default.createElement("br",null),"                       title: 'content没padding的modal',",u.default.createElement("br",null),"                       onHide: Modal.hide,",u.default.createElement("br",null),"                       noContentPadding: true,",u.default.createElement("br",null),"                       style: ","{",u.default.createElement("br",null),"                           width: '600px'",u.default.createElement("br",null),"                       ","}",u.default.createElement("br",null),"                   ","}",")","}",u.default.createElement("br",null),"                >noContentPadding Modal",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"button"),">"),u.default.createElement("br",null),"                ",u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"button"),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"className"),"=",u.default.createElement("span",{className:"hljs-string"},'"btn btn-default"'),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"onClick"),"=",u.default.createElement("span",{className:"hljs-string"},"{","()")," =>")," ","{",u.default.createElement("br",null),"                        Modal.render(","{",u.default.createElement("br",null),"                            children: ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"div"),">"),"示例示例",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"br"),"/>"),"滴滴滴",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"div"),">"),",",u.default.createElement("br",null),"                            title: 'content没padding的modal',",u.default.createElement("br",null),"                            onHide: Modal.hide,",u.default.createElement("br",null),"                            opacityMask: true,",u.default.createElement("br",null),"                            style: ","{",u.default.createElement("br",null),"                                width: '600px'",u.default.createElement("br",null),"                            ","}",u.default.createElement("br",null),"                        ","}",");",u.default.createElement("br",null),"                    ","}","}",u.default.createElement("br",null),"                >没有遮罩 mask",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"button"),">"),u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"div"),">")),u.default.createElement("br",null),"        );",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"}",u.default.createElement("br",null))),u.default.createElement("pre",null,u.default.createElement("code",{className:"language-jsx"},"<ModalWrap6/>",u.default.createElement("br",null)))),u.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,14)},u.default.createElement("i",null)))),u.default.createElement("h3",{id:"props"},u.default.createElement("a",{className:"header-anchor",href:"#props","aria-hidden":"true"},"¶")," Props"),u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("code",null,"show (bool|isRequired)")," 是否显示"),u.default.createElement("li",null,u.default.createElement("code",null,"disableMaskClose (bool)")," 是否启用点击mask关闭modal"),u.default.createElement("li",null,u.default.createElement("code",null,"onHide (func)")," 隐藏触发回调"),u.default.createElement("li",null,u.default.createElement("code",null,"size (string ['lg', 'md', 'sm'])")," modal尺寸，默认md"),u.default.createElement("li",null,u.default.createElement("code",null,"title (string)")," 标题"),u.default.createElement("li",null,u.default.createElement("code",null,"children")," 模态框里面的内容"),u.default.createElement("li",null,u.default.createElement("code",null,"noContentPadding")," 内容没有padding"),u.default.createElement("li",null,u.default.createElement("code",null,"noCloseBtn(bool)")," 关闭按钮"),u.default.createElement("li",null,u.default.createElement("code",null,"style (object)"))),u.default.createElement("h3",{id:"static"},u.default.createElement("a",{className:"header-anchor",href:"#static","aria-hidden":"true"},"¶")," Static"),u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("code",null,"render(props)")),u.default.createElement("li",null,u.default.createElement("code",null,"confirm(props)")),u.default.createElement("li",null,u.default.createElement("code",null,"success(props)")),u.default.createElement("li",null,u.default.createElement("code",null,"info(props)")),u.default.createElement("li",null,u.default.createElement("code",null,"warning(props)")),u.default.createElement("li",null,u.default.createElement("code",null,"hide()"))))}}]),l}(u.default.Component);l.default=E}});
//# sourceMappingURL=23.aa82b4c4.bundle.js.map