// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import counterModule from '@/modules/counter';
import chatModule from '@/modules/chat';

import Vuex from 'vuex';
Vue.use(Vuex);

import VueSocketIO from 'vue-socket.io'
 


const store = new Vuex.Store({
  state:{
    io:{}
  },
  mutations:{
    setSocket:(state, socket) =>{
      state.io = socket;
      console.log('socket connectado');
    }
  },
  modules:{
    counterModule,
    chatModule
  }
});

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5000', //options object is Optional
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_"
  }
})
);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  beforeCreate() {
    store.commit('setSocket',this.$socket);

  },
  router,
  components: { App },
  template: '<App/>'
})
