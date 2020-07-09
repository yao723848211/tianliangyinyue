<template>
    <div>
<!--        <router-link :to="{name:'MoreBillList',params:{type:type}}">-->
        <router-link :to="'/MoreBill/' + type">

        <div  class="bill-item">
                <!--        图片-->
                <div class="cover">
                    <img :src="billboard.pic_s192"
                         alt="">
                </div>
                <!--        三首歌-->
                <ul class="bill-list">
                    <li v-for="(item,index) in list" :key="item.song_id"><span>{{index +1 }}</span>{{item.title}}</li>
                </ul>
            </div>
        </router-link>

    </div>
</template>

<script>
    import {getBillList} from "../api/musci-api";

    export default {
        name: "BillItem",
        data() {
            return {
                list: [],
                billboard: {}
            }
        },
        props: {
            type: {
                type: [String, Number]
            }
        },
        created() {
            getBillList(this.type, 3).then(res => {
                this.list = res.song_list;
                this.billboard = res.billboard;
            })
        }
    }
</script>

<style scoped lang="less">
    .bill-item {
        margin-top: 8px;
        padding: 5px;
        display: flex;

        .cover {
            flex-shrink: 0;
            width: 100px;
            height: 100px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .bill-list {
            padding: 3px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            span {
                color: crimson;
            }
        }
    }
</style>