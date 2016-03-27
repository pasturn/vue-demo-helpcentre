'use strict';
//载入模块
var Vue = require('vue'),
    VueRouter = require('vue-router'),
    VueResource = require('vue-resource'),
    common  = require('./components/app.vue'),
    index = require('./components/index/index.vue'),
    detail = require('./components/detail/detail.vue');
;


Vue.use(VueRouter);         //启用路由模块
Vue.use(VueResource);       //启用AJAX模块

require('./css/sm.css');     //载入样式模块

//高亮关键字方法
Vue.filter('highLight',
    function(value,input){
        if(input){
            var key = new RegExp(input.trim(),'gmi');
            return value.replace(key,"<span style='color:#ff790b'>"+input+"</span>")
        }else {
            return value
        }
    });

var highLight = Vue.filter('highLight');

var App = Vue.extend();

const router = new VueRouter();

router.map({
    '/' : {
        component : common,
        subRoutes : {
            '/' : {
                component : index
            },
            '/detail': {
                component : detail
            }
        }
    }
});

router.start(App,"#app");

window.Vue = Vue;
