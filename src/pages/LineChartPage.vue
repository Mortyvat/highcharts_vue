<template>
  <div id="linechart">
    <Header />
    <h1>LineChart</h1>
    <datetime v-model="defaultDate">
      <label for="startDate" slot="before">Vložte datum: </label>
      <template slot="button-cancel">
        Zavřít
      </template>
      <template slot="button-confirm">
        Potvrdit
      </template>
    </datetime>
      <button @click="deductDay" class="btn btn-primary">zpět</button>
      <button @click="ChartData" class="btn btn-success">Vykreslit</button>
      <button @click="addDay" class="btn btn-danger">další</button>
  </div>
</template>

<script>
import Header from '@/components/Header'
//import StackedBar from "@/components/Charts/StackedBar";
import { Datetime } from 'vue-datetime';
 

export default {
  name: 'Linechart',
  components:{
    Header,
    datetime: Datetime
  },
  methods : {
    getToday: function(){
      let today = new Date()
      let dd = String(today.getDate()).padStart(2, '0')
      let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
      let yyyy = today.getFullYear()
      this.defaultDate = yyyy + '-' + mm +  '-' + dd + 'T00:00:00.000Z'
    },
    deductDay: function(){
      var date = new Date(this.defaultDate)
      date.setDate(date.getDate() - 1)
      var dateString =
      date.getUTCFullYear() + "-" +
      ("0" + (date.getUTCMonth()+1)).slice(-2) + "-" +
      ("0" + date.getUTCDate()).slice(-2) + "T00:00:00.000Z"
      this.defaultDate = dateString
    },
    addDay: function(){
            var date = new Date(this.defaultDate)
      date.setDate(date.getDate() + 1)
      var dateString =
      date.getUTCFullYear() + "-" +
      ("0" + (date.getUTCMonth()+1)).slice(-2) + "-" +
      ("0" + date.getUTCDate()).slice(-2) + "T00:00:00.000Z"
      this.defaultDate = dateString
    },
    ChartData: function(){  
      this.defaultDate = this.defaultDate.split("T00:00:00.000Z")[0]
      console.log(this.defaultDate)
      this.$http.get('https://u-briza0r1.pce.retia.cz/highcharts_vue/highcharts_vue/app/api/fetch_chart_data.php?date='+this.defaultDate)
      .then((result) => {
        this.allData = result.data
      })
    }
  },
  data() {
    return {
      currentDate : Date.now(),
      allData : [],
      defaultDate: '',
      selectOptions : [
        { text: 'Gauge', value: 'gauge' },
        { text: 'HeatMap', value: 'heatmap' },
        { text: 'SolidGauge', value: 'solidgauge' },
        { text: 'StackedBar', value: 'stackedbar'}
      ],
    }
  },
  mounted() {
    this.getToday()
  },
}
</script>

<style scoped>
 span{
   margin:10px;
 }
.btn{
  margin: 5px 5px;
}
</style>