const state = {
    count: 0,
    history: []
}

const getters = {
    count_first: state => state.count,
    recentHistory: state => {
        const end = state.history.length
        const begin = end - 5 < 0 ? 0 : end - 5
        return state.history
            .slice(begin, end)
            .toString()
            .replace(/,/g, ', ')
    }
}


//mua
const mutations = {
    increment: state => {
        state.count++
            state.history.push('increment')
    },

    decrement: state => {
        state.count--
            state.history.push('decrement')
    }
}



//action 
const actions = {
    increment_first: ({ commit }) => commit('increment'),
    decrement_first: ({ commit }) => commit('decrement'),

    incrementIfOdd_first: ({ commit, state }) => {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },

    incrementAsync_first: ({ commit }) => {
        setTimeout(() => {
            commit('increment')
        }, 1000)
    }
}


export default {
    state,
    getters,
    mutations,
    actions
}