(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0add5e88"],{"14c3":function(e,t,n){var r=n("da84"),c=n("c65b"),o=n("825a"),u=n("1626"),a=n("c6b6"),i=n("9263"),f=r.TypeError;e.exports=function(e,t){var n=e.exec;if(u(n)){var r=c(n,e,t);return null!==r&&o(r),r}if("RegExp"===a(e))return c(i,e,t);throw f("RegExp#exec called on incompatible receiver")}},"25f0":function(e,t,n){"use strict";var r=n("5e77").PROPER,c=n("cb2d"),o=n("825a"),u=n("577e"),a=n("d039"),i=n("90d8"),f="toString",s=RegExp.prototype,l=s[f],d=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),p=r&&l.name!=f;(d||p)&&c(RegExp.prototype,f,(function(){var e=o(this),t=u(e.source),n=u(i(e));return"/"+t+"/"+n}),{unsafe:!0})},"2c3e":function(e,t,n){var r=n("da84"),c=n("83ab"),o=n("9f7f").MISSED_STICKY,u=n("c6b6"),a=n("edd0"),i=n("69f3").get,f=RegExp.prototype,s=r.TypeError;c&&o&&a(f,"sticky",{configurable:!0,get:function(){if(this!==f){if("RegExp"===u(this))return!!i(this).sticky;throw s("Incompatible receiver, RegExp required")}}})},"346e":function(e,t,n){},"44e7":function(e,t,n){var r=n("861d"),c=n("c6b6"),o=n("b622"),u=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[u])?!!t:"RegExp"==c(e))}},"466d":function(e,t,n){"use strict";var r=n("c65b"),c=n("d784"),o=n("825a"),u=n("50c4"),a=n("577e"),i=n("1d80"),f=n("dc4a"),s=n("8aa5"),l=n("14c3");c("match",(function(e,t,n){return[function(t){var n=i(this),c=void 0==t?void 0:f(t,e);return c?r(c,t,n):new RegExp(t)[e](a(n))},function(e){var r=o(this),c=a(e),i=n(t,r,c);if(i.done)return i.value;if(!r.global)return l(r,c);var f=r.unicode;r.lastIndex=0;var d,p=[],v=0;while(null!==(d=l(r,c))){var g=a(d[0]);p[v]=g,""===g&&(r.lastIndex=s(c,u(r.lastIndex),f)),v++}return 0===v?null:p}]}))},"498a":function(e,t,n){"use strict";var r=n("23e7"),c=n("58a8").trim,o=n("c8d2");r({target:"String",proto:!0,forced:o("trim")},{trim:function(){return c(this)}})},"4d63":function(e,t,n){var r=n("83ab"),c=n("da84"),o=n("e330"),u=n("94ca"),a=n("7156"),i=n("9112"),f=n("241c").f,s=n("3a9b"),l=n("44e7"),d=n("577e"),p=n("90d8"),v=n("9f7f"),g=n("aeb0"),b=n("cb2d"),h=n("d039"),x=n("1a2d"),E=n("69f3").enforce,m=n("2626"),R=n("b622"),w=n("fce3"),y=n("107c"),O=R("match"),j=c.RegExp,k=j.prototype,S=c.SyntaxError,I=o(k.exec),D=o("".charAt),P=o("".replace),A=o("".indexOf),B=o("".slice),T=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,_=/a/g,C=/a/g,N=new j(_)!==_,V=v.MISSED_STICKY,Y=v.UNSUPPORTED_Y,q=r&&(!N||V||w||y||h((function(){return C[O]=!1,j(_)!=_||j(C)==C||"/a/i"!=j(_,"i")}))),J=function(e){for(var t,n=e.length,r=0,c="",o=!1;r<=n;r++)t=D(e,r),"\\"!==t?o||"."!==t?("["===t?o=!0:"]"===t&&(o=!1),c+=t):c+="[\\s\\S]":c+=t+D(e,++r);return c},K=function(e){for(var t,n=e.length,r=0,c="",o=[],u={},a=!1,i=!1,f=0,s="";r<=n;r++){if(t=D(e,r),"\\"===t)t+=D(e,++r);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:I(T,B(e,r+1))&&(r+=2,i=!0),c+=t,f++;continue;case">"===t&&i:if(""===s||x(u,s))throw new S("Invalid capture group name");u[s]=!0,o[o.length]=[s,f],i=!1,s="";continue}i?s+=t:c+=t}return[c,o]};if(u("RegExp",q)){for(var M=function(e,t){var n,r,c,o,u,f,v=s(k,this),g=l(e),b=void 0===t,h=[],x=e;if(!v&&g&&b&&e.constructor===M)return e;if((g||s(k,e))&&(e=e.source,b&&(t=p(x))),e=void 0===e?"":d(e),t=void 0===t?"":d(t),x=e,w&&"dotAll"in _&&(r=!!t&&A(t,"s")>-1,r&&(t=P(t,/s/g,""))),n=t,V&&"sticky"in _&&(c=!!t&&A(t,"y")>-1,c&&Y&&(t=P(t,/y/g,""))),y&&(o=K(e),e=o[0],h=o[1]),u=a(j(e,t),v?this:k,M),(r||c||h.length)&&(f=E(u),r&&(f.dotAll=!0,f.raw=M(J(e),n)),c&&(f.sticky=!0),h.length&&(f.groups=h)),e!==x)try{i(u,"source",""===x?"(?:)":x)}catch(m){}return u},U=f(j),$=0;U.length>$;)g(M,j,U[$++]);k.constructor=M,M.prototype=k,b(c,"RegExp",M,{constructor:!0})}m("RegExp")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("e330"),c=n("1d80"),o=n("577e"),u=n("5899"),a=r("".replace),i="["+u+"]",f=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),l=function(e){return function(t){var n=o(c(t));return 1&e&&(n=a(n,f,"")),2&e&&(n=a(n,s,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"90d8":function(e,t,n){var r=n("c65b"),c=n("1a2d"),o=n("3a9b"),u=n("ad6d"),a=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in a||c(e,"flags")||!o(a,e)?t:r(u,e)}},a272:function(e,t,n){"use strict";n.r(t);n("498a"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("4de4"),n("d3b7"),n("466d");var r=n("7a23"),c=n("3c34"),o=n("be89"),u=n("5502"),a={class:"result"},i={__name:"result",setup:function(e){var t=Object(u["b"])(),n=Object(r["computed"])((function(){return t.state.totalPlugins})),i=Object(r["computed"])((function(){return t.state.searchValue})),f=Object(r["computed"])((function(){if(i.value.trim().length>0){var e=new RegExp(i.value);return n.value.filter((function(t){return!!t.pluginName.match(e)}))}return n.value}));return function(e,t){var n=Object(r["resolveComponent"])("Vue3Lottie"),u=Object(r["resolveComponent"])("a-result");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["unref"])(f)&&Object(r["unref"])(f).length?(Object(r["openBlock"])(),Object(r["createBlock"])(o["a"],{key:0,onDownloadSuccess:e.downloadSuccess,title:e.$t("feature.market.searchResult"),list:Object(r["unref"])(f)},null,8,["onDownloadSuccess","title","list"])):(Object(r["openBlock"])(),Object(r["createBlock"])(u,{key:1,class:"error-content","sub-title":"哎呀，暂时还没有这个插件哟！"},{icon:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(n,{animationData:Object(r["unref"])(c),height:240,width:240},null,8,["animationData"])]})),_:1}))])}}};n("c2d89");const f=i;t["default"]=f},c2d89:function(e,t,n){"use strict";n("346e")},c607:function(e,t,n){var r=n("da84"),c=n("83ab"),o=n("fce3"),u=n("c6b6"),a=n("edd0"),i=n("69f3").get,f=RegExp.prototype,s=r.TypeError;c&&o&&a(f,"dotAll",{configurable:!0,get:function(){if(this!==f){if("RegExp"===u(this))return!!i(this).dotAll;throw s("Incompatible receiver, RegExp required")}}})},c8d2:function(e,t,n){var r=n("5e77").PROPER,c=n("d039"),o=n("5899"),u="​᠎";e.exports=function(e){return c((function(){return!!o[e]()||u[e]()!==u||r&&o[e].name!==e}))}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),c=n("cb2d"),o=n("9263"),u=n("d039"),a=n("b622"),i=n("9112"),f=a("species"),s=RegExp.prototype;e.exports=function(e,t,n,l){var d=a(e),p=!u((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),v=p&&!u((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[f]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!p||!v||n){var g=r(/./[d]),b=t(d,""[e],(function(e,t,n,c,u){var a=r(e),i=t.exec;return i===o||i===s.exec?p&&!u?{done:!0,value:g(t,n,c)}:{done:!0,value:a(n,t,c)}:{done:!1}}));c(String.prototype,e,b[0]),c(s,d,b[1])}l&&i(s[d],"sham",!0)}},edd0:function(e,t,n){var r=n("13d2"),c=n("9bf2");e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),c.f(e,t,n)}}}]);