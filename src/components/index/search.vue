<template>
    <div class="searchbar">
        <a class="searchbar-cancel">取消</a>
        <div class="search-input">
            <label class="icon icon-search" for="search"></label>
            <input type="search" id='search' placeholder='输入关键字...' v-model="search"/>
        </div>
    </div>
</template>
<script>
    export default {
        props : ['search']
    }
</script>