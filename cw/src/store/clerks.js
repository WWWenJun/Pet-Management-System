export default {
    namespaced: true,
    state: {
        currentPage: 1,
        pageSize: 3,
        totalPage: 0,
        totalCount: 0,
        type:'name',
        value:'',
        clerksData: []
    },
    mutations: {//同步操作
        getClerksByPage(state, payload) {
            Object.assign(state, payload);
        },
        setNextPage(state) {
            if(state.currentPage < state.totalPage) {
                state.currentPage = state.currentPage - 0 + 1;
            }
        },
        setPrevPage(state) {
            if(state.currentPage > 1) {
                state.currentPage -= 1;
            }
        },
        setFirstPage(state) {
            state.currentPage = 1;
        },
        setLastPage(state) {
            state.currentPage = state.totalPage;
        },
        setPageSize(state, payload) {
            state.pageSize = payload;
        },
        setCurrentPage(state, payload) {
            state.currentPage = payload;
        },
        setClerksData(state, payload) {
            state.clerksData = payload;
        },
        setType(state, payload) {
            state.type = payload;
        },
        setValue(state, payload) {
            state.value = payload;
        }
    },
    actions: {//异步操作
        async getClerksByPageAsync(context) {
            const {currentPage, pageSize,type,value} = context.state;
            const data = await fetch(`/clerks/getClerksByPage?currentPage=${currentPage}&pageSize=${pageSize}&type=${type}&value=${value}`)
            .then(res => res.json());
            context.commit("getClerksByPage", data)
        }
    }
}