(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{29:function(e,t,a){e.exports={videos:"video_list_videos__1VCw_"}},37:function(e,t,a){},4:function(e,t,a){e.exports={header:"search_header_header__3zkT2",logo:"search_header_logo__tK0eh",img:"search_header_img__3WZdH",title:"search_header_title__2RdR8",search:"search_header_search__12JjY",input:"search_header_input__3vem-",button:"search_header_button__19_1L",buttonImg:"search_header_buttonImg__3Mukl",icons:"search_header_icons__2K23x",github:"search_header_github__lJAUG",profile:"search_header_profile__1ZfyU"}},5:function(e,t,a){e.exports={container:"video_item_container__15oji",grid:"video_item_grid__2iJDD",list:"video_item_list__2jYRY",video:"video_item_video__37dg9",thumbnail:"video_item_thumbnail__1w2AL",metadata:"video_item_metadata__N-I6a",title:"video_item_title__3lIaP",channel:"video_item_channel__1dZ3U"}},6:function(e,t,a){e.exports={app:"app_app__cewju",content:"app_content__ckDFI",detail:"app_detail__Xmsnl",list:"app_list__2we4s"}},61:function(e,t,a){"use strict";a.r(t);var i=a(2),c=a.n(i),n=a(26),s=a.n(n),r=(a(37),a(15)),o=a(6),l=a.n(o),u=a(4),d=a.n(u),h=a(27),_=a(28),b=a(0),p=Object(i.memo)((function(e){var t=e.onSearch,a=e.onLogoClick,c=Object(i.useRef)(),n=function(){var e=c.current.value;t(e)};return Object(b.jsxs)("header",{className:d.a.header,children:[Object(b.jsxs)("div",{className:d.a.logo,onClick:a,children:[Object(b.jsx)("img",{src:"images/logo.png",alt:"youtube logo",className:d.a.img}),Object(b.jsx)("h1",{className:d.a.title,children:"Youtube"})]}),Object(b.jsxs)("div",{className:d.a.search,children:[Object(b.jsx)("input",{className:d.a.input,ref:c,type:"search",placeholder:"Search",onKeyPress:function(e){"Enter"===e.key&&n()}}),Object(b.jsx)("button",{className:d.a.button,type:"submit",onClick:function(){n()},children:Object(b.jsx)("img",{className:d.a.buttonImg,src:"images/search.png",alt:"search button"})})]}),Object(b.jsxs)("div",{className:d.a.icons,children:[Object(b.jsx)("a",{href:"https://github.com/sookie-c/youtube",target:"blank",children:Object(b.jsx)(h.a,{icon:_.a,className:d.a.github})}),Object(b.jsx)("a",{href:"https://sookie-c.github.io/portfolio/",target:"blank",children:Object(b.jsx)("img",{className:d.a.profile,src:"images/profile.png",alt:"profile"})})]})]})})),j=a(5),m=a.n(j),v=Object(i.memo)((function(e){var t=e.video,a=e.video.snippet,i=e.onVideoClick,c="list"===e.display?m.a.list:m.a.grid;return Object(b.jsx)("li",{className:"".concat(m.a.container," ").concat(c),onClick:function(){return i(t)},children:Object(b.jsxs)("div",{className:"".concat(m.a.video," ").concat(c),children:[Object(b.jsx)("img",{className:"".concat(m.a.thumbnail," ").concat(c),src:a.thumbnails.medium.url,alt:"video thumbnail"}),Object(b.jsxs)("div",{className:m.a.metadata,children:[Object(b.jsx)("p",{className:m.a.title,children:a.title}),Object(b.jsx)("p",{className:m.a.channel,children:a.channelTitle})]})]})})})),f=a(29),O=a.n(f),x=function(e){var t=e.videos,a=e.onVideoClick,i=e.display;return Object(b.jsx)("ul",{className:O.a.videos,children:t.map((function(e){return Object(b.jsx)(v,{video:e,onVideoClick:a,display:i},e.id)}))})},g=a(8),y=a.n(g),N=function(e){var t=e.video,a=e.video.snippet;return Object(b.jsxs)("section",{className:y.a.detail,children:[Object(b.jsx)("iframe",{className:y.a.video,type:"text/html",title:"youtube video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(b.jsx)("h2",{children:a.title}),Object(b.jsx)("div",{className:y.a.bar}),Object(b.jsx)("h3",{children:a.channelTitle}),Object(b.jsx)("pre",{className:y.a.description,children:a.description})]})};var k=function(e){var t=e.youtube,a=Object(i.useState)([]),c=Object(r.a)(a,2),n=c[0],s=c[1],o=Object(i.useState)(null),u=Object(r.a)(o,2),d=u[0],h=u[1],_=Object(i.useCallback)((function(e){t.search(e).then((function(e){s(e),h(null)}))}),[t]);return Object(i.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(b.jsxs)("div",{className:l.a.app,children:[Object(b.jsx)(p,{onSearch:_,onLogoClick:function(){t.mostPopular().then((function(e){s(e),h(null)}))}}),Object(b.jsxs)("section",{className:l.a.content,children:[d&&Object(b.jsx)("div",{className:l.a.detail,children:Object(b.jsx)(N,{video:d})}),Object(b.jsx)("div",{className:l.a.list,children:Object(b.jsx)(x,{videos:n,onVideoClick:function(e){h(e)},display:d?"list":"grid"})})]})]})},w=a(16),C=a(9),S=a.n(C),I=a(14),P=a(30),R=a(31),J=function(){function e(t){Object(P.a)(this,e),this.youtube=t}return Object(R.a)(e,[{key:"mostPopular",value:function(){var e=Object(I.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(I.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),L=a(32),A=new J(a.n(L).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyBBHTpvNg1T34bMPqzLuSvK5-AeSYAwlbM"}}));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{youtube:A})}),document.getElementById("root"))},8:function(e,t,a){e.exports={detail:"video_detail_detail__2BkQh",bar:"video_detail_bar__1lJp1",description:"video_detail_description__3nW_r"}}},[[61,1,2]]]);
//# sourceMappingURL=main.a60906fc.chunk.js.map