__NEXT_REGISTER_CHUNK("posts_2018_08_31_Nested_Comment_Reply_sturcture_with_ReactJS_md_850b839f0ab2b756659a1fbe93ccb9c7",function(){webpackJsonp([7],{271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=n.n(a),o=n(424);n.n(o);t.default=function(e){var t=e.components;!function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}}(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t},"Nested Comment Reply stucture with ReactJS"),r.a.createElement(o.MDXTag,{name:"p",components:t},"by Moondaddi on 2018-08-31"),r.a.createElement(o.MDXTag,{name:"hr",components:t}),r.a.createElement(o.MDXTag,{name:"h2",components:t},"Nested Comment Reply structure?"),r.a.createElement(o.MDXTag,{name:"p",components:t},r.a.createElement(o.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"/static/images/post_img/2018-08-31_nested-structure.jpg",alt:"Nested Comment Structure"}})),r.a.createElement("br",null),r.a.createElement(o.MDXTag,{name:"h2",components:t},"How-to with ReactJS"),r.a.createElement(o.MDXTag,{name:"p",components:t},"It can be resolve with loop structures with ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Comment />")," and ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Comments>")),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"hljs language-javascript",metaString:""}},r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"code",props:{className:"hljs-keyword"}},"const")," Comments = ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"code",props:{className:"hljs-function"}},"(",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-params"}},"{ items, postId, commentId, level, history }"),") =>")," {\n  ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"code",props:{className:"hljs-keyword"}},"if")," (items) {\n    ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"code",props:{className:"hljs-keyword"}},"return")," items.map(",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"code",props:{className:"hljs-function"}},r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-params"}},"item")," =>")," {\n      ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"code",props:{className:"hljs-keyword"}},"if")," (!item.parentComment || level !== ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"code",props:{className:"hljs-number"}},"0"),") {\n        ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"code",props:{className:"hljs-keyword"}},"return")," (\n          ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"code",props:{className:"xml"}},r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-tag"}},"<",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-name"}},"Comment"),"\n            ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-attr"}},"item"),"=",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-string"}},"{item}"),"\n            ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-attr"}},"postId"),"=",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-string"}},"{postId}"),"\n            ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-attr"}},"parentCommentId"),"=",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-string"}},"{commentId}"),"\n            ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-attr"}},"key"),"=",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-string"}},"{item.id}"),"\n            ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-attr"}},"level"),"=",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-string"}},"{level}"),"\n            ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-attr"}},"history"),"=",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-string"}},"{history}"),"\n          />"),"\n        );\n      } else {\n        return null;\n      }\n    });\n  } else {\n    return null;\n  }\n};\n\nclass Comment extends React.Component {\n  render() {\n    return (\n      ",r.a.createElement(o.MDXTag,{name:"span",components:t,parentName:"span",props:{className:"hljs-tag"}},"<>"),"\n        {this.props.item.recomment.length > 0 ? (\n          "),"<Comments\n            items={data.qnaboardcomment}\n            postId={this.props.postId}\n            level={this.props.level + 1}\n            history={this.props.history}\n            commentId={this.props.item.id}\n          />\n        ) : null}\n      </>\n    );\n  }\n}")))}},423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=p(n(1)),o=p(n(426)),s=p(n(157));function p(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.default)({}),l=c.Provider,m=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return r.default.createElement(m,null,function(t){return r.default.createElement(e,a({components:n||t},o))})}};var i=function(e){var t=e.components,n=e.children;return r.default.createElement(l,{value:t},n)};i.propTypes={components:s.default.object.isRequired,children:s.default.element.isRequired},t.default=i},424:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(425);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(423);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},425:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),s=l(o),p=l(n(263)),c=n(423);function l(e){return e&&e.__esModule?e:{default:e}}var m={inlineCode:"code",wrapper:"div"},i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,o=void 0===r?{}:r,c=e.children,l=e.components,i=void 0===l?{}:l,u=e.Layout,f=e.layoutProps,d=i[n+"."+t]||i[t]||m[t]||t;return u?((0,p.default)(this,u),s.default.createElement(u,a({components:i},f),s.default.createElement(d,o,c))):s.default.createElement(d,o,c)}}]),t}();t.default=(0,c.withMDXComponents)(i)},426:function(e,t,n){"use strict";t.__esModule=!0;var a=o(n(1)),r=o(n(427));function o(e){return e&&e.__esModule?e:{default:e}}t.default=a.default.createContext||r.default,e.exports=t.default},427:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1),r=(s(a),s(n(157))),o=s(n(428));s(n(429));function s(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=1073741823;t.default=function(e,t){var n,s,i="__create-react-context-"+(0,o.default)()+"__",u=function(e){function n(){var t,a,r,o;p(this,n);for(var s=arguments.length,l=Array(s),m=0;m<s;m++)l[m]=arguments[m];return t=a=c(this,e.call.apply(e,[this].concat(l))),a.emitter=(r=a.props.value,o=[],{on:function(e){o.push(e)},off:function(e){o=o.filter(function(t){return t!==e})},get:function(){return r},set:function(e,t){r=e,o.forEach(function(e){return e(r,t)})}}),c(a,t)}return l(n,e),n.prototype.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,a=e.value,r=void 0;((o=n)===(s=a)?0!==o||1/o==1/s:o!=o&&s!=s)?r=0:(r="function"==typeof t?t(n,a):m,0!=(r|=0)&&this.emitter.set(e.value,r))}var o,s},n.prototype.render=function(){return this.props.children},n}(a.Component);u.childContextTypes=((n={})[i]=r.default.object.isRequired,n);var f=function(t){function n(){var e,a;p(this,n);for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];return e=a=c(this,t.call.apply(t,[this].concat(o))),a.state={value:a.getValue()},a.onUpdate=function(e,t){0!=((0|a.observedBits)&t)&&a.setState({value:a.getValue()})},c(a,e)}return l(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?m:t},n.prototype.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?m:e},n.prototype.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[i]?this.context[i].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(a.Component);return f.contextTypes=((s={})[i]=r.default.object,s),{Provider:u,Consumer:f}},e.exports=t.default},428:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(t,n(261))},429:function(e,t,n){"use strict";var a=n(262);e.exports=a}})});