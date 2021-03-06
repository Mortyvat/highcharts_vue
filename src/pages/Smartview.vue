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
    <div v-if="selected === 'gauge'">
      <gauge/>
    </div>
    <div v-else-if="selected === 'heatmap'">
      <heatmap/>
    </div>
    <div v-else-if="selected === 'stackedbar'">
      <stackedbar/>
    </div>
    <div v-else>
      <solidgauge/>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Gauge from "@/components/Charts/Gauge";
import SolidGauge from "@/components/Charts/SolidGauge";
import HeatMap from "@/components/Charts/HeatMap";
import StackedBar from "@/components/Charts/StackedBar";

export default {
  name: 'Smartview',
  components:{
    Header,
    gauge: Gauge,
    heatmap: HeatMap,
    solidgauge: SolidGauge,
    stackedbar: StackedBar
  },
  data() {
    return {
      selected: 'solidgauge', 
      selectOptions : [
        { text: 'Gauge', value: 'gauge' },
        { text: 'HeatMap', value: 'heatmap' },
        { text: 'SolidGauge', value: 'solidgauge' },
        { text: 'StackedBar', value: 'stackedbar'}
      ],
    }
  }
}
</script>

<style scoped>
 span{
   margin:10px;
 }
</style>