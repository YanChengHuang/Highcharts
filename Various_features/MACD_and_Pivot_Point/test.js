Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-ohlc.json', function (data) {

  Highcharts.stockChart('container', {

    rangeSelector: {
      selected: 2
    },

    yAxis: [{
      height: '75%',
      resize: {
        enabled: true
      },
      labels: {
        align: 'right',
        x: -3
      },
      title: {
        text: 'AAPL'
      }
    }, {
      top: '75%',
      height: '25%',
      labels: {
        align: 'right',
        x: -3
      },
      offset: 0,
      title: {
        text: 'MACD'
      }
    }],

    title: {
      text: 'AAPL Stock Price'
    },

    subtitle: {
      text: 'With MACD and Pivot Points technical indicators'
    },

    series: [{
      type: 'ohlc',
      id: 'aapl',
      name: 'AAPL Stock Price',
      data: data,
      zIndex: 1 //設定哪個圖優先顯示
    }, {
      type: 'pivotpoints',
      linkedTo: 'aapl',
      zIndex: 0,
      lineWidth: 1,
      dataLabels: {
        overflow: 'none',
        crop: false,
        y: 4,
        style: {
          fontSize: 9
        }
      },
      params:{
        // Implemented algorithms: 'standard', 'fibonacci' and 'camarilla'
        // wikipedia : https://en.wikipedia.org/wiki/Pivot_point_(technical_analysis)
        //standardPlacement=
            // function(b){var a=b[1]-b[2] ;//high-low
            //   return[null,null,b[0]+a,2*b[0]-b[2],b[0],2*b[0]-b[1],b[0]-a,null,null]} b[0]=(H + L + C) / 3.

        algorithm: 'standard',//設定算法
        period : 14 //設定週期
      },
    }, {
      type: 'macd',
      yAxis: 1,
      linkedTo: 'aapl',
      // params:{
      //   longperiod: The long period for indicator calculations
      //   shortPeriod: The short period for indicator calculations.
      // },
    }]
  });
});