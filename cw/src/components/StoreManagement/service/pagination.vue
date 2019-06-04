<template>
    <div style="line-height: 50px;margin-left:30px;text-align:left">
        <div class="block">
    <el-pagination
      @size-change="setPageSize"
      @current-change="setCurrentPage"
      :current-page="currentPage-0"
      :page-sizes="[3, 5, 10, 20]"
      :page-size="pageSize-0"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount"
      @prev-click="setPrevPage"
      @next-click="setNextPage">
    </el-pagination>
  </div>
        
    </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers("services");
export default {
    watch: {
        currentPage() {
            this.getServiesByPageAsync()
        },
        pageSize() {
            this.getServiesByPageAsync()
        }, 
        type() {
           this.getServiesByPageAsync()
        },
        value() {
            this.getServiesByPageAsync()
        }
    },
    computed: {
        ...mapState(['currentPage', 'pageSize', 'totalPage', 'totalCount']),
        currentPage: {
            get: mapState(['currentPage']).currentPage,
            set: mapMutations(['setNextPage']).setNextPage
        },
        pageSize: {
            get: mapState(['pageSize']).pageSize,
            set: mapMutations(['setPageSize']).setPageSize
        },
        type: {//查询
            get: mapState(["type"]).type,
            set: mapMutations(["setType"]).setType
        },
        value: {//查询
            get: mapState(["value"]).value,
            set: mapMutations(["setValue"]).setValue
        }
    },
    methods: {
        ...mapMutations(['setNextPage', 'setPrevPage', 'setFirstPage', 'setLastPage','setPageSize','setCurrentPage']),
        ...mapActions(['getServiesByPageAsync']),
    }
}

</script>

<style>
.pagination-row {
    display: flex;
}
</style>
