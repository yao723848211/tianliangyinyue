<template>
    <!--    音乐播放界面-->
    <div class="music-play" :style="{height:height}">
        <Header :title="songInfo.title"></Header>

        <div class="cover">
            <img :src="songInfo.pic_huge" :class="isPlay?'ani':''"
                 alt="">
        </div>

        <Lrc v-if="songInfo.lrclink" :lrc-link="songInfo.lrclink"></Lrc>
        <MusicAction :file-link="bitrate.file_link"></MusicAction>
        <div style="display: flex;justify-content: center">
            <audio :src="bitrate.show_link"
                   controls ref="audio"></audio>
        </div>

    </div>
</template>

<script>

    import Header from "./components/Header";
    import Lrc from "./components/Lrc";
    import MusicAction from "./components/MusicAction";
    import {getSingerList} from "../../api/musci-api";
    import {mapState} from "vuex";

    export default {
        name: "MusicPlay",
        components: {
            Header, Lrc, MusicAction
        },
        computed: {
            ...mapState(["process"])
        },
        mounted() {
            this.$refs.audio.addEventListener("timeupdate", () => {

                this.$store.commit("setCurrentTime", {
                    currentTime: this.$refs.audio.currentTime
                })
            });
            this.$refs.audio.addEventListener("play", () => {   //开始播放时触发
                this.isPlay = true
                console.log(this.isPlay)

            });
            this.$refs.audio.addEventListener("pause", () => {   // 暂停时会触发，当播放完一首歌曲时也会触发
                this.isPlay = false
                console.log(this.isPlay)
            })
        },
        watch: {
            process() {
                this.$refs.audio.currentTime = this.process;
            }
        },
        data() {
            return {
                height: 0,
                //歌曲详情
                songInfo: {},
                //歌曲的媒体信息
                bitrate: {},
                isPlay: false,
            }
        },
        created() {
            this.height = window.innerHeight + "px";
            getSingerList(this.$route.params.songId).then(res => {
                // console.log(this.$route.params.songId)
                // console.log(res.songinfo)
                // console.log(res.bitrate)
                this.songInfo = res.songinfo;
                this.bitrate = res.bitrate;

            })
        }
    }
</script>

<style scoped lang="less">
    .music-play {
        height: 100%;
        background-color: #f5f5f5;
    }

    .cover {
        display: flex;
        justify-content: center;
        margin-top: 40px;
        margin-bottom: 40px;

        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        .ani {
            animation: getRoate 10s  linear 0s infinite;
        }

    }

    @keyframes getRoate {
        0% {
            transform: rotateZ(0deg);
        }

        25% {
            transform: rotateZ(90deg);
        }

        50% {
            transform: rotateZ(180deg);
        }

        75% {
            transform: rotateZ(270deg);
        }

        100% {
            transform: rotateZ(360deg);
        }
    }
</style>