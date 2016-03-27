<template>
    <header class="bar bar-nav">
        <bar-nav></bar-nav>
    </header>

</template>

<script>
    export default {
        components : {
            'bar-nav' : require("./../common/header.vue"),
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
