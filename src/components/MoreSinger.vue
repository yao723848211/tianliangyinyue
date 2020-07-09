<template>
    <div class="moreSinger-container">
        <div class="moreSinger-banner" >
            <img :src="pic_big"
                 alt="">
            <p>{{author}}</p>
        </div>
        <ul class="moreSinger-song" >
            <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    import {getSingerSongList} from "../api/musci-api";

    export default {
        name: "MoreSinger",
        data() {
            return {
                list: [],
                pic_big:"",
                author:"",
            }
        },
        created() {
            console.log(this.$route.params.tinguid)
            getSingerSongList(this.$route.params.tinguid).then(res => {
                // debugger
                console.log(res.songlist)
                this.list = res.songlist
                this.pic_big=res.songlist[0].pic_premium
                this.author=res.songlist[0].author
            })
        }
    }
</script>

<style scoped lang="less">
    .moreSinger-container {
        .moreSinger-banner {
            background-color: antiquewhite;
            display: flex;
            flex-direction: column;
            margin: 0 auto;

            img {
                border-radius: 50%;
                width: 20%;
                margin: 0 auto;
            }

            p {
                color: lightseagreen;
                font-size: 14px;
                margin: 0 auto;
            }
        }

        .moreSinger-song {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            padding: 2px 15px;

            li {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                padding: 5px 2px;
                border-bottom: 1px solid black;
            }
        }
    }

</style>