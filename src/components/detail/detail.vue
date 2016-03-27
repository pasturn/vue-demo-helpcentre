<template>
    <div class="content">
        <div class="content-block">
            <h3 v-text="pageanswer.title"></h3>
            <p v-html="pageanswer.answer"></p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['pageanswer']
    }
</script>
