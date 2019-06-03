<template>
    <div>
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
import { createNamespacedHelpers } from "vuex";
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  "managers"
);
export default {
  watch: {
    currentPage() {
      this.getManagersByPageAsync();
    },
    pageSize() {
      this.getManagersByPageAsync();
    },
    role() {
      this.getManagersByPageAsync();
    },
    type() {
      this.getManagersByPageAsync();
    },
    value() {
      this.getManagersByPageAsync();
    }
  },
  computed: {
    ...mapState(["currentPage", "pageSize", "totalPage", "totalCount"]),
    currentPage: {
      get: mapState(["currentPage"]).currentPage,
      set: mapMutations(["setNextPage"]).setNextPage
    },
    pageSize: {
      get: mapState(["pageSize"]).pageSize,
      set: mapMutations(["setPageSize"]).setPageSize
    },
    role: {
      get: mapState(["role"]).role,
      set: mapMutations(["setRole"]).setRole
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
    ...mapMutations([
      "setNextPage",
      "setPrevPage",
      "setFirstPage",
      "setLastPage",
      "setPageSize",
      "setCurrentPage"
    ]),
    ...mapActions(["getManagersByPageAsync"])
  }
};
</script>

<style>
.pagination-row {
  display: flex;
}
</style>
