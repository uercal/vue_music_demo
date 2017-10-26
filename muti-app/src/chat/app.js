import 'babel-polyfill'
import Vue from 'vue'
import Chat from './components/chat.vue'
import store from './store'


Vue.config.debug = true

Vue.filter('time', timestamp => {
    return new Date(timestamp).toLocaleTimeString()
})

new Vue({
    el: '#app',
    store,
    render: h => h(Chat)
})