import axios from 'axios'
import flavr from '../../static/flavr/js/flavr.min.js'
// import jsonp from 'jsonp'
// import qs from 'qs'
// //

const state = {

}

const getters = {

}

const actions = {
    Login: () => {
        let html = '<div class="form-row"><input type="text" name="username" placeholder="Username" /></div><div class="form-row"><input type="password" name="password" placeholder="Password" /></div><div class="form-row"><input type="checkbox" name="remember" id="check"/><label for="check">Remember me</label></div>';
        new $.flavr({
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
                            $.flavr('用户名不能为空!');
                        } else {
                            $.post('/login', data, function(res) {
                                if (res.state) {
                                    $.flavr({
                                        content: res.msg,
                                        autoclose: true,
                                        timeout: 2000,
                                        onShow: function() {
                                            window.location.reload();
                                        },
                                        onClose: function() {
                                            window.location.reload();
                                        }
                                    })
                                } else {
                                    $.flavr(res.msg);
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
    Regist: () => {
        console.log('register');
    }
}

//传递给vue需要改变的数据（方法）
const mutations = {

}

export default {
    state,
    actions,
    mutations,
    getters
}