<template>
    <div>
        <!--        顶部样式-->
        <header>
            <ul>
                <li @click="getBack"><img src="../assets/logo-ea5.png" alt=""></li>
                <li>
                    <router-link to="/index/singer">歌手</router-link>
                </li>
                <li>
                    <router-link to="/index/bill">榜单</router-link>
                </li>
                <li>
                    <router-link to="/index/my">我的</router-link>
                </li>
                <li>
                    <router-link to="/index/search">搜索</router-link>
                </li>
            </ul>
        </header>
        <!--       页面渲染的区域 -->
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    export default {
        name: "IndexLayout",
        methods:{
            getBack(){
                this.$router.push("/")
            }
        },
        watch: {
            $route() {
                if (this.$route.meta.title) {
                    document.title = this.$route.meta.title
                }else  {
                    document.title ="百度音乐"
                }
            }

        }
    }
</script>

<style scoped lang="less">
    header {
        ul {
            display: flex;
            height: 40px;
            line-height: 40px;
            justify-content: space-around;

            li {
                padding: 5px 15px;

                img {
                    height: 40px;
                }
            }
        }
        .router-link-active {
            color: lightseagreen;
        }
    }
</style>