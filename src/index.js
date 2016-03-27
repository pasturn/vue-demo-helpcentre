var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

require('./css/framework7.ios.min.css);


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

var app = new Vue({
    el:"#helpcentre",
    components:{
        'help':require('./app.vue')
    }
});

window.Vue = Vue;

