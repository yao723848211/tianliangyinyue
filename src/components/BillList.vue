<template>
    <div>
        <!--    今日榜单、新歌速递组件    -->
        <h3>{{title}}
<!--            <router-link :to="'/index/more?='+type" tag="span">更多</router-link>-->
            <router-link :to="{name:'moreList',params:{type:type}}" tag="span">更多</router-link>
        </h3>

        <ul class="bill-list">
            <li v-for="item in list" :key="item.song_id">
                <img :src="item.pic_big"
                     alt="">
                <div>{{item.title}}</div>
            </li>
        </ul>

    </div>
</template>

<script>
    //参数  list ,  title   文字
    import {getBillList} from "../api/musci-api";

    export default {
        name: "BillList",
        data() {
            return {
                list: []
            }
        },
        props: {
            type: {
                type: String,
                default: "1"
            },
            title: {
                type: String,
                default: ""
            },
            size: {
                type: Number,
                default: 6
            },
            offset: {
                type:[String,Number]
            }
        },
        created() {
            // this.$http.get(`/v1/restserver/ting?method=baidu.ting.billboard.billList&size=${this.size}&type=${this.type}`).then(res => {
            //     // console.log(res.song_list)
            //     this.list = res.song_list
            // })
            getBillList(this.type,this.size).then(res=>{
                this.list = res.song_list
            })

        }
    }
</script>

<style scoped lang="less">
    div {
        h3 {
            margin: 10px 0;
            span {
                float: right;
                font-size: 14px;
                color: #999999;
            }
        }

        /*list区域*/

        .bill-list {
            display: flex;
            flex-wrap: wrap;

            li {
                /*display: flex;flex*/

                width: calc(100% / 3);
                padding: 5px;
                box-sizing: border-box;

                img {
                    width: 100%;
                }
            }
        }
    }

</style>