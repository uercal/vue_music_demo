//引入模块
import Vue from 'vue'
import Vuex from 'vuex'
//引入公共状态
import * as actions from './actions'
import * as getters from './getters'
//引入组件状态
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