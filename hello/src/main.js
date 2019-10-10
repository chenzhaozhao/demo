import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import HelloWorld from './view/HelloWorld'
import Deal from './view/Deal'
import Msg from './view/Msg'
import Manage from './view/Manage'
import Work from './view/Work'
import { stat } from 'fs';
Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueRouter)
const store = new Vuex.Store({
  state: {
    tabs: [],//tab列表
    menus: [],//菜单
    count: 2
  },
  mutations: {
    increment(state, playload) {
      state.count++
    },
    push(state, playload) {
      console.log(state, playload)
      if (state.tabs.every((item) => {
        return item.title !== playload.title
      })) {
        state.tabs.push(playload)
      }

    },
    del(state, playload){
      state.tabs.splice(playload,1)
    },
    updateMenu(state, playload) {
      state.menus = playload
    }
  }
})
const routes = [
  { path: '/deal', component: Deal },
  { path: '/work', component: Work },
  { path: '/msg', component: Msg },
  { path: '/manage', component: Manage },
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
