import axios from 'axios'
export default{
    namespaced: true,
    state:{
        goodsSuitData: []
    },
    mutations:{
        getgoodsSuitData(state,payload){
            state.goodsSuitData=null
            state.goodsSuitData=[...payload]
        }
    },
    actions:{
        addGoodsSuit(context,payload){
            axios({
                method:"post",
                url:"/goodsSuit/addGoodsSuit",
                data:{
                    name:payload
                }
            }).then((msg)=>{
                console.log(msg)
            })
        },
        getGoodsSuit(context,payload){
            axios({
                method:"get",
                url:"/goodsSuit/getGoodsSuit",
            }).then((msg)=>{
                context.commit("getgoodsSuitData", msg.data)
            })
        },
    }
}