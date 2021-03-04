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
    <highcharts :options="chartOptions[selected].chartOptions"></highcharts>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
import Header from '@/components/Header'
//import { ChartFactory } from '@/Modules/Factory/ChartFactory';

export default {
  name: 'Smartview',
  components:{
    Header,
    highcharts: Chart 
  },
  data() {
    return {
      selected: 'spline', 
      selectOptions : [
        { text: 'SolidGauge', value: 'solidgauge' },
        { text: 'Sloupce', value: 'bar' },
        { text: 'Čára', value: 'spline' }
      ],
      chartOptions: {
        spline:{
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
      },
      solidgauge:{
        chartOptions: {
          chartType : 'solidgauge',
          title : "Number of calls",
          xAxis : "2021-01-16",
          yAxis : "",
          series : [{
              name: 'Total',
              type: 'solidgauge',
              data: [{
                  agname: "dash_records",
                  color: "#5bc4e5",
                  innerRadius: "88%",
                  radius: "112%",
                  percentage: 100,
                  total: 46,
                  y: 46,
                  dataLabels: {
                      color: "#5bc4e5",
                      y : -46
                  }
              }]
            },{
                name: 'Outgoing',
                type: 'solidgauge',
                data: [{
                    agname: "dash_records",
                    color: "#bdd002",
                    innerRadius: "63%",
                    radius: "87%",
                    percentage: 69.56521739130434,
                    total: 46,
                    y: 32,
                    dataLabels: {
                        color: "#bdd002",
                        y : -12
                    }
                }]
            },{
                name: 'Incoming',
                type: 'solidgauge',
                data: [{
                    agname: "dash_records",
                    color: "#e51c1f",
                    innerRadius: "38%",
                    radius: "62%",
                    percentage: 30.434782608695652,
                    total: 46,
                    y: 14,
                    dataLabels: {
                        color: "#e51c1f",
                        y : 18
                    }
                }]
            }]
          }
        }
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