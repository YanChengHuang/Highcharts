Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', function (data) {

  // Create the chart
  Highcharts.stockChart('container', {
    chart: {
      type: 'area'
    },

    rangeSelector: {
      selected: 1
    },

    title: {
      text: 'AAPL Stock Price'
    },

    yAxis: {
      reversed: true, //是否顛倒Y軸
    },

    series: [{
      name: 'AAPL Stock Price',
      data: data,
      threshold: null,
      tooltip: {
        valueDecimals: 2
      }
    }]
  });
});