<template>
    <div>
<!--        首页-->
       <BillList title="今日榜单" :size="6" type="2"></BillList>
       <BillList title="新歌速递" :size="3" type="1"></BillList>

        <Swiper></Swiper>

        <MusicBill></MusicBill>
        <BillList title="热门榜单" :size="6" type="24"></BillList>

    </div>
</template>

<script>
    import BillList from "../components/BillList";
    import MusicBill from "../components/MusicBill";
    import Swiper from "../components/Swiper";
    // import MoreMusic from "./MoreMusic";

    export default {
        name: "Index",
        components:{
            BillList,MusicBill,Swiper,
        }
    }
</script>

<style scoped>

</style>