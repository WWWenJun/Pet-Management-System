<template>
<div id="sign"  v-bind:style="{backgroundImage:'url(' + bg + ')'}">
    
   <div class="top">
       
       <router-link class="logini" to="/reg">进入爱宠邦平台管理系统</router-link>
       </div> 
       <div class="top">

    <router-link class="loginin" to="/loginone">进入爱宠邦门店管理系统</router-link>    
       </div>
 </div>



</template>
<script>
export default {
    data () {
    return {
      bg: require('./../assets/20f70303a29b91c76ba432a893d3526b.jpeg')
    }
  },
}
</script>
<style>
.logini {
    text-decoration: none;
    font-size: 30px;
    line-height: 200px;
    background-color: burlywood;
    border-radius: 35px;
    padding: 10px;
    margin-left: 30px;
}
.loginin{
    text-decoration: none;
     font-size: 30px;
    line-height: 200px;
    background-color: burlywood;
    border-radius: 35px;
    padding: 10px;
    margin-left: 30px;
}
.top{
    width:450px;
    height: 100px;
    margin-left: 40%;
    /* border: 1px solid red; */
}
#sign{
    height: 635px;
    width: 100%;

}
</style>
