<template>
    <div class="searchItem-container">
        <div style="position: fixed;top: 0;left: 0;right: 0;height: 100%;background-color: #f5f5f5;z-index: -2"></div>
        <div class="searchItem-search">
            <input type="text" placeholder="请输入搜索内容" v-model="keywords">
            <button @click="getSearchName">搜索</button>
            <hr>
        </div>
        <van-tabs>
            <van-tab v-for="(item,index) in list" :title="item.artistname" :key="index" >
                <SearchSingerSong :query="item.artistname"></SearchSingerSong>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import {getSearch} from "../api/musci-api";
    import SearchSingerSong from "./SearchSingerSong";

    export default {
        name: "SearchItem",
        components:{
          SearchSingerSong
        },
        data(){
            return {
                keywords:"",
                list:[],

            }
        },
        methods:{
            getSearchName(){
                getSearch(this.keywords).then(res=>{
                    // console.log(res)
                    // console.log(this.list)
                    this.list = res.artist
                });
            },

        }
    }
</script>

<style scoped lang="less">
    .searchItem-container {
        padding: 10px 15px;

        .searchItem-search {
            margin-bottom: 10px;
            input {
                outline: none;
                border: none;
                height: 30px;
            }
        }
    }
</style>