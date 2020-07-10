import Vue from 'vue'
import Vuex from 'vuex'
// import list from "less/lib/less/functions/list";
import {getBillList} from "../api/musci-api";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        info: {
            name: "我是标题",
            isLogin: false,
        },
        isLogin: false,
        list: [1, 5, 7, 8, 22, 6, 4, 3, 88, 99, 44, 55],
        billList:[],
        currentTime: 0,
        // 要设置的时间
        process: null,
    },
    mutations: {
        setLogin(state, payload) {
            state.info = payload.info
        },
        setBillList(state, {billList}){
            state.billList = billList
        },
        setCurrentTime(state, payload) {
            state.currentTime = payload.currentTime;
        },
        setProcess(state,payload){
            state.process = payload.process;
        }

    },
    getters: {
        positiveSequence(state) {
            return state.list.sort((a, b) => {
                return a - b;
            })
        }
    },
    actions:{
        setBillList({commit},{type}){
            getBillList(type).then(res=>{
                commit("setBillList",{billList:res.song_list})
            })
        }
    }
})
export default store