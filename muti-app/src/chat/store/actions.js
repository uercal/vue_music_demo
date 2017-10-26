//
export const getAllMessages = ({ commit }) => {
    commit('GET_ALL')
}

//
export const switchThread = ({ commit }, tid) => {
    commit('CHANGE_THREAD', tid)
}

//
export const addMessage = ({ commit }, data) => {
    commit('ADD_MESSAGE', data)
}