(this["webpackJsonpyoutube-app"]=this["webpackJsonpyoutube-app"]||[]).push([[0],{40:function(e,t,i){},41:function(e,t,i){"use strict";i.r(t);var c=i(0),s=i(2),n=i(14),a=i.n(n),r=i(5),l=i.n(r),d=i(15),u=i(3),o=function(e){var t=e.onSubmit,i=Object(s.useState)(""),n=Object(u.a)(i,2),a=n[0],r=n[1];return Object(c.jsx)("div",{className:"ui segment search-bar mt-4",children:Object(c.jsx)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),""!==a.trim()?t(a):alert("Enter any thing to search")},children:Object(c.jsxs)("div",{className:"field",children:[Object(c.jsx)("label",{children:"Video Search"}),Object(c.jsx)("input",{type:"text",value:a,onChange:function(e){r(e.target.value)}})]})})})},j=i(16),b=i.n(j).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyAs-MvyYgUha22KLH62oJ5X8p1m361DadQ"}}),m=function(e){var t=e.video;if(!t)return Object(c.jsx)("div",{className:"eleven wide column",children:"Please search for any video"});var i="https://www.youtube.com/embed/".concat(t.id);return Object(c.jsxs)("div",{className:"eleven wide column",children:[Object(c.jsx)("div",{className:"ui embed",children:Object(c.jsx)("iframe",{src:i,title:t.snippet.title})}),Object(c.jsxs)("div",{className:"ui segment",children:[Object(c.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(c.jsx)("p",{children:t.snippet.description})]})]})},v=(i(40),function(e){var t=e.onVideoSelect,i=e.video,s=i.snippet;return Object(c.jsxs)("div",{onClick:function(){return t(i)},className:"video-item item",children:[Object(c.jsx)("img",{className:"ui image",src:s.thumbnails.default.url,alt:s.title}),Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("div",{className:"header",children:s.title})})]})}),h=function(e){var t=e.videos,i=e.onVideoSelect,s=t.map((function(e){return Object(c.jsx)(v,{onVideoSelect:i,video:e},e.etag)}));return Object(c.jsx)("div",{className:"five wide column",children:Object(c.jsx)("div",{className:"ui aligned divided list",children:s})})},p=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),i=t[0],n=t[1],a=Object(s.useState)(null),r=Object(u.a)(a,2),j=r[0],v=r[1],p=function(){var e=Object(d.a)(l.a.mark((function e(t){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/search",{params:{q:t}});case 2:i=e.sent,n(i.data.items),v(i.data.items[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"ui container",children:[Object(c.jsx)(o,{onSubmit:p}),Object(c.jsx)("div",{className:"ui grid",children:Object(c.jsxs)("div",{className:"ui row",children:[Object(c.jsx)(m,{video:j}),Object(c.jsx)(h,{onVideoSelect:function(e){v(e)},videos:i})]})})]})})};a.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.bfc0f835.chunk.js.map