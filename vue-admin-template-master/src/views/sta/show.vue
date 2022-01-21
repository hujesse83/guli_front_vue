<template>
  <div class="app-container">
    <!--表单-->
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item>
        <el-date-picker
          v-model="searchObj.begin"
          type="date"
          placeholder="选择开始日期"
          value-format="yyyy-MM-dd" />
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="searchObj.end"
          type="date"
          placeholder="选择截止日期"
          value-format="yyyy-MM-dd" />
      </el-form-item>
      <el-button
        :disabled="btnDisabled"
        type="primary"
        icon="el-icon-search"
        @click="showChart()">查询</el-button>
    </el-form>

    <div class="chart-container">
      <div id="chart" class="chart" style="height:500px;width:100%" />
    </div>
  </div>
</template>
<script>

// 或
const echarts = require('echarts');
import staApi from '@/api/sta'

export default {
    data() {
        return {
            searchObj:{
                begin:'',
                end:''
            },
            btnDisabled:false,
            statisticData:{}
        }
    },
    methods:{
        showChart() {
            staApi.getDataSta(this.searchObj)
                .then(response => {
                    this.statisticData = response.data
                    console.log(this.statisticData)
                    //调用下面生成图表的方法，改变值
                    this.setChart()
                })
        },
        setChart(){

this.chart = echarts.init(document.getElementById('chart'))
var app = {};

var option;

option = {
  title: {
    text: '数据统计'
  },
  tooltip: {
    trigger: 'axis'
  },
dataZoom: [{
    show: true,
    height: 30,
    xAxisIndex: [
        0
    ],
    bottom: 30,
    start: 10,
    end: 80,
    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    handleSize: '110%',
    handleStyle: {
        color: '#d3dee5'

    },
    textStyle: {
        color: '#fff'
    },
    borderColor: '#90979c'
    },
    {
    type: 'inside',
    show: true,
    height: 15,
    start: 1,
    end: 35
}],
  legend: {
    data: ['学员登录数统计', '学员注册数统计', '课程播放数统计', '每日课程数统计']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: this.statisticData.dailyTimeList
  },
  yAxis: {
    type: 'value'
  },
//   删掉stack属性即可解决y轴坐标不符合的情况
  series: [
    {
      name: '学员注册数统计',
      type: 'line',
      data: this.statisticData.registerNum
    },
    {
      name: '课程播放数统计',
      type: 'line',
      data: this.statisticData.viewNum
    },
    {
      name: '每日课程数统计',
      type: 'line',
      data: this.statisticData.courseNum
    },   
     {
      name: '学员登录数统计',
      type: 'line',
      data: this.statisticData.loginNum
    },
  ]
};

this.chart.setOption(option)
        }
    }
}
</script>
