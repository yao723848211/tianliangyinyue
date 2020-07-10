<template>
    <div class="lrc-container">
        <ul ref="list">
            <li v-for="(item,index) in lrcContent"   @click="setProcess(item.time)" :key="index" :class="index==active?'active':''">{{item.content}}</li>
<!--            <li v-for="(item,index) in lrcContent"   :key="index" :class="index==active?'active':''">{{item.content}}</li>-->
        </ul>
    </div>
</template>

<script>
    //对于歌词组件来说，需要一个参数,这个参数就是歌词的地址
    import {getLrc} from "../../../api/musci-api";
    import {mapState} from "vuex";

    export default {
        name: "Lrc",
        computed: {
            ...mapState(["currentTime"])
        },
        data() {
            return {
                lrcContent: [],
                // 当前激活的歌词
                active: 0,
                noScroll: false,
                timeoutId: null,
            }

        },
        props: {
            lrcLink: String
        },
        created() {
            getLrc(this.lrcLink).then(res => {
                // console.log(res)
                // this.lrcContent = res.content;
                // console.log(111)
                // console.log(res)
                const lrcContent = res.content.split("\n");
                //  判断一下我们这个字符串有没有时间
                let reg = /\[\d*:\d*\.\d*\]/g;
                if (!res.content.match(reg)) {
                    //    如果没有匹配到时间走这个判断
                    this.lrcContent = lrcContent.map(item => {
                        return {
                            time: -1,
                            content: item
                        }
                    })
                }
                // this.lrcContent = lrcContent;
                // {time:时间, content:"歌词内容"}
                lrcContent.forEach(item=>{
                    let content = item.match(reg);
                    if(content){
                        /// 匹配到了内容，在这个时候再做后续的处理
                        content.forEach(timeItem=>{
                            // console.log(timeItem)
                            //获取时间的分钟
                            let min = Number(timeItem.match(/\[\d*/)[0].replace("[", ""));
                            //获取时间的秒数
                            let sec = Number(timeItem.match(/:\d*/)[0].replace(":", ""));
                        //    最终的秒杀
                            let time = min *60 +sec;
                            let contentStr = item.replace(reg,'');
                            if(contentStr){
                                this.lrcContent.push({
                                    time,
                                    content:contentStr
                                })
                            }
                        })
                    }


                })

            });
        },
        mounted() {
            // 判断是否可以滑动
            this.$refs.list.addEventListener("touchstart", () => {
                if (this.timeoutId) {
                    clearTimeout(this.timeoutId);
                }
                this.noScroll = true;
            });
            // this.$refs.list.addEventListener("touchend", () => {
            //     this.timeoutId = setTimeout(() => {
            //         this.noScroll = false
            //     }, 2000)
            // });
        },
        watch: {
            currentTime() {
                // console.log(this.currentTime)
                // 根据这个时间判断激活的歌词是哪一个
                for (let i = 0; i < this.lrcContent.length; i++) {
                    if (this.lrcContent[i].time > this.currentTime) {
                        if (i > 0) {
                            this.active = i - 1;
                        }
                        // // eslint-disable-next-line
                        // debugger
                        if (!this.noScroll) {
                            this.$refs.list.scrollTop = this.$refs.list.children[this.active].offsetTop - 50;
                        }
                        break;
                    }
                }
            }
        },
        //增加单击歌词变色事件
        methods: {
            setProcess(time) {
                this.$store.commit("setProcess", {process: time})
                // console.log(time)
            }
        }


    }
</script>

<style scoped lang="less">
    .lrc-container {
        height: 150px;
        margin-bottom: 30px;

        ul {
            position: relative;
            height: 100%;
            overflow: scroll;
            text-align: center;
            .active {
                font-size: 18px;
                color: yellow;
            }
        }
    }

</style>