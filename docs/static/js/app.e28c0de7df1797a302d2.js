webpackJsonp([1],{"3sld":function(t,e){},E2zN:function(t,e){},KhRP:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark ",staticStyle:{"background-color":"#E81E3C"}},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Colegio de Ingenieros cd Puno")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Chat")]),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("(current)")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/contador"}},[t._v("Contador")])],1)]),t._v(" "),n("span",{staticClass:"navbar-text"},[t._v("\n      Procura lavarte bien las manos y contar con los implementos de proteccion\n    ")])])])]),t._v(" "),n("div",{staticClass:"container",attrs:{id:"app"}},[n("img",{attrs:{src:"https://waready.github.io/chat-ventanilla/static/img/logo.8982791.png"}}),t._v(" "),n("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var r=n("VU/8")({name:"App"},a,!1,function(t){n("Veps")},null,null).exports,o=n("/ocq"),i=n("Dd8w"),c=n.n(i),u=n("NYxO"),l={name:"counter",methods:{increment:function(){this.$store.dispatch("sokect_increment")},decrement:function(){this.$store.dispatch("sokect_decrement")}},computed:c()({},Object(u.c)(["count"]))},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"counter"},[n("div",{staticClass:"col-md-8 offset-md-2 card"},[n("div",{staticClass:"card-block"},[n("h3",{staticClass:"text-center"},[t._v("\n                Prueva servidor (Contador)\n            ")]),t._v(" "),n("hr"),t._v(" "),n("button",{staticClass:"btn btn-block btn-info",on:{click:t.increment}},[t._v("\n                Incrementar\n            ")]),t._v(" "),n("h4",{staticClass:"text-center"},[t._v(" "+t._s(t.count))]),t._v(" "),n("button",{staticClass:"btn btn-block btn-info",on:{click:t.decrement}},[t._v("\n                Decrementar\n            ")])])])])},staticRenderFns:[]};var m=n("VU/8")(l,d,!1,function(t){n("3sld")},null,null).exports,v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("h2",{staticClass:"text-center"},[t._v("\n                    Entrar al chat con tu DNI:\n                ")]),t._v(" "),t.$store.state.chatModule.exists?n("span",{staticClass:"alert alert-danger"},[t._v("\n                    Usuario ya existe\n                ")]):t._e(),t._v(" "),n("div",{staticClass:"modal-header"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return t.$emit("login",t.username)}}},[t._v("\n                        Login\n                    ")])])])])])])},staticRenderFns:[]};var _=n("VU/8")({name:"loguin-modal",data:function(){return{username:""}}},v,!1,function(t){n("KhRP")},null,null).exports,p={name:"users-sidebar",computed:c()({},Object(u.c)(["users","username"]))},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-sidebar"},[n("div",{staticClass:"card"},[t.users?n("ul",[n("li",[t._v("Usuarios Conectados")]),t._v(" "),n("hr"),t._v(" "),t._l(t.users,function(e){return n("li",[e===t.username?n("b",[t._v(t._s(e))]):n("span",[t._v("\n                    "+t._s(e)+"\n                ")])])})],2):n("p",[t._v("\n            Ningun usuario Conectado\n        ")])]),t._v(" "),n("br"),t._v(" "),n("a",{staticClass:"btn btn-block btn-danger",attrs:{href:"/"}},[t._v(" Salir")])])},staticRenderFns:[]};var g={components:{LoginModal:_,UsersSidebar:n("VU/8")(p,f,!1,function(t){n("E2zN")},null,null).exports},data:function(){return{message:"",disable:!1}},methods:c()({},Object(u.b)(["socket_login","socket_new_message"]),{processLogin:function(t){this.socket_login(t)},sendMessage:function(){this.socket_new_message(this.message),this.message=""}}),computed:c()({},Object(u.c)(["chat","username","exists"]))},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat"},[!t.username||t.exists?n("login-modal",{on:{login:function(e){return t.processLogin(e)}}}):t._e(),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-9"},[t.username?n("h3",[t._v("\n                Bienvenido "+t._s(t.username)+"!\n            ")]):t._e(),t._v(" "),n("div",{staticClass:"col card"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage(e)}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control",attrs:{required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"btn btn-block btn-success",attrs:{type:"submit"}},[t._v("Enviar mensaje")])]),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"col-md-12"},[n("ul",t._l(t.chat,function(e){return n("li",[1==e.id?n("p",{staticClass:"alert alert-info"},[t._v("\n                                "+t._s(e.message)+"\n                            ")]):2==e.id?n("p",{staticClass:"alert alert-success"},[t._v("\n                                "+t._s(e.message)+"\n                            ")]):n("p",{staticClass:"alter alert-danger"},[t._v("\n                                "+t._s(e.message)+"\n                            ")])])}),0)])])]),t._v(" "),n("div",{staticClass:"col-3"},[n("users-sidebar")],1)])],1)},staticRenderFns:[]};var C=n("VU/8")(g,b,!1,function(t){n("wWNx")},null,null).exports;s.a.use(o.a);var h=new o.a({routes:[{path:"/",name:"chat",component:C},{path:"/contador",name:"contador",component:m}]}),E={state:{count:0},mutations:{SOCKET_COUNTER_INCREMENT:function(t,e){t.count=e},SOCKET_COUNTER_DECREMENT:function(t,e){t.count=e}},actions:{sokect_increment:function(t){var e=t.state;t.rootState.io.emit("increment",e.count)},sokect_decrement:function(t){var e=t.state;t.rootState.io.emit("decrement",e.count)}},getters:{count:function(t){return t.count}}},k={state:{chat:[],users:[],username:null,exists:!1},actions:{socket_new_message:function(t,e){t.rootState.io.emit("newMessage",e)},socket_login:function(t,e){t.rootState.io.emit("login",e)}},mutations:{SOCKET_NEW_MESSAGE:function(t,e){t.chat.push({id:1,message:e})},SOCKET_LOGIN:function(t,e){t.users=e.users,t.username=e.username},SOCKET_USER_EXISTS:function(t){t.exists=!0},SOCKET_USER_JOINED:function(t,e){t.users=e.users,t.chat.push({id:2,message:"Usuario "+e.username+" ha entrado en la sala"})},SOCKET_USER_LEFT:function(t,e){t.users=e.users,t.chat.push({id:3,message:"Usuario "+e.username+" ha abandonado la sala"}),t.chat=[]}},getters:{chat:function(t){return t.chat},username:function(t){return t.username},users:function(t){return t.users},exists:function(t){return t.exists}}},x=n("HI0L"),S=n.n(x);s.a.use(u.a);var O=new u.a.Store({state:{io:{}},mutations:{setSocket:function(t,e){t.io=e,console.log("socket connectado")}},modules:{counterModule:E,chatModule:k}});s.a.use(new S.a({debug:!0,connection:"http://152.44.38.16/",vuex:{store:O,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),s.a.config.productionTip=!1,new s.a({el:"#app",store:O,beforeCreate:function(){O.commit("setSocket",this.$socket)},router:h,components:{App:r},template:"<App/>"})},Veps:function(t,e){},wWNx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e28c0de7df1797a302d2.js.map