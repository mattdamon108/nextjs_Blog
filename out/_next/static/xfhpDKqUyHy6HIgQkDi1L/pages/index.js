(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+EAN":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),i=n("Wgwc"),s=n.n(i),o=n("IRSK"),u=n.n(o),c=n("0ih7");e.default=function(){u.a.sort(function(t,e){return s()(e.createdAt).unix()-s()(t.createdAt).unix()});var t=u.a;return a.a.createElement(c.default,{posts:t})}},"0ih7":function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),i=n("ikY9");n("JuI/");e.default=function(t){var e=t.posts;return a.a.createElement("div",{id:"content"},a.a.createElement("div",{className:"container"},e&&e.map(function(t){return a.a.createElement(i.a,{key:t.title,post:t})})))}},"0qfS":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index",function(){var t=n("BxMJ");return{page:t.default||t}}])},BxMJ:function(t,e,n){"use strict";n.r(e);var r=n("+EAN");e.default=r.default},IRSK:function(t,e,n){"use strict";t.exports=[{title:"Commands for Postgres DB initial Setup",createdAt:"2019-02-25",filename:"2019-02-25-Commands-for-Postgres-DB-setup",category:["backend"],tag:["postgres","db"],thumb:"2019-02-25_thumb.jpg",slug:"Create DB, TABLE, USER, permission"},{title:"Kill the process using port",createdAt:"2019-03-05",filename:"2019-03-05-Kill-Process-Using-Port",category:["devlogs"],tag:["macos","kill","port"],thumb:"2019-03-05_thumb.jpg",slug:"Kill the process occupying the TCP port in abnormal and unintended way."},{title:"File upload with GraphQL Apollo client & Django + Graphene",createdAt:"2018-08-28",filename:"2018-08-28-File-upload-with-GraphQL-Apollo-Client-Django-Graphene",category:["django"],tag:["django","graphql","graphene","apollo"]},{title:"Nested Comment Reply stucture with ReactJS",createdAt:"2018-08-31",filename:"2018-08-31-Nested-Comment-Reply-sturcture-with-ReactJS",category:["react"],tag:["react","comment"]},{title:"Markdown summary",createdAt:"2018-08-24",filename:"2018-08-24-Markdown-summary",category:["devlogs"],tag:["markdown","summary"]},{title:"First post",createdAt:"2018-08-24",filename:"2018-08-24-First-Post",category:["devlogs"],tag:["first","post"]},{title:"How to set state with data from apollo grapqhQL query",createdAt:"2018-09-08",filename:"2018-09-08-How-to-set-state-with-data-from-graphQL-query",category:["react"],tag:["react","apollo","graphQL"]},{title:"How to Deploy the Next.js app to AWS Lambda",createdAt:"2019-01-11",filename:"2019-01-11-Deploy-Nextjs-app-to-AWS-Lambda",category:["react"],tag:["next","aws","lambda"]},{title:"How to replace the React Redux with Hooks",createdAt:"2019-02-11",filename:"2019-02-11-How-to-Replace-Redux-with-Hooks",category:["react"],tag:["hooks","redux"],thumb:"2019-02-11_thumb.jpg",slug:"React release the game-changer departing from Class programming way."},{title:"AWS Elastic Beanstalk makes redirect HTTP to HTTPS",createdAt:"2018-12-18",filename:"2018-12-18-AWS-EB-Load-Balancer-redirect-to-https",category:["backend"],tag:["aws","eb","elastic","beanstalk","redirect","https"]},{title:"Deploy the Prisma Server to AWS ECS and EC2 with Docker",createdAt:"2018-12-24",filename:"2018-12-24-Deploy-Prisma-Server-to-AWS-with-Docker",category:["backend"],tag:["aws","graphql","prisma","ecs"]},{title:"Making virtualenv for staring Django project on MacOS",createdAt:"2018-08-25",filename:"2018-08-25-Making-virtualenv-for-Django",category:["django"],tag:["django","venv","virtualenv"]},{title:"Some different ways to align element to vertical center",createdAt:"2018-08-30",filename:"2018-08-30-How-to-align-element-to-vertical-center",category:["htmlcss"],tag:["vertical","align"]},{title:"How to highlight code in jekyll post",createdAt:"2018-09-01",filename:"2018-09-01-How-to-highlight-code-in-jekyll",category:["devlogs"],tag:["jekyll","blog"]},{title:"How to connect to wireless WPA2 with Netplan",createdAt:"2018-12-10",filename:"2018-12-10-Netplan-how-to-connect-wpa2-linux",category:["devlogs"],tag:["netplan","linux","wireless"]},{title:"postmaster-pid File Location",createdAt:"2018-09-27",filename:"2018-09-27-postmaster-pid-Location",category:["django"],tag:["postgres","postmaster","db"]}]},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",a="day",i="week",s="month",o="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,c=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},h={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(a,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,s),a=e-r<0,i=t.clone().add(n+(a?-1:1),s);return Number(-(n+(e-r)/(a?r-i:i-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:s,y:o,w:i,d:a,h:r,m:n,s:e,ms:t}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",m={};m[f]=d;var g=function(t){return t instanceof w},p=function(t,e,n){var r;if(!t)return null;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var a=t.name;m[a]=t,r=a}return n||(f=r),r},$=function(t,e,n){if(g(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new w(r)},y=h;y.l=p,y.i=g,y.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u})};var w=function(){function l(t){this.$L=this.$L||p(t.locale,null,!0)||f,this.parse(t)}var h=l.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(u);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return $(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<$(t)},h.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},h.year=function(t){return this.$g(t,"$y",o)},h.month=function(t){return this.$g(t,"$M",s)},h.day=function(t){return this.$g(t,"$W",a)},h.date=function(t){return this.$g(t,"$D","date")},h.hour=function(t){return this.$g(t,"$H",r)},h.minute=function(t){return this.$g(t,"$m",n)},h.second=function(t){return this.$g(t,"$s",e)},h.millisecond=function(e){return this.$g(e,"$ms",t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,u){var c=this,l=!!y.u(u)||u,h=y.p(t),d=function(t,e){var n=y.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf(a)},f=function(t,e){return y.w(c.toDate()[t].apply(c.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,g=this.$M,p=this.$D,$="set"+(this.$u?"UTC":"");switch(h){case o:return l?d(1,0):d(31,11);case s:return l?d(1,g):d(0,g+1);case i:var w=this.$locale().weekStart||0,v=(m<w?m+7:m)-w;return d(l?p-v:p+(6-v),g);case a:case"date":return f($+"Hours",0);case r:return f($+"Minutes",1);case n:return f($+"Seconds",2);case e:return f($+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(i,u){var c,l=y.p(i),h="set"+(this.$u?"UTC":""),d=(c={},c[a]=h+"Date",c.date=h+"Date",c[s]=h+"Month",c[o]=h+"FullYear",c[r]=h+"Hours",c[n]=h+"Minutes",c[e]=h+"Seconds",c[t]=h+"Milliseconds",c)[l],f=l===a?this.$D+(u-this.$W):u;return this.$d[d]&&this.$d[d](f),this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.add=function(t,u){var c,l=this;t=Number(t);var h=y.p(u),d=function(e,n){var r=l.clone().set("date",1).set(e,n+t);return r.set("date",Math.min(l.$D,r.daysInMonth()))},f=function(e){var n=new Date(l.$d);return n.setDate(n.getDate()+e*t),y.w(n,l)};if(h===s)return d(s,this.$M);if(h===o)return d(o,this.$y);if(h===a)return f(1);if(h===i)return f(7);var m=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[h]||1,g=this.valueOf()+t*m;return y.w(g,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),a=this.$locale(),i=a.weekdays,s=a.months,o=function(t,e,n,r){return t&&t[e]||n[e].substr(0,r)},u=function(t){return y.s(e.$H%12||12,t,"0")},l={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:y.s(this.$M+1,2,"0"),MMM:o(a.monthsShort,this.$M,s,3),MMMM:s[this.$M],D:String(this.$D),DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:o(a.weekdaysMin,this.$W,i,2),ddd:o(a.weekdaysShort,this.$W,i,3),dddd:i[this.$W],H:String(this.$H),HH:y.s(this.$H,2,"0"),h:u(1),hh:u(2),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:y.s(this.$m,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):l[t]||r.replace(":","")})},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,u,c){var l,h=y.p(u),d=$(t),f=6e4*(d.utcOffset()-this.utcOffset()),m=this-d,g=y.m(this,d);return g=(l={},l[o]=g/12,l[s]=g,l.quarter=g/3,l[i]=(m-f)/6048e5,l[a]=(m-f)/864e5,l[r]=m/36e5,l[n]=m/6e4,l[e]=m/1e3,l)[h]||m,c?g:y.a(g)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return m[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=p(t,e,!0),n},h.clone=function(){return y.w(this.toDate(),this)},h.toDate=function(){return new Date(this.$d)},h.toJSON=function(){return this.toISOString()},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},l}();return $.prototype=w.prototype,$.extend=function(t,e){return t(e,w,$),$},$.locale=p,$.isDayjs=g,$.unix=function(t){return $(1e3*t)},$.en=m[f],$.Ls=m,$}()},ikY9:function(t,e,n){"use strict";var r=n("Wgwc"),a=n.n(r),i=n("YFqc"),s=n.n(i),o=n("q1tI"),u=n.n(o);e.a=function(t){var e=t.post;return u.a.createElement("div",{key:e.title,className:"post-container"},u.a.createElement("div",{className:"post-img-container",style:{backgroundImage:e.thumb?"url(/static/images/post_img/".concat(e.thumb,")"):"url(/static/images/post_img/dummy_thumb.jpg)"}}),u.a.createElement("div",{className:"post-body"},u.a.createElement("div",{className:"post-title"},u.a.createElement(s.a,{href:"/post/".concat(e.filename)},u.a.createElement("a",null,e.title))),u.a.createElement("div",{className:"post-subtitle"},e.slug),u.a.createElement("div",{className:"post-createdAt"},a()(e.createdAt).format("MMM D, YYYY"))))}}},[["0qfS",1,0,2]]]);