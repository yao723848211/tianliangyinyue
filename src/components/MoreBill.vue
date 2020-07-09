<template>
    <div class="moreBill-container">
        <div class="moreBill-img">
            <img :src="billboard.pic_s192"
                 alt="">
        </div>
        <div class="box1">
            <ul class="moreBill-ul">
                <li v-for="(item,index) in list" :key="index">
                    <div class="box1">{{item.title}} <span>{{item.artist_name}}</span></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getBillList} from "../api/musci-api";

    export default {
        name: "MoreBill",
        data() {
            return {
                list: [],
                billboard: {}
            }
        },
        created() {
            console.log(this.$route.params.type)
            getBillList(this.$route.params.type).then(res => {
                console.log(res)
                this.list = res.song_list;
                this.billboard = res.billboard;
            })
        }
    }
</script>

<style scoped lang="less">
    .moreBill-container {
        .moreBill-img {
            display: flex;

            img {
                display: flex;
                flex-shrink: 1;
                width: 100%;
            }
        }

        .moreBill-ul {
            display: flex;
            flex-direction: column;

            li {
                display: flex;
                flex-direction: row;
                justify-content: center;
                border-bottom: 1px solid black;
                padding: 10px 10px;
                box-sizing: border-box;

                .box1 {
                    span {
                        display: flex;
                        justify-content: center;
                        color: #cccccc;
                        font-size: 14px;
                    }
                }

            }
            li:hover{
                color: crimson;
            }
        }
    }
</style>