<template>
    <div>
        <router-link :to="'/moreSinger/' +tinguid ">
            <div class="singer-item-container">
                <ul class="cover-p">
                    <!--        图片-->
                    <img :src="obj.avatar_small"
                         alt="">
                    <!--            名字-->
                    <li>{{obj.name}}</li>
                </ul>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {getSingerPerList} from "../api/musci-api";

    export default {
        name: "SingerItem",
        data() {
            return {
                obj: {}
            }
        },
        props: {
            tinguid: {
                type: [String, Number]
            },
        },
        created() {
            getSingerPerList(this.tinguid).then(res => {
                this.obj = res;
            })
        }
    }
</script>

<style scoped lang="less">
    .singer-item-container {
        /*margin-top: 15px;*/
        padding: 1px 15px;
        box-sizing: border-box;
        /*display: flex;*/

        .cover-p {
            display: flex;

            img {
                border-radius: 50%;
            }

            li {
                display: flex;
                padding: 1px 15px;
                flex-direction: column;
                justify-content: space-around;
            }
        }


    }
</style>