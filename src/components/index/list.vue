<template>
    <div class="content-block-title">相关问题</div>
    <div class="list-block" id="help-list">
        <ul class="list-container">
            <li v-for="faq in faqs | filterBy keyword in 'q' 'a'" >
                <a href="" class=" item-link">
                    <div class="item-content">
                        <div class="item-inner">
                            <div class="item-title" v-html="faq.q | highLight keyword"></div>
                        </div>
                    </div>
                </a>
                <!--<div class="well">-->
                <!--<small v-html="faq.a | highLight keyword" ></small>-->
                <!--</div>-->
            </li>
        </ul>
    </div>
    <div class="content-block-inner">
        <p></p>
    </div>
</template>
<script>
    export default {
        props:['keyword'],
        data : function (){
            return {
                'faqs' : ''
            }
        },
        ready:function(){

            // GET request
            this.$http.get('./data/faq.json', function (data, status, request) {
                var faqData = data;
                // set data on vm
                this.$set('faqs', faqData.faqs)

            }).catch(function (data, status, request) {
                return "Data Error";
                // handle error
            })

        }

    }
</script>