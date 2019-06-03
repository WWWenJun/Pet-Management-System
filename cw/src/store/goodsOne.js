import axios from 'axios'
export default{
    namespaced: true,
    state:{
        goodsOneData: []
    },
    mutations:{
        getgoodsOneData(state,payload){
            state.goodsOneData=null
            state.goodsOneData=[...payload]
        }
    },
    actions:{
        addGoodsOne(context,payload){
            axios({
                method:"post",
                url:"/goodsOne/addGoodsOne",
                data:{
                    name:payload
                }
            }).then((msg)=>{
                console.log(msg)
            })
        },
        getGoodsOne(context,payload){
            axios({
                method:"get",
                url:"/goodsOne/getGoodsOne",
            }).then((msg)=>{
                context.commit("getgoodsOneData", msg.data)
                console.log(msg.data)
            })
        },
    }
}