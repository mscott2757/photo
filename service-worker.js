"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","cced1d3f743cd17f183fda0c50c5ceaf"],["/static/css/main.f295ee65.css","f95e0272acf73177a27a6390e7f9691c"],["/static/js/main.3874ac6b.js","3bd59a79ea0326555d5b77b64fc1ba00"],["/static/media/Circular.6365c40a.otf","6365c40aa59d462f1cc52ccce9635cb4"],["/static/media/bike.d8cf4608.jpg","d8cf460842291064a1e9c1f4d1f5dd21"],["/static/media/caught-before.a9eb7887.jpg","a9eb7887ab361a7ac5388526b8e0941d"],["/static/media/caught.7afc15c7.jpg","7afc15c700bb0646b9e95e822f2139df"],["/static/media/christine.8e7c3b72.jpg","8e7c3b72c05dbfa2c8987ea810ac07dd"],["/static/media/cta-girl.8fe9d518.jpg","8fe9d518d58df6c6fc1097649e623e4f"],["/static/media/deyoung.4d6e78a0.jpg","4d6e78a01571181f0e8b38e7457271ad"],["/static/media/durant.83862967.jpg","838629679100a025731d84f854b6a65c"],["/static/media/fifty-seven.9b0bb1d2.jpg","9b0bb1d26c3586b088e728ae5d161828"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/greenwich.212237f7.jpg","212237f773bc22b9a00a094798909f71"],["/static/media/hands.84211454.jpg","842114541729eedab591c6d1e55e1cb5"],["/static/media/liz.f88e8532.jpg","f88e85329c9f4637a66cf04c3f603d77"],["/static/media/pasadena.982d7557.jpg","982d755786f2a6f2c88229411adf22db"],["/static/media/roof.d2b4f3ef.jpg","d2b4f3efc44c9ffbdd43288ace560bf0"],["/static/media/soho-crossing.80b0dfea.jpg","80b0dfeadd98f5203c6183a915a29402"],["/static/media/soho-woman.394e81ba.jpg","394e81bafdfb05ad2f0c1ee458b5502b"],["/static/media/waves.29fafd87.jpg","29fafd87eb805696006d84dc3c95da46"],["/static/media/waves2.7c6a689f.jpg","7c6a689f6ff2664179a9e4056a9fbd2c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});