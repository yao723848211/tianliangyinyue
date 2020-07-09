<template>
    <div>
        <!--        音乐榜单的列表-->
        <ul class="musicList">
            <li v-for="item in list" :key="item.song_id">
                <!-- 左侧图片-->
                <img :src="item.pic_big"
                     alt="">
                <!--右侧文字描述-->
                <div class="box2">
                    <div class="title">{{item.title}}</div>
                    <div class="author">{{item.author}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {getBillList} from "../api/musci-api";

    export default {
        name: "MusicList",
        data(){
          return {
              list:[],
          }
        },
        props: {
            type: {
                type: [String, Number],
                default: ""
            },
            size: {
                type: [String, Number],
                default: 6
            }
        },
        created() {
            getBillList(this.type,6).then(res => {
                // console.log(res)
                this.list = res.song_list
            })
        }
    }
</script>

<style scoped lang="less">
    .musicList {
        margin-top: 10px;

        li {
            display: flex;
            padding: 3px 10px;

            img {
                width: 80px;
                height: 80px;
            }
            .box2 {
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .title {
                    font-size: 16px;
                }
                .author{
                    font-size: 14px;
                    color: #999999;
                }

            }
        }
    }
</style>