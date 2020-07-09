<template>
    <div class="singer-container">
        <SingerItem v-for="item in singeTypeList" :tinguid="item" :key="item" class="singer-item"></SingerItem>
    </div>
</template>

<script>
    import SingerItem from "../components/SingerItem";

    export default {
        name: "Singer",
        data(){
            return {
                singeTypeList:[2517  ,7994,1091,45561,2507,245815,1077,1204,1117,82366]
            }

        },
        components:{
            SingerItem
        }
    }
</script>

<style scoped lang="less">
    .singer-container{
        margin-top:15px;
        .singer-item{
            padding: 3px 15px;
        }
    }
</style>