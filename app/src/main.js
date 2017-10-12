//引入vue  以及 主vue文件
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

//resource or axios
// import VueResource from 'vue-resource';
import Axios from 'axios';

// 引入ui框架
import Element from 'element-ui'
import './assets/theme/index.css'
Vue.use(Element)

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
// Vue.use(VueResource);
Vue.prototype.$http = Axios;


//定义组件
const play = { template: '<div><h1>This is Play</h1></div>' }
import firstComponent from './components/firstComponent.vue'
import secComponent from './components/secComponent.vue'



//创建路由实例  
//配置路由规则


const router = new VueRouter({
    //hash(支持所有浏览器) history(依赖h5_api和服务器配置) 
    //abstract:支持所有JavaScript运行环境,如Node.js服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式。
    mode: 'history', //hash,history,abstract
    base: __dirname, //应用基路径
    routes: [{
            path: '/play',
            component: play
        },
        {
            path: '/first',
            component: firstComponent
        },
        {
            path: '/second',
            component: secComponent
        }
    ]
})


//启动应用
//创建app实例
const app = new Vue({
    router: router,
    render: h => h(App) //渲染
}).$mount('#app');