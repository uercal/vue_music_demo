//引入模块
import Vue from 'vue'

import Vuex from 'vuex'

const state = {
    u_name: '',
    b_img: '',
    is_login: false

}

const getters = {
    u_name: state => state.u_name,
    b_img: state => state.b_img,
    is_login: state => state.is_login,

}

const actions = {
    isLogin: ({ commit }) => {
        axios.get('/blog/isLogin').then(res => {
            if (res.data.code == 200) {
                let user = res.data.user
                commit('IS_LOGIN', user)
            } else {
                // axios.get('/blog/getIp').then((res) => {
                //     let data = { ip: res.data.ip, address: res.data.address, welcome: 'Welcome Customer by:' }
                //     commit('IS_CUSTOMER', data)
                // })
            }
        }).catch(error => {

        })
    },
    overCss: ({ commit }) => {
        // 
        $('div .padding').mouseover(function() {
            $(this).css('opacity', 0.8);
        })
        $('div .padding').mouseout(function() {
            $(this).css('opacity', 0.4);
        })

        //option's display
        $('#option').on('click', function() {
            var options = $('.options');
            if (options.hasClass('hidden')) {
                options.removeClass('hidden');
            } else {
                options.addClass('hidden');
            }
        })

    },
}

//传递给vue需要改变的数据（方法）
const mutations = {
    ['IS_LOGIN'](state, user) {
        state.u_name = user.username
        state.u_img = user.avatar ? user.avatar + '?' + Math.random(1) : '/images/1.jpg'
        state.b_img = user.blog_background
        state.is_login = true
    }
}

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store