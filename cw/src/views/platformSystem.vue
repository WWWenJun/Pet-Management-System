<template>
  <div>
    <h1>平台系统</h1>
    <div class="navLeft">
      <dl>
        <dt>平台管理</dt>
        <dd>
          <router-link to="/storeSystem/shopDoor">店门</router-link>
        </dd>
        <dd>
          <router-link to="/storeSystem/commodity">商品</router-link>
        </dd>
      </dl>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navLeft{
    float: left;
}
.content{
    float: left;
    margin-left: 50px;
}
</style>
