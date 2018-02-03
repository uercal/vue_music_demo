import VueRouter from 'vue-router'

import index from '../components/index'
import detail from '../components/detail'

const router = new VueRouter({
    mode: 'hash',
    base: __dirname, //应用基路径
    routes: [
        { path: '/', component: index },
        { path: '/detail/:id', component: detail },
        // { path: '/portfolio', component: portfolio },
        // { path: '/about', component: about },

        // { path: '/login', component: Login },
        // {
        //     path: '/logout',
        //     beforeEnter(to, from, next) {
        //         auth.logout()
        //         next('/')
        //     }
        // }
    ]
})

// 
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

export default router