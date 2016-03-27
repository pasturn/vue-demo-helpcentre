<template>
    <header class="bar bar-nav">
        <bar-nav></bar-nav>
    </header>
    <router-view :pageanswer="faq"></router-view>
    <!--<div class="content infinite-scroll infinite-scroll-bottom">-->
        <!--<list  :keyword ="keywords"></list>-->
    <!--</div>-->
</template>

<script>
    export default {
        data:function(){
            return {
                faq:{}
            }
        },
        components : {
            'bar-nav' : require("./common/header.vue")
        },
        events:{
            'answerpage' : function (faq) {
                this.$set('faq',faq);
            }
        }
    };
</script>
