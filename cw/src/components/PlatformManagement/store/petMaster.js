export default{
    namespaced:true,
    state:{
        currentPage: 1,
        pageSize: 5,
        totalPages: 0,
        totalCount: 0,
        petMasterData: [],
        type:"userName"
    },
    mutations:{
        getPetMasterDataByPage(state, payload) {
            Object.assign(state, payload);
        },
        setPageSize(state, payload) {
        //选择多少条一页的时候，将现在的state中pageSize更新成我们选择的值
            state.pageSize = payload;
        },
        //选择页码的时候，将现在的state中currentPage更新成我们选择的页码
        setCurrentPage(state, payload) {
            state.currentPage = payload;
            
        },
        setNextPage(state) {
            //下一页，当前的state中currentPage + 1 
            if(state.currentPage < state.totalPages) {
                state.currentPage = state.currentPage - 0 + 1;
            }
        },
        setPrevPage(state) {
            //上一页，当前的state中currentPage - 1 
            if(state.currentPage > 1) {
                state.currentPage -= 1;
            }
        },
        setType(state, payload){
            state.type = payload
        }
    },
    actions:{
        //根据分页获取宠主信息的方法
        async getPetMastersSearchAsync(context,args) {
            const {currentPage, pageSize,type} = context.state; 
            let value;
            if(args == undefined){
                value = '';
            }else{
                value = args;
            }
            const data = await fetch(`/petMaster/searchPetMaster`,
            {
                headers: { 
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body:  JSON.stringify({
                    currentPage:currentPage,
                    pageSize:pageSize,
                    type:type,
                    value:value
                })
            })
            .then(res => res.json());
            context.commit("getPetMasterDataByPage",data)
            
        },

        //新增宠主的异步请求方法
        async addPetMastersAsync(context,args) {
            const data = await fetch(`/petMaster/addPetMaster`,{
                headers: { 
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body:  JSON.stringify({
                    userName:args.userName,
                    name:args.name,
                    image:args.image,
                    area:args.area,
                    score:args.score,
                    address:args.address,
                    havingPet:args.havingPet,
                    vipCard:args.vipCard
                })
            })
            .then(()=>{   
            });
        },



    }
}
