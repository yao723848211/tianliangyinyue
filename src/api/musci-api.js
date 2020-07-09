import request from "../utils/http";

//获取列表
export function getBillList(type, size = 6, offset = 0) {
    const url = `/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`;
    return request.get(url).then(res => {
        return {
            ...res,
        }
    })
}

//获取歌手的借口
export function getSingerPerList(tinguid) {
    const url = `/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=${tinguid}`;
    return request.get(url).then(res => {
        return {
            ...res,
            list: res
        }
    })
}

//获取歌曲详情
export function getSingerList(songId) {
    const url = `/v1/restserver/ting?method=baidu.ting.song.playAAC&songid=${songId}`;
    return request.get(url);
}

//获取歌词详情
export function getLrc(lrcLink) {
    const url = `/taihe-api/data/song/lrc?lrc_link=${lrcLink}`
    return request.get(url);
}

//搜索接口
export function getSearch(query) {
    const url = `/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=${query}`
    return request.get(url);
}

//获取歌手歌曲信息的列表
export function getSingerSongList(tinguid) {
    const url=`/v1/restserver/ting?method=baidu.ting.artist.getSongList&limits=10&tinguid=${tinguid}`;
    return request.get(url).then(res=>{
        return{
            ...res,
            list:res
        }
    })
}