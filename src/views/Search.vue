<template>
    <div>
<!--       搜索的view组件-->
        <SearchItem></SearchItem>
    </div>
</template>

<script>
    // import {mapState} from "vuex"
    import SearchItem from "../components/SearchItem";

    export default {
        name: "Search",
        components:{
            SearchItem
        }
        // computed:{
        //     // info(){
        //     //     return this.$store.state.info
        //     // }
        //   ...mapState({info:"info"})
        // }
    }
</script>

<style scoped>

</style>