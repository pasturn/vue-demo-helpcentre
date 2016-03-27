<template>
    <header class="bar bar-nav">
        <bar-nav></bar-nav>
    </header>
    <div class="bar bar-header-secondary">
        <search :search.sync="keyword"></search>
    </div>
    <div class="content infinite-scroll infinite-scroll-bottom" data-distance="100" >
        <content  :keyword ="keywords"></content>
        <!-- 加载提示符 -->
    </div>
</template>

<script>
    export default {
        components : {
            'bar-nav' : require("./components/header.vue"),
            'search' : require("./components/search.vue"),
            'content' : require("./components/content.vue")
        },
        data : function(){
            return {
                keyword:''
            }
        },
        computed : {
            keywords : function(){
                return this.keyword
            }
        }
    };
</script>
