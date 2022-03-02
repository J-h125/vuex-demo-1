import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false
const store = new Vuex.Store({
  state:{
    count: 0
  },
  getters:{
    doubleCount: function(state){
      return state.count * 2
    }
  },
  mutations:{
    increment: function(state,payload){
      state.count = state.count + payload
    }
  },
  actions:{
    increment(context,payload){
      setTimeout(()=>{
        context.commit('increment',payload)
      },1000)
  
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
