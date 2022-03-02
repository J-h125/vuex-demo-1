<template>
  <div id="app">
    加多少：<input v-model="num" type="text">
    <br>
    {{count}}
    <br>
    doubleCount:{{doubleCount}}
    <button @click="add">加1</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      num: 1,
    }
  },
  computed:{
     count:function(){
       return this.$store.state.count
     },
     ...mapGetters({
       doubleCount : 'doubleCount'
     })
  },
  methods: {
    add(){
      console.log('add')
      // this.$store.commit('increment',this.num)
      this.$store.dispatch('increment', Number(this.num))
    }
  }
}
</script>

<style>
</style>
