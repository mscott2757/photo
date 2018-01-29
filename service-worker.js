"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f1e14d1a704491b253bc4cd54455d8f3"],["/static/css/main.b0326a9f.css","ee684209517811ea29d90a9a2a0f799a"],["/static/js/main.a0f2b5a3.js","ab2c536f49da3df05286fc0825d1706a"],["/static/media/Circular.6365c40a.otf","6365c40aa59d462f1cc52ccce9635cb4"],["/static/media/accordian.59c9caf4.jpg","59c9caf427b11b7d3e72dc3b5bc17d0e"],["/static/media/bike.d8cf4608.jpg","d8cf460842291064a1e9c1f4d1f5dd21"],["/static/media/birhakeim.edb01232.jpg","edb0123256cd41c6aa05c809836cd7fe"],["/static/media/canal.c6381649.jpg","c6381649717650a81be1bf81ce3c3e49"],["/static/media/canalcouple.3d945e21.jpg","3d945e21ed011c39ed1d02b460db4c01"],["/static/media/caught.7afc15c7.jpg","7afc15c700bb0646b9e95e822f2139df"],["/static/media/christine.8e7c3b72.jpg","8e7c3b72c05dbfa2c8987ea810ac07dd"],["/static/media/cta-girl.8fe9d518.jpg","8fe9d518d58df6c6fc1097649e623e4f"],["/static/media/deyoung.4d6e78a0.jpg","4d6e78a01571181f0e8b38e7457271ad"],["/static/media/durant.83862967.jpg","838629679100a025731d84f854b6a65c"],["/static/media/fifty-seven.9b0bb1d2.jpg","9b0bb1d26c3586b088e728ae5d161828"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/fumer.6daf862a.jpg","6daf862a74e20b28c208b10c783bf05d"],["/static/media/greenwich.212237f7.jpg","212237f773bc22b9a00a094798909f71"],["/static/media/pompidou.ae778bd3.jpg","ae778bd313789d77bef9323dc8be1566"],["/static/media/soho-crossing.80b0dfea.jpg","80b0dfeadd98f5203c6183a915a29402"],["/static/media/soho-woman.394e81ba.jpg","394e81bafdfb05ad2f0c1ee458b5502b"],["/static/media/subway.ee6856fd.jpg","ee6856fdb53bd303f84359820376456d"],["/static/media/waves.29fafd87.jpg","29fafd87eb805696006d84dc3c95da46"],["/static/media/waves2.7c6a689f.jpg","7c6a689f6ff2664179a9e4056a9fbd2c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});