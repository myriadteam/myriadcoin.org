(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Alt4:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI");function o(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}},dgDK:function(e,t,a){"use strict";a.r(t);var n=a("vOnD"),o=a("q1tI"),r=a.n(o),i=a("9Koi"),c=a("vrFN"),d=a("vXdd"),s=a("o0o1"),l=a.n(s),p=(a("ls82"),a("HaE+")),m=a("Erpl"),b=a("UXee"),u=a("j23k"),g=a("qKvR");function f(e){var t=e.theme,a=Object(o.useState)(null),n=a[0],r=a[1],i=Object(o.useState)(u.a),c=i[0],d=i[1],s=Object(o.useState)(!0),f=s[0],y=s[1],h=u.b[c],j=Object(b.a)({data:n,group:c,yValueOptions:{suffix:" blocks"}}),O=j.renderXAxis,v=j.renderXValue,_=j.renderYAxis,x=j.renderYValue,w=j.renderKeyValue;return Object(o.useEffect)((function(){(function(){var e=Object(p.a)(l.a.mark((function e(){var t,a,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,Promise.all([fetch("https://xmy-history.coinid.org/processeddata/blocks/"+h+".json").then((function(e){return e.json()})),fetch("https://xmy-history.coinid.org/processeddata/algoBlocks/"+h+".json").then((function(e){return e.json()}))]);case 3:t=e.sent,a=t[0],n=t[1],o=a.map((function(e,t){return Object.assign({x:t,y:e},n[t])})),r(o),y(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]),Object(g.a)(m.a,{title:"",group:c,loading:f,data:n,startY:0,renderXAxis:O,renderYAxis:_,renderXValue:v,renderYValue:x,renderKeyValue:w,keyNames:u.j,stackedKeys:Object.keys(u.j),stackColors:u.h,onChangeGroup:d,theme:t})}var y=r.a.memo(f);function h(e){var t=e.theme,a=Object(o.useState)(null),n=a[0],r=a[1],i=Object(o.useState)(u.a),c=i[0],d=i[1],s=Object(o.useState)(!0),l=s[0],p=s[1],f=u.b[c],y=Object(b.a)({data:n,group:c,yValueOptions:{suffix:" transactions"}}),h=y.renderXAxis,j=y.renderXValue,O=y.renderYAxis,v=y.renderYValue;return Object(o.useEffect)((function(){p(!0),fetch("https://xmy-history.coinid.org/processeddata/transactions/"+f+".json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e,t){return{x:t,y:e}}));r(t),p(!1)}))}),[f]),Object(g.a)(m.a,{loading:l,group:c,data:n,startY:0,renderXAxis:h,renderYAxis:O,renderXValue:j,renderYValue:v,barPlotKeys:["y"],barPlotColors:["#0066FF"],onChangeGroup:d,theme:t})}var j=r.a.memo(h),O={};function v(e){var t=e.algo,a=void 0===t?0:t,n=e.scale,r=void 0===n?1:n,i=e.theme,c=Object(o.useState)(null),d=c[0],s=c[1],l=Object(o.useState)(u.a),p=l[0],f=l[1],y=Object(o.useState)(!0),h=y[0],j=y[1],v=u.b[p],_=Object(b.a)({data:d,group:p,scale:r,yValueOptions:{shorten:{precision:2}}}),x=_.renderXAxis,w=_.renderXValue,C=_.renderYAxis,k=_.renderYValue;return Object(o.useEffect)((function(){j(!0);var e="https://xmy-history.coinid.org/processeddata/difficulty/"+v+".json";if(O[e]){var t=O[e].map((function(e,t){return{x:t,y:e[a]/r}}));s(t),j(!1)}else fetch(e).then((function(e){return e.json()})).then((function(t){O[e]=t;var n=t.map((function(e,t){return{x:t,y:e[a]/r}}));s(n),j(!1)}))}),[a,v,r]),Object(g.a)(m.a,{loading:h,group:p,data:d,startY:0,renderXAxis:x,renderYAxis:C,renderXValue:w,renderYValue:k,barPlotKeys:["y"],barPlotColors:[u.h[a]],onChangeGroup:f,theme:i})}var _=r.a.memo(v),x={};function w(e){var t=e.algo,a=void 0===t?0:t,n=e.scale,r=void 0===n?1:n,i=e.theme,c=Object(o.useState)(null),d=c[0],s=c[1],l=Object(o.useState)(u.a),p=l[0],f=l[1],y=Object(o.useState)(!0),h=y[0],j=y[1],O=u.b[p],v=Object(b.a)({data:d,group:p,scale:r,yValueOptions:{shorten:{precision:3,space:!0},suffix:"H/s"},valueMultiplier:4295032833}),_=v.renderXAxis,w=v.renderXValue,C=v.renderYAxis,k=v.renderYValue;return Object(o.useEffect)((function(){j(!0);var e="https://xmy-history.coinid.org/processeddata/workSeconds/"+O+".json";if(x[e]){var t=x[e].map((function(e,t){return{x:t,y:e[a]/r}}));s(t),j(!1)}else fetch(e).then((function(e){return e.json()})).then((function(t){x[e]=t;var n=t.map((function(e,t){return{x:t,y:e[a]/r}}));s(n),j(!1)}))}),[a,O,r]),Object(g.a)(m.a,{loading:h,group:p,data:d,startY:0,renderXAxis:_,renderYAxis:C,renderXValue:w,renderYValue:k,barPlotKeys:["y"],barPlotColors:[u.h[a]],onChangeGroup:f,theme:i})}var C=r.a.memo(w);function k(e){var t=e.theme,a=Object(o.useState)(null),n=a[0],r=a[1],i=Object(o.useState)(u.a),c=i[0],d=i[1],s=Object(o.useState)(!0),l=s[0],p=s[1],f=u.b[c],y=Object(b.a)({data:n,group:c,scale:1e6,yValueOptions:{suffix:" XMY"}}),h=y.renderXAxis,j=y.renderXValue,O=y.renderYAxis,v=y.renderYValue;return Object(o.useEffect)((function(){p(!0),fetch("https://xmy-history.coinid.org/processeddata/minedCoins/"+f+".json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e,t){return{x:t,y:e/1e6}}));r(t),p(!1)}))}),[f]),Object(g.a)(m.a,{loading:l,group:c,data:n,startY:0,renderXAxis:h,renderYAxis:O,renderXValue:j,renderYValue:v,barPlotKeys:["y"],barPlotColors:["#0066FF"],onChangeGroup:d,theme:t})}var S=r.a.memo(k);function I(e){var t=e.theme,a=Object(o.useState)(null),n=a[0],r=a[1],i=Object(o.useState)(u.a),c=i[0],d=i[1],s=Object(o.useState)(!0),l=s[0],p=s[1],f=u.b[c],y=Object(b.a)({data:n,group:c,yAxisOptions:{shorten:{precision:0},suffix:"%"},yValueOptions:{shorten:{precision:2},suffix:"%"}}),h=y.renderXAxis,j=y.renderXValue,O=y.renderYAxis,v=y.renderYValue;return Object(o.useEffect)((function(){p(!0),fetch("https://xmy-history.coinid.org/processeddata/inflation/"+f+".json").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e,t){return{x:t,y:100*e}}));r(t),p(!1)}))}),[f]),Object(g.a)(m.a,{loading:l,group:c,data:n,startY:0,renderXAxis:h,renderYAxis:O,renderXValue:j,renderYValue:v,barPlotKeys:["y"],barPlotColors:["#0066FF"],onChangeGroup:d,theme:t})}var B=r.a.memo(I),N=a("EGzX"),T=a("8jkX"),X=a("iSFD"),z=a("QxzM"),Y=a("Alt4"),A=a("/E4N"),V=n.b.button.withConfig({displayName:"bottom-tab__TabButton",componentId:"sc-2mcq5r-0"})(["",",",""],{paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",whiteSpace:"nowrap","--bg-opacity":"1",backgroundColor:"rgba(246, 246, 246, var(--bg-opacity))",transitionProperty:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",transitionDuration:"100ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 1, 1)","--transform-translate-x":"0","--transform-translate-y":"0","--transform-rotate":"0","--transform-skew-x":"0","--transform-skew-y":"0","--transform-scale-x":"1","--transform-scale-y":"1",transform:"translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))",borderRadius:"9999px",fontSize:"14px",":hover":{opacity:"0.75"},":focus":{outline:"2px solid transparent",outlineOffset:"2px"},"@media (min-width: 640px)":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontSize:"18px"}},(function(e){var t=e.thisKey,a=e.selectedKey,n=e.theme;return t===a&&{"--text-opacity":"1",color:"rgba(255, 255, 255, var(--text-opacity))","--bg-opacity":"1",backgroundColor:"rgba(50, 124, 255, var(--bg-opacity))"}||"graph1"===n&&{"--bg-opacity":"1",backgroundColor:"rgba(246, 246, 246, var(--bg-opacity))","@media (prefers-color-scheme: dark)":{"--bg-opacity":"1",backgroundColor:"rgba(43, 43, 43, var(--bg-opacity))"},"--text-opacity":"1",color:"rgba(136, 136, 136, var(--text-opacity))"}||"graph2"===n&&{"--bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--bg-opacity))","@media (prefers-color-scheme: dark)":{"--bg-opacity":"1",backgroundColor:"rgba(67, 67, 67, var(--bg-opacity))"},"--text-opacity":"1",color:"rgba(136, 136, 136, var(--text-opacity))"}||{"--bg-opacity":"1",backgroundColor:"rgba(246, 246, 246, var(--bg-opacity))","@media (prefers-color-scheme: dark)":{"--bg-opacity":"1",backgroundColor:"rgba(43, 43, 43, var(--bg-opacity))"},"--text-opacity":"1",color:"rgba(136, 136, 136, var(--text-opacity))"}})),D=Object(n.b)(N.animated.div).withConfig({displayName:"bottom-tab___StyledAnimatedDiv",componentId:"sc-2mcq5r-1"})({top:"0",right:"0",bottom:"0",left:"0"}),R=Object(n.b)("div").withConfig({displayName:"bottom-tab___StyledDiv",componentId:"sc-2mcq5r-2"})({marginTop:"1rem"}),M=Object(n.b)(N.animated.div).withConfig({displayName:"bottom-tab___StyledAnimatedDiv2",componentId:"sc-2mcq5r-3"})({whiteSpace:"nowrap"}),P=Object(n.b)("span").withConfig({displayName:"bottom-tab___StyledSpan",componentId:"sc-2mcq5r-4"})({paddingLeft:"0.5rem",paddingRight:"0.5rem"}),F=function(e){var t=e.items,a=e.theme,n=Object(o.useState)(0),i=n[0],c=n[1],d=Object(o.useRef)(null),s=Object(o.useRef)(null),l=Object(o.useRef)([].slice(0,t.length)),p=Object(A.a)(d).width,m=Object(T.useSpring)((function(){return{offsetX:0,config:{duration:400,easing:X.a}}})),b=m[0].offsetX,u=m[1];Object(o.useLayoutEffect)((function(){var e=l.current[i].offsetLeft||0,t=l.current[i].offsetWidth||0,a=0;if(p<=960)a=p/2-e-t/2;else{var n=-(s.current.offsetWidth-d.current.offsetWidth);(a=-e)<n&&(a=n)}u({offsetX:a})}),[i,u,p]);var f=Object(Y.a)(i),y=i<f?-1:1,h=Object(T.useTransition)(i,{initial:{opacity:1,transform:"translate3d(0, 0, 0)"},from:{opacity:0,transform:"translate3d("+30*y+"%, 0, 0)"},enter:{opacity:1,transform:"translate3d(0, 0, 0)"},leave:{opacity:0,position:"absolute",transform:"translate3d("+-30*y+"%, 0, 0)"},config:{duration:400,easing:X.a}});return Object(g.a)(r.a.Fragment,null,Object(g.a)(z.i,{ref:d},h((function(e,a){return Object(g.a)(D,{style:e},t[a].content)}))),Object(g.a)(R,null,Object(g.a)(z.i,null,Object(g.a)(M,{style:{transform:Object(T.interpolate)([b],(function(e){return"translate3d("+e+"px, 0, 0)"}))},ref:s},t.map((function(e,t){var n=e.label,o=e.color;return Object(g.a)(P,{key:t,ref:function(e){return l.current[t]=e}},Object(g.a)(V,{theme:a,onClick:function(){return c(t)},selectedKey:i,thisKey:t,style:i===t?{backgroundColor:o}:null},n))}))))))},L=a("AM0q"),K=a("tBDR"),E=a("wx14"),q=-85*Math.PI/180;var G=Object(n.b)(N.animated.div).withConfig({displayName:"seed-node___StyledAnimatedDiv",componentId:"t922th-0"})({position:"absolute",borderRadius:"9999px","--bg-opacity":"1",backgroundColor:"rgba(66, 153, 225, var(--bg-opacity))",top:"0",left:"0"}),H=function(e){var t=e.node,a=e.bind,n=Object(o.useRef)(null),r=Object(T.useSpring)((function(){return{opacity:.75,scale:0,backgroundColor:"#327CFF",config:T.config.wobbly}})),i=r[0],c=i.opacity,d=i.scale,s=i.backgroundColor,l=r[1];Object(o.useEffect)((function(){var e=setTimeout((function(){l({scale:1})}),1e3+5e3*Math.random());return function(){clearTimeout(e)}}),[l]),Object(L.a)({onHover:function(e){var t=e.hovering;l(t?{opacity:.75,scale:1.05,backgroundColor:"#02C093"}:{opacity:.75,scale:1,backgroundColor:"#327CFF"})}},{domTarget:n});var p,m=function(e,t){var a=100/360*(t- -180);e=e*Math.PI/180;var n=100/(2*Math.PI),o=n/2*Math.log((1+Math.sin(q))/(1-Math.sin(q)));return[a,100-(n/2*Math.log((1+Math.sin(e))/(1-Math.sin(e)))-o)]}(t[10],t[11]),b=m[0],u=m[1],f=(p=[1.688,1.688,1.688,1.688,1.688,1.688,1.688,1.688,1.688,1.688,1.688,1.688,1.688,2.3,2.3,2.3,2.3,2.3,2.3,2.3,2.3,3.6,3.6,5.4])[parseInt(Math.random()*p.length,10)];return Object(g.a)(G,Object(E.a)({style:{width:f+"%",height:f+"%",left:b+"%",top:u+"%",opacity:c,backgroundColor:s,transform:d.interpolate((function(e){return"translate(-50%, -50%) scale("+e+")"}))},ref:n},a(t)))},W=r.a.memo(H),J=function(e){var t=e.nodes,a=e.bind;return t.map((function(e){return Object(g.a)(W,{key:e[0]+":"+e[1],node:e,bind:a})}))},Q=r.a.memo(J),Z=Object(n.b)("div").withConfig({displayName:"seed-node-map___StyledDiv",componentId:"iwaiac-0"})({position:"relative"}),U=Object(n.b)(N.animated.div).withConfig({displayName:"seed-node-map___StyledAnimatedDiv",componentId:"iwaiac-1"})({position:"absolute",padding:"1rem","--text-opacity":"1",color:"rgba(0, 0, 0, var(--text-opacity))","--bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--bg-opacity))",borderRadius:"14px",zIndex:"10",pointerEvents:"none",boxShadow:"0px 8px 48px 8px rgba(0, 0, 0, 0.05)",whiteSpace:"nowrap"}),$=Object(n.b)("svg").withConfig({displayName:"seed-node-map___StyledSvg",componentId:"iwaiac-2"})({position:"absolute",top:"0"}),ee=Object(n.b)(K.a).withConfig({displayName:"seed-node-map___StyledImage",componentId:"iwaiac-3"})({display:"none","@media (prefers-color-scheme: dark)":{display:"block"}}),te=Object(n.b)(K.a).withConfig({displayName:"seed-node-map___StyledImage2",componentId:"iwaiac-4"})({display:"block","@media (prefers-color-scheme: dark)":{display:"none"}}),ae=Object(n.b)("div").withConfig({displayName:"seed-node-map___StyledDiv2",componentId:"iwaiac-5"})({position:"absolute",width:"100%",top:"0"}),ne=Object(n.b)("div").withConfig({displayName:"seed-node-map___StyledDiv3",componentId:"iwaiac-6"})({width:"100%"}),oe=function(e){var t=e.nodes,a=Object(o.useState)([]),n=a[0],i=a[1],c=Object(T.useSpring)((function(){return{opacity:0,left:0,top:0}})),d=c[0],s=d.opacity,l=d.left,p=d.top,m=c[1],b=Object(o.useRef)(null),u=Object(L.a)({onHover:function(e){var t=e.hovering,a=e.args[0];i(a),m({opacity:t?1:0})}});Object(L.a)({onMove:function(e){var t=e.event;if(t&&t.pageY&&t.pageX){var a=t.pageX-b.current.offsetLeft,n=t.pageY-b.current.offsetTop;m({top:n,left:a})}}},{domTarget:b});var f,y,h,j,O,v;return Object(g.a)(r.a.Fragment,null,Object(g.a)(Z,{ref:b},Object(g.a)(U,{style:{opacity:s,left:l,top:p,transform:"translate(-50%, 1rem)"}},Object(g.a)($,{width:"13",height:"6",viewBox:"0 0 13 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{left:"50%",transform:"translate(-50%, -100%)"}},Object(g.a)("path",{d:"M6.5 0L12.1292 6H0.870835L6.5 0Z",fill:"white"})),(f=n[0],y=n[1],h=n[3],j=n[8],O=n[9],v=n[12],Object(g.a)(r.a.Fragment,null,Object(g.a)("div",null,"IP address: ",f,":",y),Object(g.a)("div",null,"Version: ",h),Object(g.a)("div",null,"Zone: ",v),j&&Object(g.a)("div",null,"City: ",j),Object(g.a)("div",null,"Country: ",O)))),Object(g.a)(ee,{filename:"map.dark.png",alt:"Map"}),Object(g.a)(te,{filename:"map.light.png",alt:"Map"}),Object(g.a)(ae,{style:{top:"50%",left:"50%",transform:"translate(-53.2%, -36.5%) scale(1.01)"}},Object(g.a)(ne,{style:{paddingBottom:"100%"}}),Object(g.a)(Q,{nodes:t,bind:u}))))},re=r.a.memo(oe),ie=a("PC+r"),ce=Object(n.b)(z.a).withConfig({displayName:"seed-node-map-section___StyledBigText",componentId:"sc-8pycwj-0"})(["",""],ie.a),de=Object(n.b)("div").withConfig({displayName:"seed-node-map-section___StyledDiv",componentId:"sc-8pycwj-1"})({marginBottom:"3.5rem","@media (min-width: 768px)":{display:"flex",flexDirection:"row"}}),se=Object(n.b)(z.c).withConfig({displayName:"seed-node-map-section___StyledBodyText",componentId:"sc-8pycwj-2"})({marginRight:"2.5rem",marginBottom:"2.5rem"}),le=Object(n.b)("div").withConfig({displayName:"seed-node-map-section___StyledDiv2",componentId:"sc-8pycwj-3"})({height:"6rem",paddingLeft:"0.75rem",paddingRight:"0.75rem",display:"inline-flex",flexDirection:"column",flexShrink:"0",flexGrow:"0","--bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--bg-opacity))","@media (prefers-color-scheme: dark)":{"--bg-opacity":"1",backgroundColor:"rgba(30, 30, 30, var(--bg-opacity))"},borderRadius:"8px",boxShadow:"0px 8px 48px 8px rgba(0, 0, 0, 0.05)",alignItems:"center",justifyContent:"center",textAlign:"center","@media (min-width: 640px)":{height:"8rem",paddingLeft:"1.5rem",paddingRight:"1.5rem"}}),pe=Object(n.b)("div").withConfig({displayName:"seed-node-map-section___StyledDiv3",componentId:"sc-8pycwj-4"})({paddingBottom:"0.5rem"}),me=function(){var e=Object(i.a)().t,t=Object(o.useState)([]),a=t[0],n=t[1];return Object(o.useEffect)((function(){(function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://xmy-nodes.coinid.org/latest.json",e.next=3,fetch("https://xmy-nodes.coinid.org/latest.json").then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then(n)}),[]),Object(g.a)(r.a.Fragment,null,Object(g.a)(z.g,null,e("analytics.map.title")),Object(g.a)(de,null,Object(g.a)(se,null,e("analytics.map.description")),Object(g.a)(le,null,Object(g.a)(ce,null,e("formattedNumber",{number:a.length})),Object(g.a)(pe,null,"Open nodes"))),Object(g.a)(re,{nodes:a}))},be=r.a.memo(me),ue=Object(n.b)("div").withConfig({displayName:"analytics___StyledDiv",componentId:"sc-1kzrf6n-0"})({"--bg-opacity":"1",backgroundColor:"rgba(246, 246, 246, var(--bg-opacity))","@media (prefers-color-scheme: dark)":{"--bg-opacity":"1",backgroundColor:"rgba(42, 42, 42, var(--bg-opacity))"},paddingTop:"3.5rem",paddingBottom:"3.5rem",overflow:"hidden","@media (min-width: 640px)":{paddingTop:"7.5rem",paddingBottom:"7.5rem"}}),ge=Object(n.b)(z.i).withConfig({displayName:"analytics___StyledPageContainer",componentId:"sc-1kzrf6n-1"})({paddingLeft:"1.5rem",paddingRight:"1.5rem"}),fe=Object(n.b)("div").withConfig({displayName:"analytics___StyledDiv2",componentId:"sc-1kzrf6n-2"})({paddingTop:"3.5rem",paddingBottom:"3.5rem",overflow:"hidden","@media (min-width: 640px)":{paddingTop:"7.5rem",paddingBottom:"7.5rem"}}),ye=Object(n.b)(z.i).withConfig({displayName:"analytics___StyledPageContainer2",componentId:"sc-1kzrf6n-3"})({paddingLeft:"1.5rem",paddingRight:"1.5rem"}),he=Object(n.b)(z.g).withConfig({displayName:"analytics___StyledMediumBoldText",componentId:"sc-1kzrf6n-4"})({marginBottom:"2.5rem"}),je=Object(n.b)(z.c).withConfig({displayName:"analytics___StyledBodyText",componentId:"sc-1kzrf6n-5"})({marginBottom:"3.5rem"}),Oe=Object(n.b)("div").withConfig({displayName:"analytics___StyledDiv3",componentId:"sc-1kzrf6n-6"})({"--bg-opacity":"1",backgroundColor:"rgba(246, 246, 246, var(--bg-opacity))","@media (prefers-color-scheme: dark)":{"--bg-opacity":"1",backgroundColor:"rgba(42, 42, 42, var(--bg-opacity))"},paddingTop:"3.5rem",paddingBottom:"3.5rem",overflow:"hidden","@media (min-width: 640px)":{paddingTop:"7.5rem",paddingBottom:"7.5rem"}}),ve=Object(n.b)(z.i).withConfig({displayName:"analytics___StyledPageContainer3",componentId:"sc-1kzrf6n-7"})({paddingLeft:"1.5rem",paddingRight:"1.5rem"}),_e=Object(n.b)(z.g).withConfig({displayName:"analytics___StyledMediumBoldText2",componentId:"sc-1kzrf6n-8"})({marginBottom:"2.5rem"}),xe=Object(n.b)(z.c).withConfig({displayName:"analytics___StyledBodyText2",componentId:"sc-1kzrf6n-9"})({marginBottom:"3.5rem"}),we=Object(n.b)("div").withConfig({displayName:"analytics___StyledDiv4",componentId:"sc-1kzrf6n-10"})({paddingTop:"3.5rem",paddingBottom:"3.5rem",overflow:"hidden","@media (min-width: 640px)":{paddingTop:"7.5rem",paddingBottom:"7.5rem"}}),Ce=Object(n.b)(z.i).withConfig({displayName:"analytics___StyledPageContainer4",componentId:"sc-1kzrf6n-11"})({paddingLeft:"1.5rem",paddingRight:"1.5rem"}),ke=Object(n.b)(z.g).withConfig({displayName:"analytics___StyledMediumBoldText3",componentId:"sc-1kzrf6n-12"})({marginBottom:"2.5rem"}),Se=Object(n.b)(z.c).withConfig({displayName:"analytics___StyledBodyText3",componentId:"sc-1kzrf6n-13"})({marginBottom:"3.5rem"}),Ie=Object(n.b)("div").withConfig({displayName:"analytics___StyledDiv5",componentId:"sc-1kzrf6n-14"})({"--bg-opacity":"1",backgroundColor:"rgba(246, 246, 246, var(--bg-opacity))","@media (prefers-color-scheme: dark)":{"--bg-opacity":"1",backgroundColor:"rgba(42, 42, 42, var(--bg-opacity))"},paddingTop:"3.5rem",paddingBottom:"3.5rem",overflow:"hidden","@media (min-width: 640px)":{paddingTop:"7.5rem",paddingBottom:"7.5rem"}}),Be=Object(n.b)(z.i).withConfig({displayName:"analytics___StyledPageContainer5",componentId:"sc-1kzrf6n-15"})({paddingLeft:"1.5rem",paddingRight:"1.5rem"}),Ne=Object(n.b)(z.g).withConfig({displayName:"analytics___StyledMediumBoldText4",componentId:"sc-1kzrf6n-16"})({marginBottom:"2.5rem"}),Te=Object(n.b)(z.c).withConfig({displayName:"analytics___StyledBodyText4",componentId:"sc-1kzrf6n-17"})({marginBottom:"3.5rem"}),Xe=Object(n.b)("div").withConfig({displayName:"analytics___StyledDiv6",componentId:"sc-1kzrf6n-18"})({paddingTop:"3.5rem",paddingBottom:"3.5rem",overflow:"hidden","@media (min-width: 640px)":{paddingTop:"7.5rem",paddingBottom:"7.5rem"}}),ze=Object(n.b)(z.i).withConfig({displayName:"analytics___StyledPageContainer6",componentId:"sc-1kzrf6n-19"})({paddingLeft:"1.5rem",paddingRight:"1.5rem"}),Ye=Object(n.b)(z.g).withConfig({displayName:"analytics___StyledMediumBoldText5",componentId:"sc-1kzrf6n-20"})({marginBottom:"2.5rem"}),Ae=Object(n.b)(z.c).withConfig({displayName:"analytics___StyledBodyText5",componentId:"sc-1kzrf6n-21"})({marginBottom:"3.5rem"}),Ve=Object(n.b)("div").withConfig({displayName:"analytics___StyledDiv7",componentId:"sc-1kzrf6n-22"})({"--bg-opacity":"1",backgroundColor:"rgba(246, 246, 246, var(--bg-opacity))","@media (prefers-color-scheme: dark)":{"--bg-opacity":"1",backgroundColor:"rgba(42, 42, 42, var(--bg-opacity))"},paddingTop:"3.5rem",paddingBottom:"3.5rem",overflow:"hidden","@media (min-width: 640px)":{paddingTop:"7.5rem",paddingBottom:"7.5rem"}}),De=Object(n.b)(z.i).withConfig({displayName:"analytics___StyledPageContainer7",componentId:"sc-1kzrf6n-23"})({paddingLeft:"1.5rem",paddingRight:"1.5rem"}),Re=Object(n.b)(z.g).withConfig({displayName:"analytics___StyledMediumBoldText6",componentId:"sc-1kzrf6n-24"})({marginBottom:"2.5rem"}),Me=Object(n.b)(z.c).withConfig({displayName:"analytics___StyledBodyText6",componentId:"sc-1kzrf6n-25"})({marginBottom:"3.5rem"});t.default=function(){var e=Object(i.a)().t;return Object(g.a)(r.a.Fragment,null,Object(g.a)(c.a,{title:e("analytics.title")}),Object(g.a)(z.i,null,Object(g.a)(d.a,{showArrow:!0},e("analytics.title"))),Object(g.a)(ue,null,Object(g.a)(ge,null,Object(g.a)(be,null))),Object(g.a)(fe,null,Object(g.a)(ye,null,Object(g.a)(he,null,e("analytics.blocks_mined.title")),Object(g.a)(je,null,e("analytics.blocks_mined.description")),Object(g.a)(z.e,{theme:"graph1"},Object(g.a)(y,{theme:"graph1"})))),Object(g.a)(Oe,null,Object(g.a)(ve,null,Object(g.a)(_e,null,e("analytics.mining_difficulty.title")),Object(g.a)(xe,null,e("analytics.mining_difficulty.description")),Object(g.a)(F,{theme:"graph2",items:u.j.map((function(e,t){return{label:e,color:u.h[t],content:Object(g.a)(z.e,{theme:"graph2"},Object(g.a)(_,{algo:t,scale:u.i[t],theme:"graph2"}))}}))}))),Object(g.a)(we,null,Object(g.a)(Ce,null,Object(g.a)(ke,null,e("analytics.hash_rate.title")),Object(g.a)(Se,null,e("analytics.hash_rate.description")),Object(g.a)(F,{theme:"graph1",items:u.j.map((function(e,t){return{label:e,color:u.h[t],content:Object(g.a)(z.e,{theme:"graph1"},Object(g.a)(C,{algo:t,scale:u.k[t],theme:"graph1"}))}}))}))),Object(g.a)(Ie,null,Object(g.a)(Be,null,Object(g.a)(Ne,null,e("analytics.transactions.title")),Object(g.a)(Te,null,e("analytics.transactions.description")),Object(g.a)(z.e,{theme:"graph2"},Object(g.a)(j,{theme:"graph2"})))),Object(g.a)(Xe,null,Object(g.a)(ze,null,Object(g.a)(Ye,null,e("analytics.mined_coins.title")),Object(g.a)(Ae,null,e("analytics.mined_coins.description")),Object(g.a)(z.e,{theme:"graph1"},Object(g.a)(S,{theme:"graph1"})))),Object(g.a)(Ve,null,Object(g.a)(De,null,Object(g.a)(Re,null,e("analytics.inflation.title")),Object(g.a)(Me,null,e("analytics.inflation.description")),Object(g.a)(z.e,{theme:"graph2"},Object(g.a)(B,{theme:"graph2"})))))}},iSFD:function(e,t,a){"use strict";function n(e){return--e*e*e+1}a.d(t,"a",(function(){return n}))},tBDR:function(e,t,a){"use strict";var n=a("vOnD"),o=(a("q1tI"),a("Wbzz")),r=a("9eSz"),i=a.n(r),c=a("qKvR"),d=Object(n.b)(i.a).withConfig({displayName:"image___StyledImg",componentId:"je92qk-0"})({position:"relative",width:"100%",maxWidth:"100%",maxHeight:"100%"});t.a=function(e){var t=e.filename,a=e.className,n=e.alt;return Object(c.a)(o.StaticQuery,{query:"936484821",render:function(e){var o=e.images.edges.find((function(e){return e.node.relativePath.includes(t)}));if(!o)return null;var r=o.node.childImageSharp.sizes;return Object(c.a)(d,{alt:n,fluid:r,className:a})}})}}}]);
//# sourceMappingURL=component---src-pages-analytics-js-117de662654a2cf9ae1d.js.map