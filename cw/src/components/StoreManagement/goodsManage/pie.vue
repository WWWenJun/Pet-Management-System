<template>
              <div  id="main" style="width: 100%;height:80%;">
          </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapActions,mapState}=createNamespacedHelpers('GoodsMethod')
export default {
    props:['pie'],
    watch:{
    pie(){
    this.drawLine()
},
    },
  methods: {
    //   ...mapActions(['addGoodsMethod','getGoodsMethod']),
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('main'))
        // 绘制图表
        myChart.setOption({
            title: {         text: '制作方法',
        x:'center' },
            tooltip: {},
                legend: {
        orient: 'vertical',
        left: 'left',
        // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
            series: [
        {
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:this.pie,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
        });
    }
  },
    mounted(){
    //  this.getGoodsMethod();
    this.drawLine();

  },
}
</script>

<style>

</style>
