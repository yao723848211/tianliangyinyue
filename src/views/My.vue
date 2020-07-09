<template>
    <div>
        我的{{info.name + isLogin}}
        <button @click="login">我的</button>
        <ul>
            <li v-for="(item,i) in list2" :key="i">{{item}}</li>
        </ul>
        <ul>
            <li v-for="(item,i) in billList" :key="i">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "My",
        methods:{
            // login(){
            //     this.$store.commit("setLogin",{
            //         info:{name:"哈啊哈哈"}
            //     })
            // },
            login(){
                this.$store.commit({
                    type:"setLogin",
                    info:{
                        name:"我是啊啊"
                    }
                })
            },
        },
        computed:{
            ...mapState(["info","isLogin","billList"]),
            list2(){
                return this.$store.getters.positiveSequence
            },
        },
        created() {
            this.$store.dispatch("setBillList",{type:2})
        }
    }
</script>

<style scoped>

</style>