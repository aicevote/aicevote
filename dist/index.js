!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("axios")):"function"==typeof define&&define.amd?define(["axios"],e):"object"==typeof exports?exports.aicevote=e(require("axios")):t.aicevote=e(t.axios)}(this,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(3));e.default=o.default.create({baseURL:"https://api.aicevote.com",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},responseType:"json"})},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(2)),r(n(4)),r(n(5)),r(n(6)),r(n(7))},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=i(n(0));e.getSessionToken=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.get("/auth/sessiontoken?sessionid="+t)];case 1:return[2,e.sent().data.sessionToken]}}))}))}},function(e,n){e.exports=t},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=i(n(0));e.getAllThemes=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,u.default.get("/themes")];case 1:return[2,t.sent().data]}}))}))},e.getTheme=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.get("/themes/"+t)];case 1:return[2,e.sent().data]}}))}))},e.postFeedback=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.post("/feedback?message="+t)];case 1:return e.sent(),[2]}}))}))},e.postApplication=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.post("/application?message="+t)];case 1:return e.sent(),[2]}}))}))}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=i(n(0));e.getAllArticles=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,u.default.get("/news/articles")];case 1:return[2,t.sent().data]}}))}))},e.getRelatedArticles=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.get("/news/articles/"+t)];case 1:return[2,e.sent().data.articles]}}))}))}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=i(n(0));e.getMyProfile=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.get("/user/profiles/?sessiontoken="+t)];case 1:return[2,e.sent().data]}}))}))},e.getProfiles=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.post("/user/profiles",t)];case 1:return[2,e.sent().data]}}))}))},e.getProfile=function(t,e){return r(this,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,u.default.get("/user/"+t+"/"+e)];case 1:return[2,n.sent().data]}}))}))}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{s(r.next(t))}catch(t){i(t)}}function a(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=i(n(0));e.getAllResults=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,u.default.get("/vote/results")];case 1:return[2,t.sent().data]}}))}))},e.getResult=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.get("/vote/results/"+t)];case 1:return[2,e.sent().data]}}))}))},e.getAllVotes=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.get("/vote/votes?sessiontoken="+t)];case 1:return[2,e.sent().data.map((function(t){return t.votes.concat(t.votesFromInfluencer)}))]}}))}))},e.getVotes=function(t,e){return r(this,void 0,void 0,(function(){var n;return o(this,(function(r){switch(r.label){case 0:return[4,u.default.get("/vote/votes/"+t+"?sessiontoken="+e)];case 1:return[2,(n=r.sent().data).votes.concat(n.votesFromInfluencer)]}}))}))},e.vote=function(t,e,n){return r(this,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:return[4,u.default.put("/vote/votes/"+t+"?sessiontoken="+e+"&answer="+n)];case 1:return[2,(r=o.sent().data).votes.concat(r.votesFromInfluencer)]}}))}))},e.getAllTransitions=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,u.default.get("/vote/transitions")];case 1:return[2,t.sent().data]}}))}))},e.getTransition=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.get("/vote/transitions/"+t)];case 1:return[2,e.sent().data]}}))}))},e.getAllComments=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,u.default.get("/vote/comments")];case 1:return[2,t.sent().data.map((function(t){return t.comments}))]}}))}))},e.getComments=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,u.default.get("/vote/comments/"+t)];case 1:return[2,e.sent().data.comments]}}))}))},e.comment=function(t,e,n){return r(this,void 0,void 0,(function(){return o(this,(function(r){switch(r.label){case 0:return[4,u.default.post("/vote/comments/"+t+"?sessiontoken="+e+"&message="+n)];case 1:return[2,r.sent().data.comments]}}))}))}}])}));