<template>
    <div>
        <!--        音乐榜单-->
        <h3>音乐榜单<router-link tag="span" :to="'/index/more/'+type" class="Bill-title">更多</router-link></h3>
        <van-tabs v-model="active">
            <van-tab title="新歌榜">
                <MusicList :type="1"></MusicList>
            </van-tab>
            <van-tab title="热歌榜">
                <MusicList :type="2"></MusicList>
            </van-tab>
            <van-tab title="摇滚榜">
                <MusicList :type="11"></MusicList>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>

    import MusicList from "./MusicList";

    export default {
        components: {
            MusicList,
        },
        name: "MusicBill",
        data() {
            return {
                active: 0,
                type:"",
            };
        },
    }
</script>

<style scoped lang="less">
    h3 {
        margin: 10px 0;
        span {
            float: right;
            font-size: 14px;
            color: #999999;
        }
    }
</style>