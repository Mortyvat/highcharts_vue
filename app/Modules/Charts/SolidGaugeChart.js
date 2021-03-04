import {getValueStr} from "../../utils/chartSupport/getValueStr";
import {Chart} from "./Chart";

export class SolidGaugeChart extends Chart{
    
    constructor(options){
        super(options);
    }

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

    setMainData(){
        this.setOptionsChart();
        this.setOptionsTitle();
        this.setPlotOptions();
        this.setPane();
        this.setTooltip();
    }

    setPane(){
        this.options.pane = {
            startAngle: 0,
            endAngle: 360,
            background:[{
                borderWidth: 0,
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get()
            },{
                borderWidth: 0,
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get()
            },{
                borderWidth: 0,
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[3]).setOpacity(0.3).get()
            }]
        }
    }

    setPlotOptions(){
        this.options.plotOptions = {
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
                    formatter : function(){
                        var value = getValueStr(this.y);
                        return value;
                    }
                }
            }
        }
    }

    setOptionsChart(){
        this.options.chart = {
            type: 'solidgauge',
            //height: '110%',
            events: {
                render: this.renderIcons
            },
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
        }
    }

    setXAxis(){
        this.options.xAxis = {
            categories: [this.xAxis],
            labels: {
                style:{
                    fontSize: "10px"
                }
            }
        }
    }

    setYAxis(){
        this.options.yAxis = {
            text: this.yAxis,
            min : 0,
            max : 500,
            lineWidth : 0,
            tickPositions: []
        }
    }

    setTooltip(){
        this.options.tooltip = {
            enabled : true,
            useHTML : true,
            shared : true,
        }
        this.setSolidgaugeTooltip()
    }

    renderIcons() {

        // Move icon
        for(var i = 0; i < this.series.length; i++){
            if (!this.series[i].icon) {
                this.series[i].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
                    .attr({
                        stroke: '#303030',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': 2,
                        zIndex: 10
                    })
                    .add(this.series[2].group);
            }
            this.series[i].icon.translate(
                this.chartWidth / 2 - 10,
                this.plotHeight / 2 - this.series[i].points[0].shapeArgs.innerR -
                    (this.series[i].points[0].shapeArgs.r - this.series[i].points[0].shapeArgs.innerR) / 2
            );
        }
        //dve dopredu ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,'M', 8, -8, 'L', 16, 0, 8, 8]
        //jedna nahoru ['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0]
    }
}
