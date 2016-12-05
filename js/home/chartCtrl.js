/**
 * Created by 叶家洪 on 2016/11/20.
 */
angular.module('patentApp').controller('chartCtrl', function ($scope) {
    $scope.cfgPatentProposer =  {
        options: {
            chart: {
                backgroundColor: 'transparent',
                type: 'pie'
            },
            title: {
                text: "专利申请人统计",
                style: {
                    'display': 'none'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            xAxis: {
                categories: ['Aapples','Bananas','Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'A',
                y: 56.33
            }, {
                name: 'Chrome',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Firefox',
                y: 10.38
            }, {
                name: 'Safari',
                y: 4.77
            }]
        }],
        size: {
            height: 200
        }
    };

    $scope.cfgSubscribe = {
        options: {
            chart: {
                backgroundColor: 'transparent',
                type: 'column'
            },
            title: {
                style: {
                    'display': 'none'
                }
            },
            xAxis: {
                labels: {
                    rotate: -45
                }
            },
            yAxis: {
                text: '订阅俩'
            }
        },
        series: [{
            data:[
                {name: 'A',y:12.4},
                {name: 'B',y:12.4},
                {name: 'C',y:12.4},
                {name: 'D',y:12.4}
            ]
        }],
        size: {
            height: 200
        },
        plotOptions: {
          column: {
              showInLegend: false
          }
        }
    };
});