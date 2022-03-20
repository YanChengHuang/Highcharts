Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', function (data) {

  // Create the chart
  Highcharts.stockChart('container', {

    rangeSelector: {
      selected: 1
    },

    title: {
      text: 'AAPL Stock Price'
    },

    scrollbar: {
      barBackgroundColor: 'gray', //scrollbar背景顏色
      barBorderRadius: 5, //scrollbar曲率半徑
      barBorderWidth: 0,//scrollbar寬度
      buttonBackgroundColor: 'gray', //按鈕顏色
      buttonBorderWidth: 0,//按鈕寬度
      buttonBorderRadius: 7,//按鈕曲率半徑
      trackBackgroundColor: 'none',//scrollbar軌跡背景顏色
      trackBorderWidth: 1,//scrollbar軌跡寬度
      trackBorderRadius: 5,//scrollbar軌跡曲率半徑
      trackBorderColor: '#CCC' //scrollbar邊框顏色
    },

    series: [{
      name: 'AAPL Stock Price',
      data: data,
      tooltip: {
        valueDecimals: 2
      }
    }]
  });
});