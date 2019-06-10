import axios from 'axios'
export default{
    namespaced: true,
    state:{
        goodsMethodData: [],
        goodsOneData:[],
        goodsSuitData:[],
        goodsTypeData:[],
        goodsData:[],
        currentPage: 1,
        pageSize: 5,
        totalPages: 0,
        totalCount: 0,
        userId:'',
        supplier:[],
        type:'',
        value:'',
        store:[]
    },
    mutations:{
        getStore(state,payload){
            state.store=payload
        },
        setSupplier(state,payload){
            state.supplier=payload
        },
        setUserId(state,payload){
            state.userId=payload
        },
        setPageSize(state, payload) {
            state.pageSize = payload;
        },
        setType(state, payload){
            state.type=payload
        },
        setValue(state, payload){
            state.value=payload
        },
        setCurrentPage(state,payload){
            state.currentPage = payload;            
        },
        setNextPage(state) {
            if(state.currentPage < state.totalPages) {
                console.log(state.currentPage);
                state.currentPage = state.currentPage - 0 + 1;
            }
        },
        setCurrentPage(state,payload){
            state.currentPage = payload;            
        },
        getgoodsTypeData(state,payload){
            state.goodsTypeData=null
            state.goodsTypeData=[...payload]
        },
        getgoodsSuitData(state,payload){
            state.goodsSuitData=null
            state.goodsSuitData=[...payload]
        },
        getgoodsOneData(state,payload){
            state.goodsOneData=null
            state.goodsOneData=[...payload]
        },
        getgoodsMethodData(state,payload){
            state.goodsMethodData=null
            state.goodsMethodData=[...payload]
        },
        getgoodsData(state,payload){
            state.goodsData=null
            state.goodsData=payload.goodsData
            state.totalCount=payload.totalCount
            state.totalPages=payload.totalPages
        }
    },
    actions:{
        getManager(context,payload){
            axios({
                method:"post",
                url:"/goods/searchGoods",
                data:{
                    type: context.state.type, value: context.state.value,
                    currentPage: context.state.currentPage,
                    pageSize: context.state.pageSize,
                    userId:context.state.userId
                }
            }).then((msg)=>{
                context.commit("getgoodsData", msg.data)                
            })
        },

        changeOneGood(context,payload){
            axios({
                method:"post",
                url:"/goods/changeGoods",
                data:payload
            }).then((msg)=>{
                console.log(msg)
            })
        },
        setSuppliers(context,payload){
            axios({
                method:"get",
                url:"/supplier/getSupplierByPage",
            }).then((msg)=>{
                context.commit("setSupplier", msg.data.supplierData)
            })
        },
        changeUserId(context,payload){
            console.log(123);
            
            axios({
                method:"post",
                url:"/storeusers/isLogin",
            }).then((msg)=>{
                context.commit("setUserId", msg.data)
                axios({
                    method:"get",
                    url:"/goods/getGoods",
                    params:{
                        currentPage: context.state.currentPage,
                        pageSize: context.state.pageSize,
                        userId:msg.data
                    }
                }).then((msg)=>{
                    context.commit("getgoodsData", msg.data)
                }),
                axios({
                    method:"get",
                    url:"/store/getStore",
                    params:{
                        userId:msg.data                        
                    }
                }).then((msg)=>{
                    context.commit("getStore", msg.data)
                })

            })
        },
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
        addGood(context,payload){
            axios({
                method:"post",
                url:"/goods/addGoods",
                data:payload
            }).then((msg)=>{
                console.log(msg)
            })
        },
        deleteGoods(context,payload){
            axios({
                method:"post",
                url:"/goods/deleteGoods",
                params:{
                    _id:payload
                }
            }).then((msg)=>{
                context.commit("getgoodsData", msg.data)
            })
        },
            getGoods(context,payload){
                axios({
                    method:"get",
                    url:"/goods/getGoods",
                    params:{
                        currentPage: context.state.currentPage,
                        pageSize: context.state.pageSize,
                        userId:msg.data
                    }
                }).then((msg)=>{
                    context.commit("getgoodsData", msg.data)
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
            })
        },
    }
}