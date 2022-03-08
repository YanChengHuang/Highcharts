Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json', function (data) {

  // Create the chart
  Highcharts.stockChart('container', {


    rangeSelector: {
      selected: 0
    },

    title: {
      text: 'USD to EUR exchange rate'
    },

    tooltip: {
      style: {
        width: '200px'
      },
      valueDecimals: 4,
      shared: true
    },

    yAxis: {
      title: {
        text: 'Exchange rate'
      }
    },

    series: [{
      name: 'USD to EUR',
      data: data,
      id: 'dataseries'

    // the event marker flags
    }, {
      type: 'flags',
      data: [{
        x: Date.UTC(2017, 11, 1), //將參數視為通用時間（UTC）來計算回傳由 1970-01-01 00:00:00 UTC 所經過的毫秒數
        title: 'A',
        text: 'Some event with a description'
      }, {
        x: Date.UTC(2017, 11, 12),
        title: 'B',
        text: 'Some event with a description'
      }, {
        x: Date.UTC(2017, 11, 22),
        title: 'C',
        text: 'Some event with a description'
      }, {
        x: Date.UTC(2017, 10, 16),
        title: 'D',
        text: 'Some event with a description'
      }],
      onSeries: 'dataseries', // The id of the series that the flags should be drawn on
      shape: 'flag',
    //   width: 16
    }]
  });
});