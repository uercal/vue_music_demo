import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import demo from './modules/demo'
import first from './modules/first'
import second from './modules/second'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        demo,
        first,
        second
    },
    getters,
    actions
})