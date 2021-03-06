//引入模块
import Vue from 'vue'

import Vuex from 'vuex'
//引入公共状态
// import * as actions from './actions'
// import * as getters from './getters'
//引入组件状态

// import music from './music/index'

// import $ from '../static/flavr/js/jquery.min.js'
import flavr from '../static/flavr.min.js'
// import jsonp from 'jsonp'
// import qs from 'qs'
// //

const state = {
    is_login: false,
    u_img: '',
    u_name: '',
    ip: '',
    address: '',
    welcome: '',

}

const getters = {
    is_login: state => state.is_login,
    u_img: state => state.u_img,
    u_name: state => state.u_name,
    ip: state => state.ip,
    address: state => state.address,
    welcome: state => state.welcome,
}

const actions = {
    Login: ({ commit }) => {
        let html =
            '<div class="form-row"><input type="text" name="username" placeholder="Username" />' +
            '</div><div class="form-row"><input type="password" name="password" placeholder="Password" />' +
            '</div><div class="form-row"><input type="checkbox" name="remember" id="check"/>' +
            '<label for="check">Remember me</label>' +
            '</div>';
        new flavr({
            title: 'Login',
            iconPath: 'flavr/images/',
            icon: 'user.png',
            content: 'Welcome Back',
            dialog: 'form',
            animateEntrance: 'pulse',
            closeOverlay: true,
            closeEsc: true,
            form: { content: html },
            buttons: {
                Login: {
                    style: 'info',
                    action: function($container, $form) {
                        //- alert($form.serialize());          
                        var data = $form.serializeArray();
                        if (data[0]['value'] == '') {
                            flavr('用户名不能为空!');
                        } else {
                            axios.post('/blog/login', data).then(function(res) {
                                console.log(res)
                                if (res.data.code == 200) {
                                    new flavr({
                                        content: res.data.msg,
                                        autoclose: true,
                                        timeout: 2000,
                                        onShow: function() {

                                        },
                                        onClose: function() {
                                            window.location.reload();
                                        }
                                    })
                                } else {
                                    new flavr(res.data.msg);
                                }
                            })
                        }
                        return false;
                    }
                },
                Cancle: {
                    style: 'danger'
                }
            }
        })
    },
    Regist: ({ commit }) => {
        var html = '<div class="form-row"><input type="text" name="username" placeholder="Username" /></div><div class="form-row"><input type="password" name="password" placeholder="Password"/></div><div class="form-row"><input type="password" name="repassword" placeholder="Password Again"/></div><div class="form-row"><input type="checkbox" name="remember" id="check"/><label for="check">Remember me</label></div>';
        new flavr({
            title: 'Regist',
            iconPath: 'flavr/images/',
            icon: 'user-add.png',
            content: 'Welcome to join us',
            dialog: 'form',
            closeOverlay: true,
            closeEsc: true,
            form: { content: html },
            buttons: {
                Regist: {
                    style: 'info',
                    action: function($container, $form) {
                        //- alert($form.serialize());          
                        var data = $form.serializeArray();
                        if (data[0]['value'] == '') {
                            $.flavr('用户名不能为空!');
                        }
                        if (data[1]['value'] != data[2]['value']) {
                            $.flavr('两次密码不一致!');
                        } else {
                            axios.post('/regist', data).then(function(res) {
                                if (res.data.code == 200) {
                                    new flavr({
                                        content: res.data.msg,
                                        autoclose: true,
                                        timeout: 2000,
                                        buttons: {
                                            done: {
                                                action: function() {
                                                    window.location.reload();
                                                }
                                            }
                                        },
                                        onShow: function() {

                                        },
                                        onClose: function() {
                                            window.location.reload();
                                        }
                                    });
                                } else {
                                    new flavr(res.data.msg);
                                }
                                console.log(res);
                            });
                        }
                        return false;
                    }
                },
                Cancle: {
                    style: 'danger'
                }
            }
        });

    },
    isLogin: ({ commit }) => {
        axios.get('/blog/isLogin').then(res => {
            if (res.data.code == 200) {
                let user = res.data.user
                commit('IS_LOGIN', user)
            } else {
                axios.get('/blog/getIp').then((res) => {
                    let data = { ip: res.data.ip, address: res.data.address, welcome: 'Welcome Customer by:' }
                    commit('IS_CUSTOMER', data)
                })
            }
        }).catch(error => {

        })
    },
    logOut: ({ commit }) => {
        new flavr({
            content: 'Are you sure to logout?',
            dialog: 'confirm',
            onConfirm: function() {
                axios.post('/blog/logOut').then(res => {
                    window.location.reload()
                }).catch(error => {

                })
            },
            onCancel: function() {}
        });

    },
}

//传递给vue需要改变的数据（方法）
const mutations = {
    ['IS_LOGIN'](state, user) {
        state.u_name = user.username
        state.u_img = user.avatar ? user.avatar + '?' + Math.random(1) : '/images/1.jpg'
        state.is_login = true
    },
    ['IS_CUSTOMER'](state, data) {
        state.ip = data.ip
        state.address = data.address
        state.welcome = data.welcome
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