Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-ohlcv.json', function (data) {

  // split the data set into ohlc and volume
  var ohlc = [],
    volume = [],
    dataLength = data.length,
     // set the allowed units for data grouping
     groupingUnits = [[
        'week',             // unit name
        [1]               // allowed multiples
      ], [
        'month',
        [1, 2, 3, 4, 6]
      ]],
    i = 0;
    console.log(data[i][i])
  function ohlc_colors(point){
    if(point[1] > point[4]) return 'green'
    if(point[1] < point[4]) return 'red'
    return 'yellow'
  }
  for (i; i < dataLength; i += 1) {
    ohlc.push({
      x : data[i][0],
      open : data[i][1],
      high : data[i][2],
      low : data[i][3], 
      close : data[i][4],
      color :  ohlc_colors(data[i]),
      y : data[i][1],
    });
    // ohlc.push([
    //     data[i][0], // the date
    //     data[i][1], // open
    //     data[i][2], // high
    //     data[i][3], // low
    //     data[i][4], // close
    //   ]);
    volume.push({
      x : data[i][0], // the date
      y : data[i][5] // the volume
    });
  }
  // console.log(ohlc)
  // create the chart
  Highcharts.stockChart('container', {

    rangeSelector: { // 設定觀看範圍
      selected: 2 //預設觀看範圍 1 = 3m , 2 = 6m
    },

    title: { //設定標題
      text: 'AAPL Historical'
    },

    yAxis: [{
      labels: { //設定 ohlc的y軸
        align: 'right',
        x: -3 //The x position offset of all labels relative to the tick positions on the axis
      },
      title: {
        text: 'OHLC'
      },
      height: '60%', //占圖的%數
      lineWidth: 2, // y軸寬度
      resize: { //Options for axis resizing
        enabled: true // 新增一條線 供使用者拖曳調整高度
      }
    }, {
      labels: {
        align: 'right', //設定 volumn 的y軸
        x: -3
      },
      title: {
        text: 'Volume'
      },
      top: '65%',
      height: '35%',
      offset: 0,
      lineWidth: 2
    }],

    tooltip: {
      split: true, //分開表示
      valuePrefix: ' 共', //前後輟字
      valueSuffix: ' 元',
      useHTML : true
    },
    series: [{ //設定data
      type: 'candlestick',
      name: 'AAPL',
      data: ohlc,
      dataGrouping: { // 
        units: groupingUnits //多少天一個bar
      },
    }, {
      type: 'column',
      name: 'Volume',
      data: volume,
      yAxis: 1,
      dataGrouping: {
        units: groupingUnits
      }
    },
    ]
  });
});