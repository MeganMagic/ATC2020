(this.webpackJsonpatc2020=this.webpackJsonpatc2020||[]).push([[0],{27:function(e,t,a){var n={"./level2.png":66,"./level3.png":67,"./level4.png":68,"./level5.png":69,"./level6.png":70};function c(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=l,e.exports=c,c.id=27},28:function(e,t,a){},33:function(e,t,a){e.exports=a(79)},38:function(e,t,a){},40:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/logo.d04ae796.png"},46:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/sub-title-line.066ad683.png"},48:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/level2.c148eceb.png"},67:function(e,t,a){e.exports=a.p+"static/media/level3.2eab86c8.png"},68:function(e,t,a){e.exports=a.p+"static/media/level4.be3366ee.png"},69:function(e,t,a){e.exports=a.p+"static/media/level5.441f4487.png"},70:function(e,t,a){e.exports=a.p+"static/media/level6.7d7b62a6.png"},71:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/poster-temp.c5a83a1d.png"},75:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/holder.accbb055.jpeg"},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(29),r=a.n(l),i=a(2),m=a(1),s=(a(38),a(4)),o=a(30),v=a.n(o);a(40);var d=function(e){var t=document.documentElement.clientWidth,n=v.a.debounce((function(){t=document.documentElement.clientWidth,console.log("new width : "+t)}),200);window.onresize=function(e){return n()};var l=t<768?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"item menu"},"="),c.a.createElement("div",{className:"item logo"},"&and"),c.a.createElement("div",{className:"blank"}," "),c.a.createElement("div",{className:"menu-hide"},c.a.createElement("div",{className:"item"},c.a.createElement(i.b,{to:"/introduction"},"\uc18c\uac1c")),c.a.createElement("div",{className:"item"},c.a.createElement(i.b,{to:"/level/7"},"\uad00\ub78c")),c.a.createElement("div",{className:"item"},c.a.createElement(i.b,{to:"/store"},"\uc2a4\ud1a0\uc5b4")),c.a.createElement("div",{className:"item"},c.a.createElement(i.b,{to:"/staffsAndArtists"},"\ub9cc\ub4e0 \uc0ac\ub78c\ub4e4")),c.a.createElement("div",{className:"item"},c.a.createElement("input",{type:"text"}),c.a.createElement("button",null,"\uac80\uc0c9")))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"item logo"},c.a.createElement("img",{className:"img",alt:"logo",src:a(45)})),c.a.createElement("div",{className:"item"},c.a.createElement(i.b,{to:"/introduction"},"\uc18c\uac1c")),c.a.createElement("div",{className:"item"},c.a.createElement(i.b,{to:"/level/7"},"\uad00\ub78c")),c.a.createElement("div",{className:"item"},c.a.createElement(i.b,{to:"/store"},"\uc2a4\ud1a0\uc5b4")),c.a.createElement("div",{className:"item"},c.a.createElement(i.b,{to:"/staffsAndArtists"},"\ub9cc\ub4e0 \uc0ac\ub78c\ub4e4")),c.a.createElement("div",{className:"item search",style:{color:e.color,borderColor:e.color}},c.a.createElement("input",{className:"input",type:"text"}),c.a.createElement("button",{className:"searchBtn"},"\uac80\uc0c9")));return c.a.createElement("div",{className:"gnb",style:{color:e.color,borderColor:e.color}},l)};a(46);var u=function(e){var t=e.title,n=e.desc,l=e.head,r=e.sub,m=e.entrance,s=(e.detailHead,e.detailImg,e.artists,e.imgSrc),o=e.entranceLevel,v=e.entranceID,d=a(47),u=c.a.createElement("li",{className:"item-text item-title"},c.a.createElement("div",{className:"title"},t),c.a.createElement("div",{className:"desc"},n)),E=c.a.createElement("li",{className:"item-text"},c.a.createElement("img",{className:"sub-title-line",src:d,alt:"line"}),c.a.createElement("div",{className:"title"},t),c.a.createElement("div",{className:"desc"},n)),f=c.a.createElement("li",{className:"item-entrance"},c.a.createElement("div",{className:"flex-row-wrapper"},c.a.createElement(i.b,{to:"/level/".concat(o,"/gallery/").concat(v)},c.a.createElement("img",{className:"thumbnail",alt:"thumbnail",src:s})),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"title"},t),c.a.createElement("div",{className:"desc"},n))));return l?u:r?E:m?f:c.a.createElement("li",{className:"item-text item-title"},c.a.createElement("div",{className:"title"},t),c.a.createElement("div",{className:"desc"},n))};a(48);var E=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],r=a[1];return c.a.createElement("div",{className:["navigation",l?"navShow":""].join(" "),style:{color:e.color,borderColor:e.color}},c.a.createElement("div",{className:"title",onClick:function(){r(!l),console.log(l)}},c.a.createElement("div",null,"\uce35\ubcc4\uc548\ub0b4"),c.a.createElement("div",null,l?"\ub2eb\uae30":"\uc5f4\uae30")),c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"floor"},"F6"),c.a.createElement("div",{className:"floor-info"},c.a.createElement("div",{className:"name"},"\uc870\ud654\uc640 \uacbd\uacc4"),c.a.createElement("div",{className:"list"},"\uce58\uc988&   |   \ud22c\uc601   |   \uc774 \uac8c\uc784\uc740 \ucc98\uc74c\ubd80\ud130 \ub0b4\uac00 \uc84c\uc5b4   |   Dreamcatcher   |   \ud654\ud658\uac19\uc544   |   \ub530\ub73b\ud55c \uc774\uae00\ub8e8 \ub9cc\ub4e4\uae30 \ub300\uc791\uc804"))),c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"floor"},"F5"),c.a.createElement("div",{className:"floor-info"},c.a.createElement("div",{className:"name"},"\uc870\ud654\uc640 \uacbd\uacc4"),c.a.createElement("div",{className:"list"},"\uce58\uc988&   |   \ud22c\uc601   |   \uc774 \uac8c\uc784\uc740 \ucc98\uc74c\ubd80\ud130 \ub0b4\uac00 \uc84c\uc5b4   |   Dreamcatcher   |   \ud654\ud658\uac19\uc544   |   \ub530\ub73b\ud55c \uc774\uae00\ub8e8 \ub9cc\ub4e4\uae30 \ub300\uc791\uc804"))),c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"floor"},"F4"),c.a.createElement("div",{className:"floor-info"},c.a.createElement("div",{className:"name"},"\uc870\ud654\uc640 \uacbd\uacc4"),c.a.createElement("div",{className:"list"},"\uce58\uc988&   |   \ud22c\uc601   |   \uc774 \uac8c\uc784\uc740 \ucc98\uc74c\ubd80\ud130 \ub0b4\uac00 \uc84c\uc5b4   |   Dreamcatcher   |   \ud654\ud658\uac19\uc544   |   \ub530\ub73b\ud55c \uc774\uae00\ub8e8 \ub9cc\ub4e4\uae30 \ub300\uc791\uc804"))),c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"floor"},"F3"),c.a.createElement("div",{className:"floor-info"},c.a.createElement("div",{className:"name"},"\uc870\ud654\uc640 \uacbd\uacc4"),c.a.createElement("div",{className:"list"},"\uce58\uc988&   |   \ud22c\uc601   |   \uc774 \uac8c\uc784\uc740 \ucc98\uc74c\ubd80\ud130 \ub0b4\uac00 \uc84c\uc5b4   |   Dreamcatcher   |   \ud654\ud658\uac19\uc544   |   \ub530\ub73b\ud55c \uc774\uae00\ub8e8 \ub9cc\ub4e4\uae30 \ub300\uc791\uc804"))),c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"floor"},"F2"),c.a.createElement("div",{className:"floor-info"},c.a.createElement("div",{className:"name"},"\uc870\ud654\uc640 \uacbd\uacc4"),c.a.createElement("div",{className:"list"},"\uce58\uc988&   |   \ud22c\uc601   |   \uc774 \uac8c\uc784\uc740 \ucc98\uc74c\ubd80\ud130 \ub0b4\uac00 \uc84c\uc5b4   |   Dreamcatcher   |   \ud654\ud658\uac19\uc544   |   \ub530\ub73b\ud55c \uc774\uae00\ub8e8 \ub9cc\ub4e4\uae30 \ub300\uc791\uc804"))),c.a.createElement("div",{className:"item"},c.a.createElement("div",{className:"floor"},"F1"),c.a.createElement("div",{className:"floor-info"},c.a.createElement("div",{className:"name"},"\uc870\ud654\uc640 \uacbd\uacc4"),c.a.createElement("div",{className:"list"},"\uce58\uc988&   |   \ud22c\uc601   |   \uc774 \uac8c\uc784\uc740 \ucc98\uc74c\ubd80\ud130 \ub0b4\uac00 \uc84c\uc5b4   |   Dreamcatcher   |   \ud654\ud658\uac19\uc544   |   \ub530\ub73b\ud55c \uc774\uae00\ub8e8 \ub9cc\ub4e4\uae30 \ub300\uc791\uc804"))))},f=function(){var e=Object(n.useRef)(null);return{ref:e,onWheel:function(t){var a=t.deltaY,n=t.deltaX;Math.abs(a)>Math.abs(n)?e.current.scrollLeft-=.3*a:e.current.scrollLeft+=.5*n}}},g=[function(e,t){return c.a.createElement(n.Fragment,null,c.a.createElement(u,{head:!0,title:e[0][1].v,desc:e[0][2].v}),c.a.createElement(u,{sub:!0,title:e[1][1].v,desc:e[1][2].v}),c.a.createElement(u,{entrance:!0,entranceID:e[2][1].v,entranceLevel:2,title:t[0][1].v,desc:t[0][2].v,imgSrc:t[0][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[3][1].v,entranceLevel:2,title:t[1][1].v,desc:t[1][2].v,imgSrc:t[1][3].v}))},function(e,t){return c.a.createElement(n.Fragment,null,c.a.createElement(u,{head:!0,title:e[0][1].v,desc:e[0][2].v}),c.a.createElement(u,{sub:!0,title:e[1][1].v,desc:e[1][2].v}),c.a.createElement(u,{entrance:!0,entranceID:e[2][1].v,entranceLevel:3,title:t[0][1].v,desc:t[0][2].v,imgSrc:t[0][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[3][1].v,entranceLevel:3,title:t[1][1].v,desc:t[1][2].v,imgSrc:t[1][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[4][1].v,entranceLevel:3,title:t[2][1].v,desc:t[2][2].v,imgSrc:t[2][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[5][1].v,entranceLevel:3,title:t[3][1].v,desc:t[3][2].v,imgSrc:t[3][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[6][1].v,entranceLevel:3,title:t[4][1].v,desc:t[4][2].v,imgSrc:t[4][3].v}))},function(e,t){return c.a.createElement(n.Fragment,null,c.a.createElement(u,{head:!0,title:e[0][1].v,desc:e[0][2].v}),c.a.createElement(u,{sub:!0,title:e[1][1].v,desc:e[1][2].v}),c.a.createElement(u,{entrance:!0,entranceID:e[2][1].v,entranceLevel:4,title:t[0][1].v,desc:t[0][2].v,imgSrc:t[0][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[3][1].v,entranceLevel:4,title:t[1][1].v,desc:t[1][2].v,imgSrc:t[1][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[4][1].v,entranceLevel:4,title:t[2][1].v,desc:t[2][2].v,imgSrc:t[2][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[5][1].v,entranceLevel:4,title:t[3][1].v,desc:t[3][2].v,imgSrc:t[3][3].v}))},function(e,t){return c.a.createElement(n.Fragment,null,c.a.createElement(u,{head:!0,title:e[0][1].v,desc:e[0][2].v}),c.a.createElement(u,{sub:!0,title:e[1][1].v,desc:e[1][2].v}),c.a.createElement(u,{entrance:!0,entranceID:e[2][1].v,entranceLevel:5,title:t[0][1].v,desc:t[0][2].v,imgSrc:t[0][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[3][1].v,entranceLevel:5,title:t[1][1].v,desc:t[1][2].v,imgSrc:t[1][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[4][1].v,entranceLevel:5,title:t[2][1].v,desc:t[2][2].v,imgSrc:t[2][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[5][1].v,entranceLevel:5,title:t[3][1].v,desc:t[3][2].v,imgSrc:t[3][3].v}))},function(e,t){return c.a.createElement(n.Fragment,null,c.a.createElement(u,{head:!0,title:e[0][1].v,desc:e[0][2].v}),c.a.createElement(u,{sub:!0,title:e[1][1].v,desc:e[1][2].v}),c.a.createElement(u,{entrance:!0,entranceID:e[2][1].v,entranceLevel:6,title:t[0][1].v,desc:t[0][2].v,imgSrc:t[0][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[3][1].v,entranceLevel:6,title:t[1][1].v,desc:t[1][2].v,imgSrc:t[1][3].v}),c.a.createElement(u,{sub:!0,title:e[4][1].v,desc:e[4][2].v}),c.a.createElement(u,{entrance:!0,entranceID:e[5][1].v,entranceLevel:6,title:t[2][1].v,desc:t[2][2].v,imgSrc:t[2][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[6][1].v,entranceLevel:6,title:t[3][1].v,desc:t[3][2].v,imgSrc:t[3][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[7][1].v,entranceLevel:6,title:t[4][1].v,desc:t[4][2].v,imgSrc:t[4][3].v}),c.a.createElement(u,{entrance:!0,entranceID:e[8][1].v,entranceLevel:6,title:t[5][1].v,desc:t[5][2].v,imgSrc:t[5][3].v}))}],p=function(e){var t=e.level,a=e.color,l=e.data,r=e.img,i=l.comps,o=l.works,v=Object(n.useState)(),u=Object(s.a)(v,2),p=u[0],N=u[1],b=f(),h=Object(m.f)(),y=Object(n.useRef)();Object(n.useEffect)((function(){console.log("child cdm"),document.body.style.overflow="hidden",N(g[t-2](i,o)),y.current.style.transition="opacity 1s ease-in-out 0s",y.current.style.opacity=1}),[]);var k=t>2?c.a.createElement("li",{onClick:function(){return w("/level/".concat(t-1))}},"move next level"):c.a.createElement("li",{onClick:function(){return w("/level1")}},"move Level 1"),w=function(e){y.current.style.opacity=0,setTimeout((function(){h.push(e)}),1e3)};return c.a.createElement("div",{className:"mainFrame",style:{color:a,opacity:0},ref:y},c.a.createElement("ul",Object.assign({className:"content"},b),c.a.createElement("li",{className:"item-intro"},c.a.createElement("div",{className:"flex-vertical-wrapper"},c.a.createElement("img",{className:"intro-img",alt:i[0][1].v,src:r}))),p,k),c.a.createElement(d,null),c.a.createElement(E,null))},N=a(8),b=a(3),h=a.n(b),y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.a,a=function(e){return JSON.parse(/google\.visualization\.Query\.setResponse\((.*)\);/.exec(e.toString())[1]).table.rows.map((function(e){return e.c}))},c=Object(n.useState)({loading:!0,error:null,comps:null,works:null}),l=Object(s.a)(c,2),r=l[0],i=l[1],m=Object(n.useState)(0),o=Object(s.a)(m,2),v=o[0],d=o[1],u=function(){i(Object(N.a)({},r,{loading:!0})),d(Date.now())};return Object(n.useEffect)((function(){t.all([t.get(e.compsUrl),t.get(e.worksUrl)]).then(t.spread((function(e,t){var n=a(e.data),c=a(t.data);i(Object(N.a)({},r,{loading:!1,comps:n,works:c}))}))).catch((function(e){i(Object(N.a)({},r,{loading:!1,error:e}))}))}),[v]),Object(N.a)({},r,{refetch:u})},k=function(e){return"https://docs.google.com/spreadsheets/d/".concat("1i4DrB3mIM3yF6XUs_5hHO04-TGrbY2HtqUuJomCp-C4","/gviz/tq?tq=SELECT+B%2c+C%2c+D+WHERE+A%3d").concat(e)},w=function(e){return"https://docs.google.com/spreadsheets/d/".concat("1lW9xsfxeghuknmVyrVNrkD9o-E9H4AbYiYy4dQ0aRCI","/gviz/tq?tq=SELECT+B%2c+C%2c+D%2c+H+WHERE+A%3d").concat(e)},D=[null,null,"#161616","#CC6865","#4386B7","#518C31","#C0653E"],S=function(e){var t=e.match.params.level,l=(Object(m.g)(),Object(n.useState)()),r=Object(s.a)(l,2),i=(r[0],r[1],y({compsUrl:k(t),worksUrl:w(t)})),o=i.works,v=i.comps,d=i.loading,u=(i.error,i.refetch);return Object(n.useEffect)((function(){console.log("parent cdm")}),[]),Object(n.useEffect)((function(){console.log("parent cdu"),u()}),[t]),d?(console.log("loading..."),c.a.createElement("div",null,"loading...")):(console.log(v),console.log(o),c.a.createElement(p,{level:t,color:D[t],data:{comps:v,works:o},img:a(27)("./level".concat(t,".png"))}))};a(71);var O=function(e){var t=a(72);return c.a.createElement("div",{id:"home-wrapper"},c.a.createElement("div",{className:"home3"},c.a.createElement("div",{className:"logo"},"ATC2020:AND"),c.a.createElement("div",{className:"line"}),c.a.createElement(i.b,{to:"/level/6"},c.a.createElement("div",{className:"section enter"},c.a.createElement("div",null,"\uad00\ub78c\ud558\uae30"))),c.a.createElement("div",{className:"section gnb3"},c.a.createElement("div",{className:"item"},"ATC2020 \uc18c\uac1c"),c.a.createElement("div",{className:"item"},"STAFF"),c.a.createElement("div",{className:"item"},"ARTISTS"),c.a.createElement("div",{className:"item"},"\uc5f0\ud601")),c.a.createElement("div",{className:"designFrame"},c.a.createElement("img",{src:t}))))};a(16),a(32),a(28),a(12);a(75);var j=function(e,t){var a=JSON.parse(/google\.visualization\.Query\.setResponse\((.*)\);/.exec(e.toString())[1]).table.rows.map((function(e){return e.c}));if("workDetail"===t){var n=[];return a.map((function(e){n.push({type:e[0].v,content1:e[1].v,content2:e[2].v})})),n}if("workInformation"===t){var c=[];return a.map((function(e){c.push({level:e[0].v,title:e[1].v,artist:e[2].v.split("/"),genre:e[3].v,archivingVideoLink:e[4].v,detailDescription:e[5].v})})),c}return a},I=(a(77),[null,null,"#161616","#CC6865","#4386B7","#518C31","#C0653E"]),x=function(e,t){return c.a.createElement("div",{className:"item desc",key:e},t)},L=function(e,t){return c.a.createElement("div",{className:"item image",key:e},c.a.createElement("img",{alt:"detail imgae",src:t}))},C=function(e,t){return c.a.createElement("iframe",{className:"item video",key:e,width:800,height:450,src:t,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},F=function(e,t,a){return c.a.createElement("a",{className:"item link",key:e,href:a,target:"_blank"},c.a.createElement("img",{alt:"link",src:t,key:e}))},A=function(e){var t=e.match.params,a=t.level,l=t.workID,r=I[a],i=function(e){var t="https://docs.google.com/spreadsheets/d/1lW9xsfxeghuknmVyrVNrkD9o-E9H4AbYiYy4dQ0aRCI/gviz/tq?tq=SELECT+A%2c+C%2c+F%2c+G%2c+I%2c+J+WHERE+B%3d%22".concat(e,"%22"),a="https://docs.google.com/spreadsheets/d/1pyAsDTCxzieDew0aZLHhIQpAgG6smwTqhGy3kcvE5n4/gviz/tq?tq=SELECT+B%2c+C%2c+D+WHERE+A%3d%22".concat(e,"%22"),c=Object(n.useState)({loading:!0,error:null,workInfo:{title:null,level:null,artist:[],genre:null,archivingVideoLink:null,detailDescription:null},workDetail:null}),l=Object(s.a)(c,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){h.a.all([h.a.get(t),h.a.get(a)]).then(h.a.spread((function(e,t){var a=j(e.data,"workInformation")[0],n=j(t.data,"workDetail");i(Object(N.a)({},r,{loading:!1,workInfo:a,workDetail:n}))}))).catch((function(e){i(Object(N.a)({},r,{loading:!1,error:e}))}))}),[]),Object(N.a)({},r)}(l),m=i.loading,o=i.error,v=i.workInfo,u=i.workDetail,E=Object(n.useState)([]),f=Object(s.a)(E,2),g=f[0],p=f[1];Object(n.useEffect)((function(){console.log("Gallery cdm"),document.body.style.overflow="auto"}),[]),Object(n.useEffect)((function(){console.log("Gallery cdu (by workDetail)"),u&&p(function(e){var t=[];return e.map((function(e,a){"text"===e.type?t.push(x(a,e.content1)):"image"===e.type?t.push(L(a,e.content1)):"video"===e.type?t.push(C(a,e.content1)):"link"===e.type&&t.push(F(a,e.content1,e.content2))})),t}(u))}),[u]);var b=c.a.createElement("div",{className:"mainFrame",style:{color:r}},c.a.createElement("div",{className:"Gallery"},c.a.createElement("div",{className:"section intro"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"title"},v.title),c.a.createElement("div",{className:"genre"},v.genre),c.a.createElement("iframe",{className:"video",width:800,height:450,src:v.archivingVideoLink,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),c.a.createElement("div",{className:"desc"},v.detailDescription))),c.a.createElement("div",{className:"line",style:{backgroundColor:r}}),c.a.createElement("div",{className:"section detail"},c.a.createElement("div",{className:"title"},c.a.createElement("div",{className:"text"},"\uc791\ud488 \uc0c1\uc138")),c.a.createElement("div",{className:"wrapper"}," ",g," ")),c.a.createElement("div",{className:"line",style:{backgroundColor:r}}),c.a.createElement("div",{className:"section artist"},c.a.createElement("div",{className:"title"},c.a.createElement("div",{className:"text"},"\uc544\ud2f0\uc2a4\ud2b8")),c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"teamName"},"\ubbf8\ub124\ub784 \uc131\uc9c0\uc218"),c.a.createElement("div",{className:"list"},v.artist.map((function(e,t){return a=t,n=e,c.a.createElement("div",{className:"item",key:a},c.a.createElement("div",{className:"profile",style:{backgroundImage:"url(https://i1.sndcdn.com/avatars-000356327339-k426jj-t500x500.jpg)"}}),c.a.createElement("div",{className:"name"},n),c.a.createElement("div",{className:"contact"},"atstaff@sogang.ac.kr"));var a,n}))))),c.a.createElement("div",{className:"goBack"},c.a.createElement("div",{className:"text"},"\ub85c\ube44\ub85c \ub098\uac00\uae30"))),c.a.createElement(d,null));return m?c.a.createElement("div",null,"Loading..."):o?c.a.createElement("div",null,"error!"):(console.log(v),console.log(u),b)},T=function(e){var t=Object(m.f)();Object(n.useEffect)((function(){setTimeout((function(){return t.push("/level/6")}),2e3)}),[]);e.level&&e.level;return c.a.createElement("div",{className:"mainFrame",style:{color:"0000FF"}},c.a.createElement("h1",null,e.level,"\uce35"))};var B=function(){return c.a.createElement(i.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",component:O}),c.a.createElement(m.a,{exact:!0,path:"/level/:level",component:S}),c.a.createElement(m.a,{exact:!0,path:"/loading",component:T}),c.a.createElement(m.a,{exact:!0,path:"/level/:level/gallery/:workID",component:A})))};a(78);r.a.render(c.a.createElement(B,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.849629ca.chunk.js.map