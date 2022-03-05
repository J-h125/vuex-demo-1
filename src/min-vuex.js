// state mutation(commit) 功能
import Vue from 'vue'
const Store = function Store(options = {}){
    const {state = {}, mutations = {}} = options
    this._vm = new Vue({
        data:{
            $$state: state
        },
        // computed:{
        //     $$getters : getters
        // }
    }),
    this._mutations = mutations
}
Store.prototype.commit = function(type, payload){
    if(this._mutations[type]){
        this._mutations[type](this.state,payload)
    }
}
Object.defineProperties(Store.prototype,{
    state:{
        get: function(){
            return this._vm._data.$$state
        }
    },
    // getters:{
    //     get: function(){
    //         return this._vm._computed.$$getters
    //     }
    // }
})
export default {Store}
