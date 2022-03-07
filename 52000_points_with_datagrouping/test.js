Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/large-dataset.json', function (data) {

  // Create a timer
  var start = +new Date(); //獲取現在時間
  // Create the chart
  Highcharts.stockChart('container', {
    chart: {
      events: {
        load: function () { // 當 chart 設定完成時執行
            this.setTitle(null, {
              text: 'Built chart in ' + (new Date() - start) + 'ms' //現在時間 - start = chart 花費時間
            });
        }
      },
      zoomType: 'xy'
    },

    rangeSelector: { //設定觀看data範圍

      buttons: [{
        type: 'day',
        count: 3,
        text: '3d'
      }, {
        type: 'week',
        count: 1,
        text: '1w'
      }, {
        type: 'month',
        count: 1,
        text: '1m'
      }, {
        type: 'month',
        count: 6,
        text: '6m'
      }, {
        type: 'year',
        count: 1,
        text: '1y'
      }, {
        type: 'all',
        text: 'All'
      }],
      selected: 3
    },

    yAxis: {
      title: {
        text: 'Temperature (C)'
      }
    },

    title: {
      text: 'Hourly temperatures in Vik i Sogn, Norway, 2009-2017',
      align: 'left'
    },

    subtitle: {
      text: 'Built chart in ...', // dummy text to reserve space for dynamic subtitle
      align: 'left'
    },

    series: [{
      name: 'Temperature',
      data: data.data,
      pointStart: data.pointStart, //開始時間
      pointInterval: data.pointInterval, //時間間隔(1H)
      tooltip: {
        valueDecimals: 1,
        valueSuffix: 'C'
      }
    }]

  });
});