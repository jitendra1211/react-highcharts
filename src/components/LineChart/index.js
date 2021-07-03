import React, {Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import './style.scss';
import $ from 'jquery';

class LineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.options = {
            title: {
                text: 'Line Chart'
            },
            chart: {
                events: {
                    load: function () { 
                        $(".highcharts-legend-item path").attr('stroke-width', 12);
                    },
                    redraw: function () {
                        $(".highcharts-legend-item path").attr('stroke-width', 12);
                    }
                }
            },

            credits: {
                enabled: false
            },
            subtitle: {
                text: ''
            },
        
            yAxis: {
                title: {
                    text: 'Total Cost'
                }
            },
        
            xAxis: {
                accessibility: {
                    rangeDescription: 'Range: 2010 to 2017'
                }
            },
        
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
                backgroundColor: "transparent",
                borderColor: "transparent",
                borderWidth: "",
                symbolHeight: 12,
                symbolWidth: 12,
                symbolRadius: 6,
                itemStyle: {
                    color: "#5B6372",
                    cursor: "default",
                    fontFamily: "Open Sans",
                    fontSize: "13px",
                    fontWeight: "normal"
                },
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: true,
                    },
                    marker: {
                        symbol: 'circle'
                    },
                    pointStart: 2010
                }
            },
        
            series: [{
                name: 'Series 1',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }, {
                name: 'Series 2',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, {
                name: 'Series 3',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }, {
                name: 'Series 4',
                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            }, {
                name: 'Series 5',
                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            }],        
          }
      }

      

    render() {
      return (
        <HighchartsReact
            highcharts={Highcharts}
            options={this.options}
        />
      )
    }
  }

export default LineChart;
