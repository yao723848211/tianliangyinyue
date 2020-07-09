<template>
    <div>
        <BillItem v-for="item in billTypeList" :type="item" :key="item"></BillItem>
    </div>
</template>

<script>
    import BillItem from "../components/BillItem";

    export default {
        name: "Bill",
        components:{
            BillItem
        },
        data(){
            return {
                billTypeList:[1,2,11,24,25,21,16,12]
            }
        }
    }
</script>

<style scoped>

</style>