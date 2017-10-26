import Vue from 'vue'
// 
import Vuex from 'vuex'
// 
import data from '../api/data'
//
import * as getters from './getters'
import * as actions from './actions'

import mutations from './mutations'

Vue.use(Vuex)

const state = {
    currentThreadID: null,
    threads: {

    },
    messages: {

    },
    allmessages: {

    }
}





// 
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})