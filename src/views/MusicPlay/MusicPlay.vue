<template>
<!--    音乐播放界面-->
    <div class="music-play" :style="{height:height}">
        <Header :title="songInfo.title"></Header>
        <div class="cover">
            <img :src="songInfo.pic_huge"
                 alt="">
        </div>
        <Lrc v-if="songInfo.lrclink" :lrc-link="songInfo.lrclink"></Lrc>
        <MusicAction :file-link="bitrate.file_link"></MusicAction>
        <div style="display: flex;justify-content: center">
            <audio :src="bitrate.show_link"
                   controls></audio>
        </div>

    </div>
</template>

<script>

    import Header from "./components/Header";
    import Lrc from "./components/Lrc";
    import MusicAction from "./components/MusicAction";
    import {getSingerList} from "../../api/musci-api";

    export default {
        name: "MusicPlay",
        components: {
            Header, Lrc, MusicAction
        },
        data() {
            return{
                height:0,
                //歌曲详情
                songInfo:{},
                //歌曲的媒体信息
                bitrate:{},
            }
        },
        created() {
            this.height = window.innerHeight + "px";
            getSingerList(this.$route.params.songId).then(res=>{
                // console.log(this.$route.params.songId)
                // console.log(res.songinfo)
                // console.log(res.bitrate)
                this.songInfo = res.songinfo;
                this.bitrate=res.bitrate;
            })
        }
    }
</script>

<style scoped lang="less">
    .music-play{
        height: 100%;
        background-color: #f5f5f5;
    }
    .cover {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        margin-bottom: 40px;

        img {
            border-radius: 15px;
            width: 60%;
            height: 150px;
        }
    }
</style>