/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');
import Vue from 'vue'
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueRouter from 'vue-router'
// Vue.component('music', require('./components/music.vue'));
// Vue.component('music', require('./components/music.vue'));
// Vue.component('music', require('./components/music.vue'));

// import example from './components/Example.vue';
// import Home from './components/HomeIndex.vue';
import menu from './components/menu.vue';
// 
import router from './router/index';
//store
import store from './store'

require('./static/head/cropper.min.js');
require('./static/head/main.js');
// 
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.use(VueRouter)
    //



const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(menu)
});