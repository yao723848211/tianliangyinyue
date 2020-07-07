import request from "../utils/http";
export function getBillList(type,size=6,offset=0) {
    const url =`/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`;
    return request.get(url).then(res=>{
        return {
            ...res,
        }
    })

}