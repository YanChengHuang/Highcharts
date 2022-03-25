Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-ohlcv.json', function (data) {
  // split the data set into ohlc and volume
  var ohlc = [],
    volume = [],
    indicator_pos = 2,
    dataLength = data.length,
    height = 600,
    top = 300;
    series =[{
      type: 'candlestick',
      id: 'aapl',
      name: 'AAPL',
      data: data
    }, {
      type: 'column',
      id: 'volume',
      name: 'Volume',
      data: volume,
      yAxis: 1
    }, {
      type: 'pc',
      id: 'overlay',
      linkedTo: 'aapl',
      yAxis: 0
    }];

  for (var i = 0; i < dataLength; i += 1) {
    ohlc.push([
      data[i][0], // the date
      data[i][1], // open
      data[i][2], // high
      data[i][3], // low
      data[i][4] // close
    ]);

    volume.push([
      data[i][0], // the date
      data[i][5] // the volume
    ]);
  }

  // create the chart
  Highcharts.stockChart('container', {
    chart: {
      height: height
    },
    title: {
      text: 'AAPL Historical'
    },
    subtitle: {
      text: 'All indicators'
    },
    legend: {
      enabled: true
    },
    rangeSelector: {
      selected: 2
    },
    yAxis: [{
      height: 207
    }, {
      top: top,
      height: 138
    }],
    plotOptions: {
      series: {
        showInLegend: true
      }
    },
    series: series
    // {
    //   type: 'macd',
    //   id: 'oscillator',
    //   linkedTo: 'aapl',
    //   yAxis: 2
    // },
    //  {
    //     type: 'mfi',
    //     id: 'oscillator_2',
    //     linkedTo: 'aapl',
    //     yAxis: 3
    //   }

  }, function (chart) {
    document.getElementById('overlays').addEventListener('change', function (e) {
      var series = chart.get('overlay');
        // console.log(series)
      if (series) {
        series.remove(false); // Whether to redraw the chart
        chart.addSeries({
          type: e.target.value,
          linkedTo: 'aapl',
          id: 'overlay'
        });
      }
    });

    document.getElementById('oscillators').addEventListener('change', function (e) {
        // if(indicator_pos === 3){
        //     var series = chart.get('oscillator');
        //     if (series) {
        //         series.remove(false);  // Whether to redraw the chart
        //             chart.addSeries({
        //                 type: e.target.value,
        //                 id: 'oscillator',
        //                 linkedTo: 'aapl',
        //                 yAxis: indicator_pos
        //             }); 
        //             indicator_pos = 2
        //         }}
        // else if(indicator_pos === 2){
        //     var series = chart.get('oscillator_2');
        //     if (series) {
        //         series.remove(false);  // Whether to redraw the chart
        //             chart.addSeries({
        //                 type: e.target.value,
        //                 id: 'oscillator_2',
        //                 linkedTo: 'aapl',
        //                 yAxis: indicator_pos
        //             }); 
        //             indicator_pos = 3
        //         }}  
        height += 138;
        top += 138 ;
        const axisId = 'yaxis-' + (++indicator_pos)
        chart.update({
          chart: {
            height: height
          },
          subtitle: {
              text: `update`
          }
        });
        chart.addAxis({
          id: axisId,
          top: top,
          height: 138
        }, false)
        chart.addSeries({
            type: e.target.value,
            id: 'oscillator',
            linkedTo: 'aapl',
            yAxis: axisId
        }); 
              
         
        
          });
  });
});