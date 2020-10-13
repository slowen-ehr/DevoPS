let data = getDataLine()

data = data.map(function(lineSeries) {
    lineSeries.data.sort(function(a, b) {
        return a.x.getTime() - b.x.getTime()
    })
    return lineSeries;
})

Highcharts.chart('line', {
    title: {
        text: 'Devo Line Chart'
    },
    xAxis: {
        type: 'datetime',
    },
    yAxis: {
        title: {
            text: 'Value'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    series: data,

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});