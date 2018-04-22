webpackJsonp([32],{190:function(e,t,n){$(function(){faqAppModel=appModel.extend({baseDefaults:function(){return{toggleBehavior:"oneItem",questionAlign:"left",questionFontColor:"#333",questionFontFamily:"Open Sans",questionFontSize:"16px",questionBackgroundColor:"#FFF",questionActiveColor:"#FFF",questionActiveBackgroundColor:"#337ab7",linkBehavior:"_blank",iconType:"icons",icon:"question-circle",customIcon:"https://s3-us-west-1.amazonaws.com/powr/images/default.jpg",answerAlign:"left",answerFontColor:"#4f4f4f",answerFontFamily:"Open Sans",answerFontSize:"14px",answerBackgroundColor:"#FFF",answerColor:"#000",separatorWidth:"100%",separatorHeight:"4px",separatorColor:"#c5c5c5",separatorAlign:"center",hoverEffect:"highlight",transitionSpeed:"0.3s",itemSpacing:"8px",itemPadding:"2.2%",showSearch:!1,data:[{question:"What is this?",answer:"Great question! This is FAQ, a Plugin created by <a href='https://www.powr.io' target='_blank'>POWr.io</a>.",active:!0},{question:"How does it work?",answer:"Open the POWr Editor to create your questions and answers, and fully customize the design, colors and fonts.</a>",active:!1},{question:"Then What?",answer:"There are 50 more great plugins including Forms, Galleries, Social Feeds, eCommerce, and much more on <a href='https://www.powr.io/plugins' target='_blank'>POWr.io</a>. Are you stuck? Check out our <a href='https://www.powr.io/knowledge-base' target='_blank'>Help Center</a>",active:!1}],backgroundBorderColor:"#c5c5c5",backgroundBorderRadius:"3px",backgroundBorderWidth:"1px",backgroundShadow:"none",passwordProtectOn:!1,pluginWidth:"1000px",customCSS:"",customJS:""}}}),faqAppSettings=appSettings.extend({afterInitialize:function(){},afterRender:function(){var e=this.model.get("data");for(var t in e){var n=e[t];this.$el.find(".faqContentWrapper").addPrototype(null,{speed:"instant"}).objectToForm(n)}this.makeSortable(".prototype-wrapper",".sort",!0),this.initializeTextControls(),this.updateConditionals(),this.renderMediaBars()},afterAdd:function(){this.initializeTextControls()},afterUpdate:function(){var e=[];this.$el.find(".faqContent:not(.prototype)").each(function(){var t=$(this).formToObject();e.push(t)}),this.model.set({data:e},{silent:!0}),this.updateConditionals(),this.model.triggerChange(),this.renderMediaBars()},renderMediaBars:function(){for(var e in this.model.get("data")){var t=this.model.get("data")[e],n=$(this.$el.find(".faqContent.prototype-element:not(.prototype)")[e]),o=$("<i>"+t.question+"<i>").text()||$("<i>"+t.answer+"<i>").text()||"Question";n.find(".mediaBar .title").html(truncate(o,"35"));var a=n.find(".mediaBar .image");a.css({backgroundImage:"none"}),a.html('<i class="fa fa-question-circle"></i>')}},updateConditionals:function(){"icons"==this.model.get("iconType")?(this.$el.find(".iconSelect").slideDown(),this.$el.find(".customIconSelect").hide()):"custom"==this.model.get("iconType")?(this.$el.find(".iconSelect").hide(),this.$el.find(".customIconSelect").slideDown()):(this.$el.find(".iconSelect").hide(),this.$el.find(".customIconSelect").hide()),this.updatePremiumContent(),this.initializeCheckboxes(),this.initializeWixCheckboxes()}}),faqAppView=appView.extend({afterInitialize:function(){var e=this;this.$el.on("keyup",".searchInput",function(){var t=$(this).val();if(e.$el.find(".highlight").each(function(){$(this).replaceWith($(this).html())}),e.$el.find(".item").show(),e.$el.find(".noResults").hide(),!(t.length<2)){var n=0,o=function e(t,n){var o,i,r,s,c,l,d,u=t.contents();if(t.hasClass("garbage"))return c=t.text(),r=a(c,n),t.html(r);for(var p=0;p<u.length;p++){if(o=u[p],i=$(o),s=i.find(".garbage"),s.length)for(var f=0;f<s.length;f++)e($(s[f]),n);else if(3===o.nodeType)return l=$(o).text(),d=$("<span class='garbage'></span>"),r=a(l,n),d.html(r),void i.replaceWith(d);e(i,n)}},a=function(e,t){var n,o="<span class='highlight'>",a=new RegExp(t,"gi"),i=[];for(String.prototype.splice=function(e,t,n){return this.slice(0,e)+n+this.slice(e+Math.abs(t))};null!==(n=a.exec(e));)i.push(n.index);return i.forEach(function(n,a,i){var r=a*(o.length+"</span>".length),s=n+r+t.length+o.length;e=e.splice(n+r,0,o),e=e.splice(s,0,"</span>")}),e};e.$el.find(".item").each(function(){if($(this).find(".questionContent").text().toLowerCase().search(t.toLowerCase())>-1||$(this).find(".answerContent").text().toLowerCase().search(t.toLowerCase())>-1){$(this).show();var e=$(this).find(".questionContent"),a=$(this).find(".answerContent"),i=e.text(),r=a.text();i=o(e,t),r=o(a,t),e.html(i),a.html(r),n++}else $(this).hide()}),0==n&&e.$el.find(".noResults").show()}})},beforeRender:function(){var e=this,t=jQuery.extend({},e.model.get("data"));t=$.map(t,function(e){return e}),"free"==this.model.meta.premium_status&&t.push({question:"What is POWr?",answer:"POWr is the web's leading plugin library and made this FAQ. Get your own, as well as Forms, Galleries, Social Feeds, eCommerce, and much more at  <a href='https://www.powr.io' target='_blank'>POWr.io</a>.",active:!1}),this.model.setLocals({data:t})},afterRender:function(){var e=this;"oneItem"==this.model.get("toggleBehavior")?this.$el.find(".question").on("click",function(){debug()("Click on question detected");var t=$(this).parents(".item"),n=t.hasClass("active");e.$el.find(".item").removeClass("active"),debug()("Is active is "+n),t.toggleClass("active",!n),e.renderIcons(),e.setMaxHeights()}):this.$el.find(".question").on("click",function(){$(this).parents(".item").toggleClass("active"),e.renderIcons(),e.setMaxHeights()}),e.renderIcons(),e.setMaxHeights()},renderIcons:function(){switch(this.model.get("iconType")){case"numbers":var e=1;this.$el.find(".questionIcon").each(function(){$(this).html(e+"."),e++});break;case"icons":var t='<i class="fa fa-'+this.model.get("icon")+'"></i>';switch(this.model.get("icon")){case"angle-right":var n='<i class="fa fa-angle-down"></i>';break;case"angle-double-right":var n='<i class="fa fa-angle-double-down"></i>';break;case"chevron-right":var n='<i class="fa fa-chevron-down"></i>';break;case"chevron-circle-right":var n='<i class="fa fa-chevron-circle-down"></i>';break;case"caret-right":var n='<i class="fa fa-caret-down"></i>';break;case"plus-square":var n='<i class="fa fa-minus-square"></i>';break;default:var n=t}this.$el.find(".questionIcon").html(t),this.$el.find(".active .questionIcon").html(n);break;case"custom":var o='<img src="'+this.model.get("customIcon")+'">';this.$el.find(".questionIcon").html(o)}"What is POWr?"==$(".question").last().text().trim()&&$(".question").last().find(".questionIcon").html('<i class="icon-logo"></i>')},setMaxHeights:function(){$(".item").each(function(){if($(this).hasClass("active")){var e=$(this).find(".answerContent").outerHeight();$(this).find(".answer").css({maxHeight:e+"px"})}else $(this).find(".answer").css({maxHeight:"0px"})})},afterFitText:function(){this.setMaxHeights()}}),n(3)})},2:function(e,t){!function(t,n,o,a,i,r){function s(e,t){var n=typeof e[t];return"function"==n||!("object"!=n||!e[t])||"unknown"==n}function c(e,t){return!("object"!=typeof e[t]||!e[t])}function l(e){return"[object Array]"===Object.prototype.toString.call(e)}function d(){var e="Shockwave Flash",t="application/x-shockwave-flash";if(!b(navigator.plugins)&&"object"==typeof navigator.plugins[e]){var n=navigator.plugins[e].description;n&&!b(navigator.mimeTypes)&&navigator.mimeTypes[t]&&navigator.mimeTypes[t].enabledPlugin&&(T=n.match(/\d+/g))}if(!T){var o;try{o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),T=Array.prototype.slice.call(o.GetVariable("$version").match(/(\d+),(\d+),(\d+),(\d+)/),1),o=null}catch(e){}}if(!T)return!1;var a=parseInt(T[0],10),i=parseInt(T[1],10);return L=a>9&&i>0,!0}function u(){if(!U){U=!0;for(var e=0;e<z.length;e++)z[e]();z.length=0}}function p(e,t){if(U)return void e.call(t);z.push(function(){e.call(t)})}function f(){var e=parent;if(""!==F)for(var t=0,n=F.split(".");t<n.length;t++)e=e[n[t]];return e.easyXDM}function h(e){return t.easyXDM=B,F=e,F&&(V="easyXDM_"+F.replace(".","_")+"_"),q}function g(e){return e.match(N)[3]}function m(e){return e.match(N)[4]||""}function w(e){var t=e.toLowerCase().match(N),n=t[2],o=t[3],a=t[4]||"";return("http:"==n&&":80"==a||"https:"==n&&":443"==a)&&(a=""),n+"//"+o+a}function v(e){if(e=e.replace(W,"$1/"),!e.match(/^(http||https):\/\//)){var t="/"===e.substring(0,1)?"":o.pathname;"/"!==t.substring(t.length-1)&&(t=t.substring(0,t.lastIndexOf("/")+1)),e=o.protocol+"//"+o.host+t+e}for(;R.test(e);)e=e.replace(R,"");return e}function _(e,t){var n="",o=e.indexOf("#");-1!==o&&(n=e.substring(o),e=e.substring(0,o));var a=[];for(var i in t)t.hasOwnProperty(i)&&a.push(i+"="+r(t[i]));return e+(H?"#":-1==e.indexOf("?")?"?":"&")+a.join("&")+n}function b(e){return void 0===e}function y(e,t,n){var o;for(var a in t)t.hasOwnProperty(a)&&(a in e?(o=t[a],"object"==typeof o?y(e[a],o,n):n||(e[a]=t[a])):e[a]=t[a]);return e}function E(){var e=n.body.appendChild(n.createElement("form")),t=e.appendChild(n.createElement("input"));t.name=V+"TEST"+D,k=t!==e.elements[t.name],n.body.removeChild(e)}function P(e){b(k)&&E();var t;k?t=n.createElement('<iframe name="'+e.props.name+'"/>'):(t=n.createElement("IFRAME"),t.name=e.props.name),t.id=t.name=e.props.name,delete e.props.name,"string"==typeof e.container&&(e.container=n.getElementById(e.container)),e.container||(y(t.style,{position:"absolute",top:"-2000px",left:"0px"}),e.container=n.body);var o=e.props.src;if(e.props.src="javascript:false",y(t,e.props),t.border=t.frameBorder=0,t.allowTransparency=!0,e.container.appendChild(t),e.onLoad&&C(t,"load",e.onLoad),e.usePost){var a,i=e.container.appendChild(n.createElement("form"));if(i.target=t.name,i.action=o,i.method="POST","object"==typeof e.usePost)for(var r in e.usePost)e.usePost.hasOwnProperty(r)&&(k?a=n.createElement('<input name="'+r+'"/>'):(a=n.createElement("INPUT"),a.name=r),a.value=e.usePost[r],i.appendChild(a));i.submit(),i.parentNode.removeChild(i)}else t.src=o;return e.props.src=o,t}function M(e,t){"string"==typeof e&&(e=[e]);for(var n,o=e.length;o--;)if(n=e[o],n=new RegExp("^"==n.substr(0,1)?n:"^"+n.replace(/(\*)/g,".$1").replace(/\?/g,".")+"$"),n.test(t))return!0;return!1}function x(e){var a,i=e.protocol;if(e.isHost=e.isHost||b(G.xdm_p),H=e.hash||!1,e.props||(e.props={}),e.isHost)e.remote=v(e.remote),e.channel=e.channel||"default"+D++,e.secret=Math.random().toString(16).substring(2),b(i)&&(i=w(o.href)==w(e.remote)?"4":s(t,"postMessage")||s(n,"postMessage")?"1":e.swf&&s(t,"ActiveXObject")&&d()?"6":"Gecko"===navigator.product&&"frameElement"in t&&-1==navigator.userAgent.indexOf("WebKit")?"5":e.remoteHelper?"2":"0");else if(e.channel=G.xdm_c.replace(/["'<>\\]/g,""),e.secret=G.xdm_s,e.remote=G.xdm_e.replace(/["'<>\\]/g,""),i=G.xdm_p,e.acl&&!M(e.acl,e.remote))throw new Error("Access denied for "+e.remote);switch(e.protocol=i,i){case"0":if(y(e,{interval:100,delay:2e3,useResize:!0,useParent:!1,usePolling:!1},!0),e.isHost){if(!e.local){for(var r,c=o.protocol+"//"+o.host,l=n.body.getElementsByTagName("img"),u=l.length;u--;)if(r=l[u],r.src.substring(0,c.length)===c){e.local=r.src;break}e.local||(e.local=t)}var p={xdm_c:e.channel,xdm_p:0};e.local===t?(e.usePolling=!0,e.useParent=!0,e.local=o.protocol+"//"+o.host+o.pathname+o.search,p.xdm_e=e.local,p.xdm_pa=1):p.xdm_e=v(e.local),e.container&&(e.useResize=!1,p.xdm_po=1),e.remote=_(e.remote,p)}else y(e,{channel:G.xdm_c,remote:G.xdm_e,useParent:!b(G.xdm_pa),usePolling:!b(G.xdm_po),useResize:!e.useParent&&e.useResize});a=[new q.stack.HashTransport(e),new q.stack.ReliableBehavior({}),new q.stack.QueueBehavior({encode:!0,maxLength:4e3-e.remote.length}),new q.stack.VerifyBehavior({initiate:e.isHost})];break;case"1":a=[new q.stack.PostMessageTransport(e)];break;case"2":e.isHost&&(e.remoteHelper=v(e.remoteHelper)),a=[new q.stack.NameTransport(e),new q.stack.QueueBehavior,new q.stack.VerifyBehavior({initiate:e.isHost})];break;case"3":a=[new q.stack.NixTransport(e)];break;case"4":a=[new q.stack.SameOriginTransport(e)];break;case"5":a=[new q.stack.FrameElementTransport(e)];break;case"6":T||d(),a=[new q.stack.FlashTransport(e)]}return a.push(new q.stack.QueueBehavior({lazy:e.lazy,remove:!0})),a}function A(e){for(var t,n={incoming:function(e,t){this.up.incoming(e,t)},outgoing:function(e,t){this.down.outgoing(e,t)},callback:function(e){this.up.callback(e)},init:function(){this.down.init()},destroy:function(){this.down.destroy()}},o=0,a=e.length;o<a;o++)t=e[o],y(t,n,!0),0!==o&&(t.down=e[o-1]),o!==a-1&&(t.up=e[o+1]);return t}function O(e){e.up.down=e.down,e.down.up=e.up,e.up=e.down=null}var k,T,L,C,S,I=this,D=Math.floor(1e4*Math.random()),$=Function.prototype,N=/^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,R=/[\-\w]+\/\.\.\//,W=/([^:])\/\//g,F="",q={},B=t.easyXDM,V="easyXDM_",H=!1;if(s(t,"addEventListener"))C=function(e,t,n){e.addEventListener(t,n,!1)},S=function(e,t,n){e.removeEventListener(t,n,!1)};else{if(!s(t,"attachEvent"))throw new Error("Browser not supported");C=function(e,t,n){e.attachEvent("on"+t,n)},S=function(e,t,n){e.detachEvent("on"+t,n)}}var j,U=!1,z=[];if("readyState"in n?(j=n.readyState,U="complete"==j||~navigator.userAgent.indexOf("AppleWebKit/")&&("loaded"==j||"interactive"==j)):U=!!n.body,!U){if(s(t,"addEventListener"))C(n,"DOMContentLoaded",u);else if(C(n,"readystatechange",function(){"complete"==n.readyState&&u()}),n.documentElement.doScroll&&t===top){var J=function(){if(!U){try{n.documentElement.doScroll("left")}catch(e){return void a(J,1)}u()}};J()}C(t,"load",u)}var G=function(e){e=e.substring(1).split("&");for(var t,n={},o=e.length;o--;)t=e[o].split("="),n[t[0]]=i(t[1]);return n}(/xdm_e=/.test(o.search)?o.search:o.hash),X=function(){var e={},t={a:[1,2,3]},n='{"a":[1,2,3]}';return"undefined"!=typeof JSON&&"function"==typeof JSON.stringify&&JSON.stringify(t).replace(/\s/g,"")===n?JSON:(Object.toJSON&&Object.toJSON(t).replace(/\s/g,"")===n&&(e.stringify=Object.toJSON),"function"==typeof String.prototype.evalJSON&&(t=n.evalJSON(),t.a&&3===t.a.length&&3===t.a[2]&&(e.parse=function(e){return e.evalJSON()})),e.stringify&&e.parse?(X=function(){return e},e):null)};y(q,{version:"2.4.19",query:G,stack:{},apply:y,getJSONObject:X,whenReady:p,noConflict:h}),q.DomHelper={on:C,un:S,requiresJSON:function(e){c(t,"JSON")||n.write('<script type="text/javascript" src="'+e+'"><\/script>')}},function(){var e={};q.Fn={set:function(t,n){e[t]=n},get:function(t,n){if(e.hasOwnProperty(t)){var o=e[t];return n&&delete e[t],o}}}}(),q.Socket=function(e){var t=A(x(e).concat([{incoming:function(t,n){e.onMessage(t,n)},callback:function(t){e.onReady&&e.onReady(t)}}])),n=w(e.remote);this.origin=w(e.remote),this.destroy=function(){t.destroy()},this.postMessage=function(e){t.outgoing(e,n)},t.init()},q.Rpc=function(e,t){if(t.local)for(var n in t.local)if(t.local.hasOwnProperty(n)){var o=t.local[n];"function"==typeof o&&(t.local[n]={method:o})}var a=A(x(e).concat([new q.stack.RpcBehavior(this,t),{callback:function(t){e.onReady&&e.onReady(t)}}]));this.origin=w(e.remote),this.destroy=function(){a.destroy()},a.init()},q.stack.SameOriginTransport=function(e){var t,n,i,r;return t={outgoing:function(e,t,n){i(e),n&&n()},destroy:function(){n&&(n.parentNode.removeChild(n),n=null)},onDOMReady:function(){r=w(e.remote),e.isHost?(y(e.props,{src:_(e.remote,{xdm_e:o.protocol+"//"+o.host+o.pathname,xdm_c:e.channel,xdm_p:4}),name:V+e.channel+"_provider"}),n=P(e),q.Fn.set(e.channel,function(e){return i=e,a(function(){t.up.callback(!0)},0),function(e){t.up.incoming(e,r)}})):(i=f().Fn.get(e.channel,!0)(function(e){t.up.incoming(e,r)}),a(function(){t.up.callback(!0)},0))},init:function(){p(t.onDOMReady,t)}}},q.stack.FlashTransport=function(e){function t(e,t){a(function(){s.up.incoming(e,l)},0)}function i(t){var o=e.swf+"?host="+e.isHost,a="easyXDM_swf_"+Math.floor(1e4*Math.random());q.Fn.set("flash_loaded"+t.replace(/[\-.]/g,"_"),function(){q.stack.FlashTransport[t].swf=d=u.firstChild;for(var e=q.stack.FlashTransport[t].queue,n=0;n<e.length;n++)e[n]();e.length=0}),e.swfContainer?u="string"==typeof e.swfContainer?n.getElementById(e.swfContainer):e.swfContainer:(u=n.createElement("div"),y(u.style,L&&e.swfNoThrottle?{height:"20px",width:"20px",position:"fixed",right:0,top:0}:{height:"1px",width:"1px",position:"absolute",overflow:"hidden",right:0,top:0}),n.body.appendChild(u));var i="callback=flash_loaded"+r(t.replace(/[\-.]/g,"_"))+"&proto="+I.location.protocol+"&domain="+r(g(I.location.href))+"&port="+r(m(I.location.href))+"&ns="+r(F);u.innerHTML="<object height='20' width='20' type='application/x-shockwave-flash' id='"+a+"' data='"+o+"'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='"+o+"'></param><param name='flashvars' value='"+i+"'></param><embed type='application/x-shockwave-flash' FlashVars='"+i+"' allowScriptAccess='always' wmode='transparent' src='"+o+"' height='1' width='1'></embed></object>"}var s,c,l,d,u;return s={outgoing:function(t,n,o){d.postMessage(e.channel,t.toString()),o&&o()},destroy:function(){try{d.destroyChannel(e.channel)}catch(e){}d=null,c&&(c.parentNode.removeChild(c),c=null)},onDOMReady:function(){l=e.remote,q.Fn.set("flash_"+e.channel+"_init",function(){a(function(){s.up.callback(!0)})}),q.Fn.set("flash_"+e.channel+"_onMessage",t),e.swf=v(e.swf);var n=g(e.swf),r=function(){q.stack.FlashTransport[n].init=!0,d=q.stack.FlashTransport[n].swf,d.createChannel(e.channel,e.secret,w(e.remote),e.isHost),e.isHost&&(L&&e.swfNoThrottle&&y(e.props,{position:"fixed",right:0,top:0,height:"20px",width:"20px"}),y(e.props,{src:_(e.remote,{xdm_e:w(o.href),xdm_c:e.channel,xdm_p:6,xdm_s:e.secret}),name:V+e.channel+"_provider"}),c=P(e))};q.stack.FlashTransport[n]&&q.stack.FlashTransport[n].init?r():q.stack.FlashTransport[n]?q.stack.FlashTransport[n].queue.push(r):(q.stack.FlashTransport[n]={queue:[r]},i(n))},init:function(){p(s.onDOMReady,s)}}},q.stack.PostMessageTransport=function(e){function n(e){if(e.origin)return w(e.origin);if(e.uri)return w(e.uri);if(e.domain)return o.protocol+"//"+e.domain;throw"Unable to retrieve the origin of the event"}function i(t){var o=n(t);o==l&&t.data.substring(0,e.channel.length+1)==e.channel+" "&&r.up.incoming(t.data.substring(e.channel.length+1),o)}var r,s,c,l;return r={outgoing:function(t,n,o){c.postMessage(e.channel+" "+t,n||l),o&&o()},destroy:function(){S(t,"message",i),s&&(c=null,s.parentNode.removeChild(s),s=null)},onDOMReady:function(){if(l=w(e.remote),e.isHost){var n=function(o){o.data==e.channel+"-ready"&&(c="postMessage"in s.contentWindow?s.contentWindow:s.contentWindow.document,S(t,"message",n),C(t,"message",i),a(function(){r.up.callback(!0)},0))};C(t,"message",n),y(e.props,{src:_(e.remote,{xdm_e:w(o.href),xdm_c:e.channel,xdm_p:1}),name:V+e.channel+"_provider"}),s=P(e)}else C(t,"message",i),c="postMessage"in t.parent?t.parent:t.parent.document,c.postMessage(e.channel+"-ready",l),a(function(){r.up.callback(!0)},0)},init:function(){p(r.onDOMReady,r)}}},q.stack.FrameElementTransport=function(e){var i,r,s,c;return i={outgoing:function(e,t,n){s.call(this,e),n&&n()},destroy:function(){r&&(r.parentNode.removeChild(r),r=null)},onDOMReady:function(){c=w(e.remote),e.isHost?(y(e.props,{src:_(e.remote,{xdm_e:w(o.href),xdm_c:e.channel,xdm_p:5}),name:V+e.channel+"_provider"}),r=P(e),r.fn=function(e){return delete r.fn,s=e,a(function(){i.up.callback(!0)},0),function(e){i.up.incoming(e,c)}}):(n.referrer&&w(n.referrer)!=G.xdm_e&&(t.top.location=G.xdm_e),s=t.frameElement.fn(function(e){i.up.incoming(e,c)}),i.up.callback(!0))},init:function(){p(i.onDOMReady,i)}}},q.stack.NameTransport=function(e){function t(t){var n=e.remoteHelper+(s?"#_3":"#_2")+e.channel;c.contentWindow.sendMessage(t,n)}function n(){s?2!=++d&&s||r.up.callback(!0):(t("ready"),r.up.callback(!0))}function o(e){r.up.incoming(e,f)}function i(){u&&a(function(){u(!0)},0)}var r,s,c,l,d,u,f,h;return r={outgoing:function(e,n,o){u=o,t(e)},destroy:function(){c.parentNode.removeChild(c),c=null,s&&(l.parentNode.removeChild(l),l=null)},onDOMReady:function(){s=e.isHost,d=0,f=w(e.remote),e.local=v(e.local),s?(q.Fn.set(e.channel,function(t){s&&"ready"===t&&(q.Fn.set(e.channel,o),n())}),h=_(e.remote,{xdm_e:e.local,xdm_c:e.channel,xdm_p:2}),y(e.props,{src:h+"#"+e.channel,name:V+e.channel+"_provider"}),l=P(e)):(e.remoteHelper=e.remote,q.Fn.set(e.channel,o));var t=function(){var o=c||this;S(o,"load",t),q.Fn.set(e.channel+"_load",i),function e(){"function"==typeof o.contentWindow.sendMessage?n():a(e,50)}()};c=P({props:{src:e.local+"#_4"+e.channel},onLoad:t})},init:function(){p(r.onDOMReady,r)}}},q.stack.HashTransport=function(e){function n(t){if(g){var n=e.remote+"#"+f+++"_"+t;(c||!m?g.contentWindow:g).location=n}}function o(e){u=e,s.up.incoming(u.substring(u.indexOf("_")+1),v)}function i(){if(h){var e=h.location.href,t="",n=e.indexOf("#");-1!=n&&(t=e.substring(n)),t&&t!=u&&o(t)}}function r(){l=setInterval(i,d)}var s,c,l,d,u,f,h,g,m,v;return s={outgoing:function(e,t){n(e)},destroy:function(){t.clearInterval(l),!c&&m||g.parentNode.removeChild(g),g=null},onDOMReady:function(){if(c=e.isHost,d=e.interval,u="#"+e.channel,f=0,m=e.useParent,v=w(e.remote),c){if(y(e.props,{src:e.remote,name:V+e.channel+"_provider"}),m)e.onLoad=function(){h=t,r(),s.up.callback(!0)};else{var n=0,o=e.delay/50;!function t(){if(++n>o)throw new Error("Unable to reference listenerwindow");try{h=g.contentWindow.frames[V+e.channel+"_consumer"]}catch(e){}h?(r(),s.up.callback(!0)):a(t,50)}()}g=P(e)}else h=t,r(),m?(g=parent,s.up.callback(!0)):(y(e,{props:{src:e.remote+"#"+e.channel+new Date,name:V+e.channel+"_consumer"},onLoad:function(){s.up.callback(!0)}}),g=P(e))},init:function(){p(s.onDOMReady,s)}}},q.stack.ReliableBehavior=function(e){var t,n,o=0,a=0,i="";return t={incoming:function(e,r){var s=e.indexOf("_"),c=e.substring(0,s).split(",");e=e.substring(s+1),c[0]==o&&(i="",n&&n(!0)),e.length>0&&(t.down.outgoing(c[1]+","+o+"_"+i,r),a!=c[1]&&(a=c[1],t.up.incoming(e,r)))},outgoing:function(e,r,s){i=e,n=s,t.down.outgoing(a+","+ ++o+"_"+e,r)}}},q.stack.QueueBehavior=function(e){function t(){if(e.remove&&0===s.length)return void O(n);if(!c&&0!==s.length&&!o){c=!0;var i=s.shift();n.down.outgoing(i.data,i.origin,function(e){c=!1,i.callback&&a(function(){i.callback(e)},0),t()})}}var n,o,s=[],c=!0,l="",d=0,u=!1,p=!1;return n={init:function(){b(e)&&(e={}),e.maxLength&&(d=e.maxLength,p=!0),e.lazy?u=!0:n.down.init()},callback:function(e){c=!1;var o=n.up;t(),o.callback(e)},incoming:function(t,o){if(p){var a=t.indexOf("_"),r=parseInt(t.substring(0,a),10);l+=t.substring(a+1),0===r&&(e.encode&&(l=i(l)),n.up.incoming(l,o),l="")}else n.up.incoming(t,o)},outgoing:function(o,a,i){e.encode&&(o=r(o));var c,l=[];if(p){for(;0!==o.length;)c=o.substring(0,d),o=o.substring(c.length),l.push(c);for(;c=l.shift();)s.push({data:l.length+"_"+c,origin:a,callback:0===l.length?i:null})}else s.push({data:o,origin:a,callback:i});u?n.down.init():t()},destroy:function(){o=!0,n.down.destroy()}}},q.stack.VerifyBehavior=function(e){function t(){o=Math.random().toString(16).substring(2),n.down.outgoing(o)}var n,o,a;return n={incoming:function(i,r){var s=i.indexOf("_");-1===s?i===o?n.up.callback(!0):a||(a=i,e.initiate||t(),n.down.outgoing(i)):i.substring(0,s)===a&&n.up.incoming(i.substring(s+1),r)},outgoing:function(e,t,a){n.down.outgoing(o+"_"+e,t,a)},callback:function(n){e.initiate&&t()}}},q.stack.RpcBehavior=function(e,t){function n(e){e.jsonrpc="2.0",i.down.outgoing(r.stringify(e))}function o(e,t){var o=Array.prototype.slice;return function(){var a,i=arguments.length,r={method:t};i>0&&"function"==typeof arguments[i-1]?(i>1&&"function"==typeof arguments[i-2]?(a={success:arguments[i-2],error:arguments[i-1]},r.params=o.call(arguments,0,i-2)):(a={success:arguments[i-1]},r.params=o.call(arguments,0,i-1)),c[""+ ++s]=a,r.id=s):r.params=o.call(arguments,0),e.namedParams&&1===r.params.length&&(r.params=r.params[0]),n(r)}}function a(e,t,o,a){if(!o)return void(t&&n({id:t,error:{code:-32601,message:"Procedure not found."}}));var i,r;t?(i=function(e){i=$,n({id:t,result:e})},r=function(e,o){r=$;var a={id:t,error:{code:-32099,message:e}};o&&(a.error.data=o),n(a)}):i=r=$,l(a)||(a=[a]);try{var s=o.method.apply(o.scope,a.concat([i,r]));b(s)||i(s)}catch(e){r(e.message)}}var i,r=t.serializer||X(),s=0,c={};return i={incoming:function(e,o){var i=r.parse(e);if(i.method)t.handle?t.handle(i,n):a(i.method,i.id,t.local[i.method],i.params);else{var s=c[i.id];i.error?s.error&&s.error(i.error):s.success&&s.success(i.result),delete c[i.id]}},init:function(){if(t.remote)for(var n in t.remote)t.remote.hasOwnProperty(n)&&(e[n]=o(t.remote[n],n));i.down.init()},destroy:function(){for(var n in t.remote)t.remote.hasOwnProperty(n)&&e.hasOwnProperty(n)&&delete e[n];i.down.destroy()}}},e.exports=q}(window,document,location,window.setTimeout,decodeURIComponent,encodeURIComponent)},3:function(e,t,n){n(4),n(2),n(5),$(function(){"undefined"!=typeof onAppModelViewDefined&&onAppModelViewDefined()})},4:function(e,t){!function(e){"use strict";e.fn.konami=function(t){var n,o,a;return n=e.extend({},e.fn.konami.defaults,t),this.each(function(){o=[],e(window).keyup(function(e){a=e.keyCode||e.which,n.code.length>o.push(a)||(n.code.length<o.length&&o.shift(),n.code.toString()===o.toString()&&n.cheat())})})},e.fn.konami.defaults={code:[38,38,40,40,37,39,37,39,66,65],cheat:null}}(jQuery)},5:function(e,t,n){function o(){"free"==META.premium_status&&$(".loadingWrapper").show(),META.edit_me&&("jimdo"==META.external_id_type&&$("#editMe").css({marginTop:"20px"}),$("#editMe").fadeIn("fast")),$('link[rel="canonical"]').attr("href",baseUri()+"/plugins/view?id="+META.id),META.admin_debug_panel&&$("body").append(META.admin_debug_panel);var e=getURLParameter("mode");"page"==e?($("html").css({overflow:"auto"}),$("#appView").css({margin:"5% 15%"})):"scroll"==e?$("html").css({overflow:"auto"}):$("html").css({overflow:"hidden"})}function a(){function e(e){debug()("View received settings, evt is",e);try{var t=JSON.parse(e.data)}catch(e){return debug()("Couldn't json parse data: ",e),!1}var t=JSON.parse(e.data);if("loaded"==t.message){debug()("View received settings loaded. Evt origin is ",e.origin),function n(){window.PARENT_ORIGIN=e.origin,window.IFRAME_INDEX=t.data.iframe_index,"undefined"==typeof APP_MODEL?setTimeout(n,50):APP_MODEL.setLocals({parent_origin:e.origin,iframe_index:t.data.iframe_index,parent_window_height:t.data.parent_window_height,parent_window_width:t.data.parent_window_width})}();var n={message:"viewLoaded",data:{iframe_index:t.data.iframe_index}};parent.postMessage(JSON.stringify(n),e.origin),"undefined"!=typeof APP_VIEW&&APP_VIEW.postSizeToSocket()}if("loadView"==t.message)window.META=t.data.meta,window.GLOBALS=t.data.globals,window.CONTENT=t.data.content,loadView(),window.APP_MODEL.setLocals({parent_origin:e.origin,iframe_index:t.data.iframe_index});else if("showEdit"==t.message)$("#editMe, .adminAppInfo").fadeIn();else if("hideEdit"==t.message)$("#editMe, .adminAppInfo").hide();else if("update"==t.message){APP_MODEL.get("locals");for(var o in t.data.content)if("locals"==o)for(var a in t.data.content.locals)APP_MODEL.attributes.locals[a]=t.data.content.locals[a];else APP_MODEL.attributes[o]=t.data.content[o];APP_VIEW.render()}else"triggerPowrPopupClick"==t.message||"exitDocument"==t.message?APP_VIEW.openModal&&APP_VIEW.openModal(t.message):"platformData"==t.message&&(i(t.data),window.PLATFORM_DATA=t.data)}function t(){$("#editMe").popover({html:!0,trigger:"hover",delay:{hide:850},viewport:{selector:"#apps-view",padding:0},template:'<div class="popover" role="tooltip" style="font-size: 12px;margin-top: 5px;z-index: 10000000;"><div class="arrow"></div><div class="popover-content"></div></div>'})}try{window.APP_SOCKET=new s.Socket({onMessage:function(e){var t=JSON.parse(e);debug()("Message in app:",t),t.action&&"activate"==t.action?$("#editMe").fadeIn():t.action&&"deactivate"==t.action&&$("#editMe").fadeOut()}})}catch(e){debug()("Could not establish socket connection: "+e)}if(window.addEventListener?window.addEventListener("message",e):window.attachEvent("onmessage",e),$(document).on("click","#editMe",function(){"undefined"!=typeof SETTINGS_WINDOW&&SETTINGS_WINDOW.close();var e=Math.round(.9*screen.height),t=Math.round(screen.width-400-.1*screen.width),n="/apps/"+META.app_type+"/settings?id="+META.true_id+"&demo_mode="+META.demo_mode;void 0!=META.template&&(n+="&template="+META.template),window.SETTINGS_WINDOW=window.open(n,"POWr Editor","width=400,height="+e+",top=-1000,left="+t+",location=no,status=no","false")}),void 0==$(window).popover)return void setTimeout(function(){t()},2e3);t(),$(window).on("beforeunload",function(){if(APP_MODEL.get("locals").isDirty)return"You have unsaved work with a POWr Plugin! If you leave this page you will lose any unsaved changes."})}function i(e,t){if(debug()("Trying to load platform data"),"undefined"==typeof APP_MODEL)return void setTimeout(function(){i(e)},100);void 0===t&&(t={render:!0}),debug()("Loading platform data",e);var n=!1,o={};for(var a in e.content)void 0!==APP_MODEL.defaults()[a]&&APP_MODEL.attributes[a]!=e.content[a]&&(debug()("Default key: "+APP_MODEL.defaults()[a]),debug()("Response key: "+e.content[a]),"px"==(APP_MODEL.defaults()[a]+"").slice(-2)&&"px"!=(e.content[a]+"").slice(-2)?(APP_MODEL.attributes[a]=e.content[a]+"px",o[a]=e.content[a]+"px"):(APP_MODEL.attributes[a]=e.content[a],o[a]=e.content[a]),n=!0);n&&t.render&&APP_VIEW.render()}function r(){"undefined"!=typeof WIX_LOCAL_APP_TYPE&&(window.wixLocalAppModel=window[WIX_LOCAL_APP_TYPE+"AppModel"],window.localDevAppModel=wixLocalAppModel,window.wixIeLocalAppModel=wixLocalAppModel),window.VIEW_MODE=Wix.Utils.getViewMode(),"site"!=VIEW_MODE?loadView({use_backup_content:!0}):loadView({use_backup_content:!1}),Wix.addEventListener(Wix.Events.SETTINGS_UPDATED,function(e){debug()("Wix settings updated:",e),APP_MODEL.attributes=e,APP_MODEL.meta.saved=!0,APP_VIEW.render()}),Wix.addEventListener(Wix.Events.SITE_PUBLISHED,function(e){debug()("site published"),APP_MODEL.doSave({post_params:{wix_published:!0}})}),Wix.addEventListener(Wix.Events.COMPONENT_DELETED,function(e){debug()("app deleted"),APP_MODEL.doSave({post_params:{wix_deleted:!0}})}),"site"==VIEW_MODE&&Wix.currentMember(function(e){debug()("member details: ",e),e&&e.email&&setTimeout(function(){deliverHash(e.email)},2e3)})}var s=n(2);window.loadView=function(e){var t=void 0!==e&&void 0!=e.use_backup_content&&e.use_backup_content,n=void 0!==e&&void 0!=e.app_el?e.app_el:$("#appView");for(var a in GLOBALS)window[a]=GLOBALS[a];var r=META.app_type+"AppModel";if(META.soft_alias&&(window[r]=window[META.app_namespace+"AppModel"]),window.APP_MODEL=new window[r],t)for(var a in BACKUP_CONTENT)"undefined"!=BACKUP_CONTENT[a]&&APP_MODEL.set(a,BACKUP_CONTENT[a]);else for(var a in CONTENT)"undefined"!=CONTENT[a]&&APP_MODEL.set(a,CONTENT[a]);APP_MODEL.meta={};for(var a in META)"undefined"!=META[a]&&(APP_MODEL.meta[a]=META[a]);APP_MODEL.afterMount(),META.password_protected_template&&$("body").append(META.password_protected_template),window.APP_VIEW=new window[META.app_namespace+"AppView"]({el:"#"+n.attr("id"),model:APP_MODEL}),$.inArray(META.external_id_type,["weebly-integrated","design-editor","webydo","bookmark","cloudflare"])>-1&&(debug()("Updating through local storage"),setInterval(function(){if("undefined"!=typeof META){var e=localStorage.getItem("powr_data_"+META.id);if(void 0!=e&&null!=e&&"null"!=e){e=JSON.parse(e);APP_MODEL.get("locals");for(var t in e.content)if("locals"==t)for(var n in e.content.locals)APP_MODEL.attributes.locals[n]=e.content.locals[n];else APP_MODEL.attributes[t]=e.content[t];"undefined"!=typeof PLATFORM_DATA&&i(PLATFORM_DATA,{render:!1}),APP_VIEW.render(),localStorage.removeItem("powr_data_"+META.id)}}},100)),o()},$(function(){if($("#apps-view, #apps-facebook_view").length>0&&(loadView(),a()),$("#apps-cached_view").length>0)if(debug()("In apps cached view"),a(),"async"==getURLParameter("load"))debug()("Async loading"),window.LOAD_ME_INTERVAL=setInterval(function(){if("undefined"==typeof META||void 0==META){if("undefined"!=typeof PARENT_ORIGIN&&"undefined"!=typeof IFRAME_INDEX){var e={message:"loadMe",data:{iframe_index:IFRAME_INDEX}};parent.postMessage(JSON.stringify(e),PARENT_ORIGIN)}}else clearInterval(LOAD_ME_INTERVAL)},5e3);else{var e="/plugins/"+APP_DETAILS.slug+"/view.json?";getURLParameter("id")?e+="id="+getURLParameter("id"):getURLParameter("unique_label")?e+="unique_label="+getURLParameter("unique_label")+"&powr_token="+getURLParameter("powr_token")+"&user_label="+getURLParameter("user_label"):e+="powr_token="+getURLParameter("powr_token")+"&user_label="+getURLParameter("user_label"),getURLParameter("external_type")&&(e+="&external_type="+getURLParameter("external_type")),debug()("Calling to get app json. Url is "+e),ajaxController({url:e,type:"GET"},function(e){e.success?(debug()("Success getting view data"),window.META=e.meta,window.GLOBALS=e.globals,window.CONTENT=e.content,loadView()):debug()("Error getting view data")})}if($("#apps-wix_view").length>0&&r(),$("#apps-wix_cached_view").length>0){var e="/plugins/"+APP_DETAILS.slug+"/wix_view.json?"+originalQuery();ajaxController({url:e,type:"GET"},function(e){e.success?(window.META=e.meta,window.GLOBALS=e.globals,window.VIEW_MODE=Wix.Utils.getViewMode(),"site"!=VIEW_MODE?window.BACKUP_CONTENT=e.content:window.CONTENT=e.content,r()):debug()("Error getting wix view data")})}})}},[190]);
//# sourceMappingURL=faq-e0129069b83dd4c6f3ac.js.map