import Vue from 'vue'
//组件
import second from './component/second.vue'
//store
import store from './store'

//引入UI
import Element from 'element-ui'
import '../assets/theme/index.css'
Vue.use(Element);



Vue.config.productionTip = false



new Vue({
    el: '#app',
    store,
    render: h => h(second)
})