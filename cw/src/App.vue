<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Commodity from "./components/StoreManagement/commodity/commodity";
import ShopDoor from "./components/StoreManagement/shopDoor/shopDoor";
export default {
  components: {
Commodity,ShopDoor
  }
};
</script>

<style>
</style>
