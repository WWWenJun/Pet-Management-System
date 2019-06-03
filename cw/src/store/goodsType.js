import axios from 'axios'
export default{
    namespaced: true,
    state:{
        goodsTypeData: []
    },
    mutations:{
        getgoodsTypeData(state,payload){
            state.goodsTypeData=null
            state.goodsTypeData=[...payload]
        }
    },
    actions:{
        addGoodsType(context,payload){
            axios({
                method:"post",
                url:"/goodsType/addGoodsType",
                data:{
                    name:payload
                }
            }).then((msg)=>{
                console.log(msg)
            })
        },
        getGoodsType(context,payload){
            axios({
                method:"get",
                url:"/goodsType/getGoodsType",
            }).then((msg)=>{
                context.commit("getgoodsTypeData", msg.data)
            })
        },
    }
}