(self.webpackChunkgatsby_course_starter=self.webpackChunkgatsby_course_starter||[]).push([[678],{7565:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),n=a(5444),l=a(8902),c=a(1979),s=a.n(c),i=a(1843).j,m=function(e){var t=e.content,a=e.title;console.log(i);var n=t.map((function(e){return e.node.frontmatter})).sort(i).reduce((function(e,t){return e.length?(e[e.length-1][0].section.split(",")[0]===t.section.split(",")[0]?e[e.length-1].push(t):e.push([t]),e):(e.push([t]),e)}),[]);return r.createElement("div",{className:"main-card"},r.createElement("h1",{className:"lesson-title"},a),r.createElement("div",{className:"lesson-content"},r.createElement("ol",{className:"sections-name"},n.map((function(e){return r.createElement("li",{key:e[0].section},r.createElement("div",{class:"lesson-details"},r.createElement("div",{className:"lesson-preface"},r.createElement("i",{className:"fas fa-"+(e[0].icon?e[0].icon:"dumpster-fire")})),r.createElement("div",{className:"lesson-text"},r.createElement("h3",{className:"lesson-section-title"},e[0].section),r.createElement("ol",null,e.map((function(e){return r.createElement("li",{key:e.path},r.createElement(l.ZP,{to:e.path},e.title))})))),r.createElement("div",{className:"details-bg"},r.createElement(s(),null))))})))))},o=function(){return r.createElement(n.i1,{query:"764929737",render:function(e){return r.createElement("div",{className:"index"},r.createElement("div",{className:"jumbotron"},r.createElement("div",{className:"courseInfo"},r.createElement("div",{className:"courseInfo-inner"},r.createElement("h1",null,e.site.siteMetadata.title),r.createElement("h2",null,e.site.siteMetadata.subtitle),r.createElement("div",{className:"author"},r.createElement("div",{className:"image"},r.createElement("img",{className:"image",src:e.site.siteMetadata.authorImage})),r.createElement("div",{className:"info"},r.createElement("div",{className:"name"},e.site.siteMetadata.author),r.createElement("div",{className:"company"},e.site.siteMetadata.authorSubtitle))))),r.createElement("div",{className:"courseIcon"},r.createElement("img",{src:e.site.siteMetadata.courseImage}))),r.createElement(m,{title:"Table of Contents",content:e.allMarkdownRemark.edges}))}})}},1843:function(e){function t(e){if(!/^\d+[A-Z]+$/.test(e))throw new Error(e+" does not match the section format. It must be <numbers><capital letters>, like 16A or 5F (case sensitive)");return[/^\d+/.exec(e)[0],/[A-Z]+$/.exec(e)[0]]}var a=function(e){return e.split("").map((function(e,t){return e.charCodeAt(0)*Math.pow(10,t)})).reduce((function(e,t){return e+t}))};e.exports.j=function(e,r){var n,l;e.attributes&&e.attributes.order?(n=e.attributes.order,l=r.attributes.order):(n=e.order,l=r.order);var c=t(n),s=c[0],i=c[1],m=t(l),o=m[0],u=m[1];return s!==o?s-o:a(i)-a(u)}},1979:function(e,t,a){var r=a(7294);function n(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},[r.createElement("clipPath",{id:"clip-path",key:0},r.createElement("rect",{id:"Rectangle_2238","data-name":"Rectangle 2238",width:"154",height:"154",transform:"translate(9467 350)",fill:"#fff",stroke:"#707070",strokeWidth:"1"})),r.createElement("clipPath",{id:"clip-corner-image-active",key:1},r.createElement("rect",{width:"154",height:"154"}))]),r.createElement("g",{id:"corner-image-active",clipPath:"url(#clip-corner-image-active)",key:1},r.createElement("g",{id:"Corner-image-active-2","data-name":"Corner-image-active",transform:"translate(-9467 -350)",clipPath:"url(#clip-path)"},r.createElement("path",{id:"Subtraction_34","data-name":"Subtraction 34",d:"M-3857.365,1740.766h0l-7.07-7.07,12.89-12.89v14.142l-5.818,5.818Zm-14.142-14.142h0l-7.071-7.07,27.033-27.033v14.143l-19.96,19.96Zm-14.143-14.143h0l-7.07-7.069,41.175-41.175v14.142Zm-14.142-14.142h0l-7.07-7.069,55.317-55.317v14.142Zm-14.142-14.142h0l-7.07-7.069,69.459-69.459v14.142Zm-14.142-14.142h0l-7.07-7.069,76.739-76.739h6.862v7.28Zm-14.143-14.143h0l-7.07-7.069,62.6-62.6h14.142Zm-14.142-14.142h0l-7.07-7.069,48.454-48.454h14.142Zm-14.142-14.142h0l-7.07-7.069,34.312-34.312h14.142Zm-14.142-14.142h0l-7.07-7.069,20.17-20.17h14.142Zm-14.142-14.142h0l-7.071-7.071,6.027-6.027h14.144l-13.1,13.1Zm367.24-56.114v-.909l.455.455-.453.453Z",transform:"translate(13472.546 -1236.766)",fill:"var(--corner-fill)"})))])}n.defaultProps={width:"154",height:"154",viewBox:"0 0 154 154"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-index-js-4cc1e24832491f806642.js.map