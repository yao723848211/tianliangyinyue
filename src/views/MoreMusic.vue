<template>
    <div class="moreMusic">
        <!--            更多音乐-->
        <!--        <ul>-->
        <!--            <li v-for="item in list" :key="item.song_id">{{item.title}}</li>-->
        <!--        </ul>-->
        <h3>今日榜单</h3>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <div v-for="item in list" :key="item.song_id">
                    <!--                   图片-->
                    <div>
                        <img :src="item.pic_big" alt="">
                    </div>
                    <!--                   名字-->
                    <p>
                        {{item.title}}
                    </p>

                </div>
            </van-list>
        </van-pull-refresh>

    </div>
</template>

<script>
    import {getBillList} from "../api/musci-api"

    export default {
        name: "MoreMusic",
        props: {
            title: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                refreshing: false,
                offset: 0
            }
        },
        created() {
            // console.log(this.$route.params.type)
            // getBillList(this.$route.params.type).then(res => {
            //     this.list = res.song_list;
            // })
        },
        methods: {
            //处理加载更多的时候
            onLoad() {
                // this.offset += 10;
                getBillList(this.$route.params.type, 10, this.offset).then(res => {
                    //加载到更多后，应该告诉这个组件，我们加载完成了
                    this.list = this.list.concat(res.song_list);
                    this.loading = false;
                    this.refreshing = false;
                })
                this.offset += 10;
            },
            //下拉刷新
            onRefresh() {
                // getBillList(this.$route.params.type,10,0).then(res => {
                //     this.list = res.song_list;
                //     this.refreshing=false;
                // })
                this.list = [];
                this.offset = 0;
                this.onLoad();
            },
        },


    }
</script>

<style scoped lang="less">
    .moreMusic {

    }
</style>