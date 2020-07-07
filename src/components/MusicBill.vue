<template>
    <div>
        <!--        音乐榜单-->
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
            };
        },
    }
</script>

<style scoped lang="less">

</style>