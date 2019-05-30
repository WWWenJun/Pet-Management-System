<template>
    <div>
        <h1>注册</h1>
        <button @click="tiaozhuan">登录</button>
    </div>
</template>

<script>
export default {
methods:{
    tiaozhuan(){
        this.$router.push("/login/123")
    }
}

}
</script>

<style>

</style>
