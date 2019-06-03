import axios from 'axios'
export default{
    namespaced: true,
    state:{
        goodsMethodData: []
    },
    mutations:{
        getgoodsMethodData(state,payload){
            state.goodsMethodData=null
            state.goodsMethodData=[...payload]
            console.log(state.goodsMethodData);
            
        }
    },
    actions:{
        addGoodsMethod(context,payload){
            axios({
                method:"post",
                url:"/goodsMethod/addGoodsMethod",
                data:{
                    name:payload
                }
            }).then((msg)=>{
                console.log(msg)
            })
        },
        getGoodsMethod(context,payload){
            axios({
                method:"get",
                url:"/goodsMethod/getGoodsMethod",
            }).then((msg)=>{
                context.commit("getgoodsMethodData", msg.data)
                console.log(msg.data)
            })
        },
    }
}