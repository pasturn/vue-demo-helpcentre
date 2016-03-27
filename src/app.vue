<template>
    <header class="bar bar-nav">
        <bar-nav></bar-nav>
    </header>
    <div class="bar bar-header-secondary">
        <search :search.sync="keyword"></search>
    </div>
    <div class="content" data-distance="100" >
            <content  :keyword ="keywords"></content>
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
