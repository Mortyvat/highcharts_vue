import {SolidGaugeChart} from '../Charts/SolidGaugeChart';
import {BarChart} from '../Charts/BarChart';
import {Chart} from '../Charts/Chart';

export class ChartFactory {
    constructor(options){
        this.options = options;
        this.type = options.chartType;
    }

    chooseChart(){
        switch(this.type) {
            case 'line':
                this.class = LineChart;
              break;
            case 'solidgauge':
                this.class = SolidGaugeChart;
              break;
            case 'dot':
                this.class = DotChart;
              break;
            case 'bar':
                this.class = BarChart;
              break;
            default:
                this.class = Chart;
          }
    }

    get(){
        this.chooseChart();
        return new this.class(this.options);
    }
}
