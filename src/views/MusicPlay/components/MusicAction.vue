<template>
    <div class="action">
        <van-icon v-show="!isLike" @click="collect" name="like-o"/>
        <van-icon v-show="isLike" color="red" @click="collect" name="like"/>
        <a :href="fileLink" download="fileLink">
            <van-icon name="down"/>
        </a>
    </div>
</template>

<script>


    import {Toast} from "vant";
    import {Dialog} from 'vant';

    export default {
        name: "MusicAction",
        data() {
            return {
                isLike: false
            }
        },
        props: {
            fileLink: String,
        },
        methods: {
            //收藏
            collect() {
                if (this.isLike) {
                    //是否取消收藏
                    Dialog.confirm({
                        title: '是否取消收藏',
                        message: '您确认取消收藏吗',
                    }).then(() => {
                        this.isLike = !this.isLike
                    })
                } else {
                    this.isLike = !this.isLike
                    Toast.success('收藏成功');
                }
            }
        },

    }
</script>

<style scoped lang="less">
    .action {
        display: flex;
        justify-content: space-between;

        i {
            font-size: 30px;
        }
    }
</style>