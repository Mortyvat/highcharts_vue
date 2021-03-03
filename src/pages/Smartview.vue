<template>
  <div id="smartview">
    <Header />
    <h1>Smartview</h1>
    <select v-model="selected">
      <option disabled value="">Vyberte graf</option>
      <option v-for="option in selectOptions" :value="option.value" :key="option.name">
    {{ option.text }}
  </option>
    </select>
    <span>Selected: {{ selected }}</span>
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
      selected: 'solidgauge', 
      selectOptions : [
        { text: 'SolidGauge', value: 'solidgauge' },
        { text: 'Sloupce', value: 'bar' },
        { text: 'Čára', value: 'line' }
      ],
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

<style scoped>
 span{
   margin:10px;
 }
</style>