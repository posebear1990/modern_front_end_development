(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return h});var a=n(6),r=n.n(a),i=n(0),o=n.n(i),u=n(146),c=n(156),l=n.n(c),d=n(155),s=n.n(d),p=n(151),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=l()(this,"props.data.site.siteMetadata.title"),t=l()(this,"props.data.allMarkdownRemark.edges")||[];return o.a.createElement(p.a,null,o.a.createElement(s.a,{title:e}),t.map(function(e){if("/404/"!==e.node.path){var t=l()(e,"node.frontmatter.title");return o.a.createElement("div",{key:e.node.fields.slug},o.a.createElement("h3",null,o.a.createElement(u.Link,{to:e.node.fields.slug},t)),o.a.createElement("small",null,e.node.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.node.excerpt}}))}return null}))},t}(o.a.Component);t.default=f;var h="56167969"},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f}),n.d(t,"useStaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(145),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(147),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var s=n(28);n.d(t,"parsePath",function(){return s.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},h=function(e){r.a.useContext;var t=r.a.useContext(p);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},149:function(e){e.exports={data:{site:{siteMetadata:{title:"现代前端开发"}}}}},150:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(46),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,n){"use strict";var a=n(149),r=n(0),i=n.n(r),o=n(146),u=n(148),c=u.a.nav.withConfig({displayName:"NavBar__Nav",componentId:"sc-1dhwud0-0"})(["width:70px;position:absolute;right:-76px;li{list-style:none;margin-bottom:10px;background:#00a0ad;border-radius:0 3px 3px 0;padding:10px 10px;cursor:pointer;:hover{background:#10787c;}a{color:#fff;font-weight:700;:hover{text-decoration:none;}}}"]),l=function(e){var t=e.linkTo,n=e.children;return i.a.createElement("li",null,i.a.createElement(o.Link,{to:t},n))},d=function(){return i.a.createElement(c,null,i.a.createElement(l,{linkTo:"/"},"Home"),i.a.createElement(l,{linkTo:"/daily"},"Daily"),i.a.createElement(l,{linkTo:"/about"},"About"))},s=u.a.h1.withConfig({displayName:"layout__Title",componentId:"sc-1a5c2h5-0"})(["text-align:center;font-size:28px;margin-top:0;margin-bottom:0;padding:15px 0;text-shadow:-1px -1px 0.5px #095053,1px 1px 0.5px #095053,-1px 0px 6px #ccc,1px 0px 6px #ccc,0px 1px 6px #ccc,0px -1px 6px #ccc;letter-spacing:-2px;a{text-decoration:none;box-shadow:none;color:#4ff6ef;}"]),p=u.a.div.withConfig({displayName:"layout__Wrapper",componentId:"sc-1a5c2h5-1"})(["position:relative;margin:0 auto;max-width:900px;width:90%;height:100%;min-height:900px;background:#fff;border-radius:5px;border:6px solid #4ff6ef;padding:20px;"]);t.a=function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"3470870683",render:function(e){return i.a.createElement("div",null,i.a.createElement(s,null,i.a.createElement(o.Link,{to:"/"},e&&e.site.siteMetadata.title)),i.a.createElement(p,null,i.a.createElement(d,null),t))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-daily-js-bd1c9580ed8835f844be.js.map