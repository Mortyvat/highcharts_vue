<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import hcMore from "highcharts/highcharts-more";

hcMore(Highcharts);

export default {
  components: {
    highcharts: Chart
  },
  methods: {
    setSolidgaugeTooltip(){
        this.options.tooltip.enabled = true;
        
        this.options.tooltip.formatter = function() {
            return	'<span style=\'font-size:10px\'><b>Šparlinek Marcel</b></span><table>'+
                    '<tr><td style=\'color:'+this.series.data[0].color+';padding:0\'><b>'+this.point.series.name+'</b></td></tr>'+
                    '<tr><td style=\'padding:0\'><b>Turn:</b> '+this.series.yAxis.max+'</td></tr>'+
                    '<tr><td style=\'padding:0\'><b>Count:</b> '+this.y+'</td></tr>'+
                    '<tr><td style=\'padding:0\'><b>Percent:</b> '+Highcharts.numberFormat(this.percentage, 2)+'%</td></tr>'+
                    '</table>';
        };
        this.options.tooltip.shared = true;
        this.options.tooltip.useHTML = true;
        this.options.tooltip.headerFormat = '';
        this.options.tooltip.pointFormat = '';
        this.options.tooltip.positioner = function (labelWidth) {
            return {
                x: (this.chart.chartWidth - labelWidth) / 2,
                y: (this.chart.plotHeight / 2) + 105
            };
        }
    }
    /*chartCallback(chart) {
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
    }*/
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "gauge",
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },

        title: {
          text: "Tachometr"
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
          min: 0,
          max: 200,

          minorTickInterval: "auto",
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: "inside",
          minorTickColor: "#666",

          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: "inside",
          tickLength: 10,
          tickColor: "#666",
          labels: {
            step: 2,
            rotation: "auto"
          },
          title: {
            text: "km/h"
          },
          plotBands: [
            {
              from: 0,
              to: 120,
              color: "#55BF3B" // green
            },
            {
              from: 120,
              to: 160,
              color: "#DDDF0D" // yellow
            },
            {
              from: 160,
              to: 200,
              color: "#DF5353" // red
            }
          ]
        },

        series: [
          {
            name: "Speed",
            data: [80],
            tooltip: {
              valueSuffix: " km/h"
            }
          }
        ]
      }
    };
  }
};
</script>
