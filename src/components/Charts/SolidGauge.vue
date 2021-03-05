<template>
  <div>
    <highcharts :options="chartOptions" :callback="chartCallback"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import solidGauge from 'highcharts/modules/solid-gauge';
solidGauge(Highcharts);

export default {
  components: {
    highcharts: Chart
  },
  methods: {
    chartCallback(chart) {
      if (!chart.renderer.forExport) {
        setInterval(function() {
          var point = chart.series[0].points[0],
            newVal,
            inc = Math.round((Math.random() - 0.5) * 20);

          newVal = point.y + inc;
          if (newVal < 0 || newVal > 200) {
            newVal = point.y - inc;
          }

          point.update(newVal);
        }, 3000);
      }
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          browserName : "Chrome",
          clickAgname : "topic_records",
          currentLegendState : 0,
          dataLabelAll : 0,
          dataLabelTotal : 0,
          dayPoint : "2020-01-16",
          defaultChartType : "AgentCard",
          donut : "false",
          type : this.chartType,
          group : "Group",
          //height : "110%",
          intervalSplit : 1,
          intervalUnit : 1,
          inverted : 0,
          mixed : "not assig. mixed",
          monthPoint : "2020_01",
          noData : true,
          oneColumn : false,
          prevLegendState : 1, 
          prevType : "solidgauge",
          reflow : 0,
          stacking : 0,
          subChart : true
        },

        title: {
          text: "Tachometr"
        },

        plotOptions : {
            series : {
                cursor : "pointer"
            },
            solidgauge : {
                borderWidth : '12px',
                rounded : true,
                stickyTracking : true,
                linecap : 'round',
                dataLabels: {
                    enabled : true,
                    backgroundColor :  'none',
                    padding : 0,
                    shadow : false,
                    style : {
                        fontSize : '16px'
                    },
                    /*formatter : function(){
                        var value = getValueStr(this.y);
                        return value;
                    }*/
                }
            }
        },

        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [[0, "#FFF"], [1, "#333"]]
              },
              borderWidth: 0,
              outerRadius: "109%"
            },
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [[0, "#333"], [1, "#FFF"]]
              },
              borderWidth: 1,
              outerRadius: "107%"
            },
            {
              // default background
            },
            {
              backgroundColor: "#DDD",
              borderWidth: 0,
              outerRadius: "105%",
              innerRadius: "103%"
            }
          ]
        },

        // the value axis
        yAxis: {
          min : 0,
          max : 500,
          lineWidth : 0,
          tickPositions: [],
          title: {
            text: "km/h"
          },
        },

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
    };
  }
};
</script>
