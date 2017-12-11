//引入模块
window.Vue = require('vue');

import Vuex from 'vuex'
//引入公共状态
// import * as actions from './actions'
// import * as getters from './getters'
//引入组件状态

// import music from './music/index'
import index from './index/index'

Vue.use(Vuex)

export default new Vuex.Store({
    index,
    // getters,
    // actions
})