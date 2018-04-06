webpackJsonp([10],{16:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),r=t(18),i=t(22),s=t(46),a=t(6),u=t(47),c=t.n(u),l=t(48);t.n(l);o.a.use(a.a),o.a.use(s.a),o.a.use(c.a,{theme:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},options:{themeVariations:["primary","secondary"]}}),o.a.config.productionTip=!1,new o.a({el:"#app",store:a.a,router:i.a,template:"<App/>",components:{App:r.a}})},18:function(e,n,t){"use strict";var o=t(5),r=t(21);var i=function(e){t(19)},s=t(13)(o.a,r.a,!1,i,"data-v-1b14c4e6",null);n.a=s.exports},19:function(e,n){},21:function(e,n,t){"use strict";var o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e.user?e._e():t("div",[t("div",{staticClass:"login-page"},[t("div",{staticClass:"form"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(n){n.target.composing||(e.email=n.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],attrs:{type:"password",placeholder:"pass"},domProps:{value:e.pass},on:{input:function(n){n.target.composing||(e.pass=n.target.value)}}}),e._v(" "),t("button",{on:{click:function(n){e.onSignin(e.email,e.pass)}}},[e._v("login")])])])]),e._v(" "),e.user?t("router-view"):e._e()],1)},staticRenderFns:[]};n.a=o},22:function(e,n,t){"use strict";var o=t(2),r=t(23),i=t(6);o.a.use(r.a);var s=[{path:"/layout",component:function(){return t.e(7).then(t.bind(null,51))},children:[{path:"/profile",component:function(){return t.e(6).then(t.bind(null,52))}},{path:"/hardware",component:function(){return t.e(2).then(t.bind(null,53))}},{path:"/consumables",component:function(){return t.e(3).then(t.bind(null,54))}},{path:"/liveview",component:function(){return t.e(0).then(t.bind(null,55))}},{path:"/schedule",component:function(){return t.e(4).then(t.bind(null,56))}},{path:"/directory",component:function(){return t.e(1).then(t.bind(null,57))}},{path:"/documents",component:function(){return t.e(5).then(t.bind(null,58))}}]},{path:"*",component:function(){return t.e(8).then(t.bind(null,59))}}],a=new r.a({scrollBehavior:function(){return{y:0}},routes:s,mode:"history"});a.beforeEach(function(e,n,t){"/"!==e.path?i.a.getters.user?t():(console.log("There is no user, redirect to login. ("+e.path+")"),t("/")):t()}),n.a=a},25:function(e,n,t){"use strict";var o=t(7),r=t.n(o),i={state:{user:null,isLoggedIn:null},mutations:{setUser:function(e,n){n?(e.user=n.employee,e.user.currentTimeSheet=n.timeClock,e.isLoggedIn=!0):(e.user=null,e.currentTimeSheet=null)},setTimeClock:function(e,n){e.currentTimeSheet=n}},actions:{adjustTimeClock:function(e,n){var t=e.commit;console.log(n.currentTimeSheet),r.a.post("http://104.131.125.97:1880/clock",{id:n.employeeId,notes:n.notes}).then(function(e){console.log(e),t("setTimeClock",e.data.data)}).catch(function(e){console.log(e)})},signUserOut:function(e,n){(0,e.commit)("setLoading",!0)},signUserIn:function(e,n){var t=e.commit;r.a.post("http://104.131.125.97:1880/login",{email:n.email}).then(function(e){console.log(e.data),t("setUser",e.data)})},signUserUp:function(e,n){var t=e.commit;t("setLoading",!0),t("clearError")}},getters:{user:function(e){return e.user},currentTimeSheet:function(e){return e.currentTimeSheet}}};n.a=i},46:function(e,n,t){"use strict";var o=t(7),r=t.n(o);n.a={install:function(e){Object.defineProperty(e.prototype,"$http",{value:r.a}),e.prototype.$api=r.a.create({baseURL:"http://104.131.125.97:1880/api",timeout:8e3})}}},48:function(e,n){},5:function(e,n,t){"use strict";n.a={data:function(){return{email:"",pass:"",devMode:"production"}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(e){null!==e&&void 0!==e&&(console.log(e),this.$router.push("/profile"))}},methods:{onSignin:function(e,n){var t=this;console.log(e,n),window.localStorage.clear(),window.sessionStorage.clear(),this.$store.dispatch("signUserIn",{email:e,password:n}).then(function(){console.log(t.$store.getters.user)})},onDismissed:function(){this.$store.dispatch("clearError")}}}},6:function(e,n,t){"use strict";var o=t(2),r=t(24),i=t(25),s=t(44),a=new(t.n(s).a)({key:"vuex",storage:window.sessionStorage});o.a.use(r.a);var u=new r.a.Store({modules:{auth:i.a},state:{loading:!1,error:null,theme:"dark",onlineUsers:[]},mutations:{setLoading:function(e,n){e.loading=n},setError:function(e,n){e.error=n},clearError:function(e){e.error=null},setOnlineUsers:function(e,n){e.onlineUsers=n}},actions:{loadOnlineUsers:function(e){e.commit},clearError:function(e){(0,e.commit)("clearError")}},getters:{loading:function(e){return e.loading},error:function(e){return e.error},onlineUsers:function(e){return e.onlineUsers},theme:function(e){return e.theme}},plugins:[a.plugin]});n.a=u}},[16]);
//# sourceMappingURL=app.4ad50af7bfaebf49e361.js.map