(this.webpackJsonpbatalk_frontend_test=this.webpackJsonpbatalk_frontend_test||[]).push([[0],{55:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(10),a=c.n(r),s=c(25),i=c(3),o=c.n(i),u=c(5),l=c(2),d=c(6),j=c(12),b=c.n(j),f="https://api.stackexchange.com",m={items:[],currentTag:""},p=Object(d.b)("tagsSlice/requestTags",function(){var e=Object(u.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(f).concat("/2.3/tags?page=1&pagesize=10&order=desc&sort=popular&site=stackoverflow").concat(t?"&inname=".concat(t):""),e.next=3,b.a.get(c);case 3:return n=e.sent,e.abrupt("return",{items:n.data.items,currentTag:t});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(d.c)({name:"tagSlice",initialState:m,reducers:{},extraReducers:function(e){e.addCase(p.fulfilled,(function(e,t){var c=t.payload,n=c.items,r=c.currentTag;e.items=n,e.currentTag=r})).addCase(p.rejected,(function(e,t){return alert("Request Fail"),m}))}}).reducer,O=c(15),h={items:[],hasmore:!1,currentPage:1},x=Object(d.b)("questionListSlice/requestQuestionList",function(){var e=Object(u.a)(o.a.mark((function e(t){var c,n,r,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.tags,n=t.page,r=t.callByScroll,a="".concat(f).concat("/2.3/questions?pagesize=20&order=desc&sort=activity&site=stackoverflow","&page=").concat(n).concat(c?"&tagged=".concat(c):""),e.next=4,b.a.get(a);case 4:return s=e.sent,e.abrupt("return",{items:s.data.items,hasmore:s.data.has_more,callByScroll:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(d.c)({name:"questionListSlice",initialState:h,reducers:{},extraReducers:function(e){e.addCase(x.fulfilled,(function(e,t){var c=t.payload,n=c.items,r=c.hasmore;c.callByScroll?(e.items=[].concat(Object(O.a)(e.items),Object(O.a)(n)),e.hasmore=r,e.currentPage++):(e.items=n,e.hasmore=r,e.currentPage=1)})).addCase(x.rejected,(function(e,t){return alert("Request Fail"),h}))}}).reducer,N=Object(d.c)({name:"loadingSlice",initialState:!1,reducers:{setLoadingStatus:function(e,t){return t.payload}}}),w=N.actions.setLoadingStatus,y=N.reducer,k=(c(55),c(1));function S(){var e=Object(n.useRef)(),t=Object(l.b)(),c=function(){var c=Object(u.a)(o.a.mark((function c(){var n,r,a;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t(w(!0)),n=e.current.value,c.next=4,t(p(n.trim()));case 4:(r=c.sent)&&(a=r.payload.currentTag,t(x({tags:a,page:1})),t(w(!1)),e.current.value="");case 6:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(k.jsxs)("div",{className:"searching input-group pt-3",children:[Object(k.jsx)("input",{ref:e,type:"text",className:"form-control",placeholder:"Tags"}),Object(k.jsx)("button",{onClick:c,className:"btn search-btn",children:"Search"})]})}c(57);function L(e){var t=Object(l.b)(),c=Object(l.c)((function(e){return e.tags.currentTag})),n=e.children,r=function(){var e=Object(u.a)(o.a.mark((function e(){var c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0)),e.next=3,t(p(n));case 3:(c=e.sent)&&(r=c.payload.currentTag,t(x({tags:r,page:1})),t(w(!1)));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a="tag ".concat(c===n?"tag-active":"");return Object(k.jsx)("button",{onClick:r,className:a,children:n})}function q(e){var t=Object(l.b)(),c=Object(l.c)((function(e){return e.tags.items}));return Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0)),e.next=3,t(p());case 3:e.sent&&t(w(!1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(k.jsxs)("div",{className:"trending pt-2",children:[Object(k.jsx)("h2",{className:"fs-2 text-dark",children:"Trending"}),Object(k.jsx)("div",{className:"tags-sec",children:c.length>0?c.map((function(e){return Object(k.jsx)(L,{children:e.name},e.name)})):""})]})}c(58);function T(e){var t=e.item,c=t.title,n=t.view_count,r=t.answer_count,a=t.is_answered,s=t.score,i=t.link,o=t.owner,u=s<0?"text-danger p-2":"",l=r>0?"text-success border border-3 border-success p-2":"";return a&&(l="text-light bg-success p-2"),Object(k.jsx)("div",{className:"question-item border-bottom border-secondary py-3",children:Object(k.jsxs)("div",{className:"row g-0",children:[Object(k.jsxs)("div",{className:"col-8 col-md-10",children:[Object(k.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:Object(k.jsx)("h5",{className:"fs-3  word-wrap",children:c})}),Object(k.jsxs)("div",{className:"info-board",children:[Object(k.jsxs)("div",{className:"info-board-item",children:[Object(k.jsx)("p",{className:"text-danger",children:"Score"}),Object(k.jsx)("p",{className:u,children:s})]}),Object(k.jsxs)("div",{className:"info-board-item",children:[Object(k.jsx)("p",{className:"text-danger",children:"Answered"}),Object(k.jsx)("p",{className:l,children:r})]}),Object(k.jsxs)("div",{className:"info-board-item",children:[Object(k.jsx)("p",{className:"text-danger",children:"Viewed"}),Object(k.jsx)("p",{className:"p-2",children:n})]})]})]}),Object(k.jsxs)("div",{className:"col-4 col-md-2",children:[Object(k.jsx)("img",{className:"profile-img",src:o.profile_image,alt:"profile-img"}),Object(k.jsx)("h3",{className:"fs-6 text-center word-wrap",children:o.display_name})]})]})})}function _(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.questionList.items})),c=Object(l.c)((function(e){return e.questionList})),r=c.currentPage,a=c.hasmore,s=Object(l.c)((function(e){return e.tags.currentTag}));return Object(n.useEffect)((function(){e(x({tags:"",page:1}))}),[]),Object(k.jsxs)("div",{className:"question-list",children:[t.length>0?t.map((function(e){return Object(k.jsx)(T,{item:e},e.question_id+e.creation_date)})):"",t.length>0?a?Object(k.jsx)("button",{onClick:function(){e(x({tags:s,page:r+1,callByScroll:!0}))},className:"btn btn-sm btn-success d-block w-100",children:"Load More"}):Object(k.jsx)("p",{className:"text-center",children:"No more"}):""]})}c(59);function C(){return Object(k.jsx)("div",{className:"loading w-100 d-flex justify-content-center align-items-center",children:Object(k.jsx)("i",{className:"bi bi-gear fs-3 spinner"})})}c(60);var E=function(){var e=Object(l.c)((function(e){return e.isLoading})),t=Object(n.useState)(!1),c=Object(s.a)(t,2),r=c[0],a=c[1],i=Object(n.useRef)();Object(n.useEffect)((function(){var e=i.current.addEventListener("scroll",o);return function(){i.current.removeEventListener("scroll",e)}}),[]);var o=function(){var e=i.current.scrollTop;a(e>1500)};return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(S,{}),Object(k.jsxs)("div",{ref:i,id:"outputLot",className:"output-lot",children:[Object(k.jsx)(q,{}),Object(k.jsx)(_,{})]})]}),e?Object(k.jsx)(C,{}):"",r?Object(k.jsx)("button",{onClick:function(){i.current.scrollTop=0},className:"express btn",children:Object(k.jsx)("i",{className:"bi bi-arrow-up-circle bg-light fs-1"})}):""]})},R=Object(d.a)({reducer:{questionList:v,tags:g,isLoading:y}});c(61);a.a.render(Object(k.jsx)(l.a,{store:R,children:Object(k.jsx)(E,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.da97645e.chunk.js.map