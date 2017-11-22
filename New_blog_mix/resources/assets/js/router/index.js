import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    routes: [{
            name: 'music',
            path: '/music',
            component: resolve => void(require(['../components/music.vue'], resolve))
        },
        {
            name: 'chat',
            path: '/chat',
            component: resolve => void(require(['../components/chat.vue'], resolve))
        },
        {
            name: 'home',
            path: '/',
            component: resolve => void(require(['../components/HomeIndex.vue'], resolve))
        }
    ]
});