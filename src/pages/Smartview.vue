<template>
  <div>
    <Header />
    <h1>Smartview</h1>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
import Header from '@/components/Header'
export default {
  name: 'Smartview',
  components:{
    Header,
    highcharts: Chart 
  },
  data() {
  return {
    title: '',
    points: [10, 0, 8, 2, 6, 4, 5, 5],
    chartType: 'Spline',
    seriesColor: '#6fcd98',
    colorInputIsSupported: null,
    chartOptions: {
      chart: {
        type: 'spline'
      },
      title: {
        text: 'Sin chart'
      },
      series: [{
        data: [10, 0, 8, 2, 6, 4, 5, 5],
        color: '#6fcd98'
        }]
      }
    }
  }
}
</script>