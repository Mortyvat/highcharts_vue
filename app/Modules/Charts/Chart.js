export class Chart {

    constructor(options) {
        this.chartType = options.chartType;
        this.title = options.title;
        this.xAxis = options.xAxis;
        this.yAxis = options.yAxis;
        this.series = options.series;
        this.options = {};
        this.setOptions();    
    }

    setChart(){
        Highcharts.chart('container', this.options);
    }

    setMainData(){
        this.setOptionsChart();
        this.setOptionsTitle();
    }

    setAxisData(){
        this.setXAxis();
        this.setYAxis();
    }

    setOptions(){
        this.setMainData();
        this.setAxisData();
        this.createSeries();
    }

    setXAxis(){
        this.options.xAxis = {
            categories: this.xAxis
        }
    }

    setYAxis(){
        this.options.yAxis = {
            title: {
                text: this.yAxis
            }
        }
    }

    createSeries(){
        this.options.series = this.series
    }

    setOptionsChart(){
        this.options.chart = {
            type: this.chartType
        }
    }
    
    setOptionsTitle(){
        this.options.title = {
            text: this.title
        }
    }
}