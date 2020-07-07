<template>
    <div class="swiper">
        <!--        轮播图的组件-->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item><img src="../assets/b1.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../assets/b2.jpg" alt=""></van-swipe-item>
            <van-swipe-item><img src="../assets/b3.jpg" alt=""></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "Swiper"
    }
</script>

<style scoped lang="less">
    .swiper {
        img {
            width: 100%;
        }

    }


</style>