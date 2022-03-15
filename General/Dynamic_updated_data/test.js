// Create the chart
Highcharts.stockChart('container', {
    chart: {
      events: {
        load: function () {
  
          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () { // 1000ms 執行一次此func
            var x = (new Date()).getTime(), // current time
              y = Math.round(Math.random() * 100); //0-100隨機值
              series.addPoint([x, y], true, true);// 增加新資料並位移到最新資料
          }, 1000);
        }
      }
    },
  
    time: {
      useUTC: false
    },
  
    rangeSelector: {
      buttons: [{
        count: 1,
        type: 'minute',
        text: '1M'
      }, {
        count: 5,
        type: 'minute',
        text: '5M'
      }, {
        type: 'all',
        text: 'All'
      }],
      inputEnabled: false,
      selected: 0
    },
  
    title: {
      text: 'Live random data'
    },
  
    exporting: {
      enabled: false
    },
  
    series: [{
      name: 'Random data',
      data: (function () { 
        // 產生當下時間之前1000秒的隨機資料
        var data = [],
          time = (new Date()).getTime(),
          i;
  
        for (i = -999; i <= 0; i += 1) {
          data.push([
            time + i * 1000,
            Math.round(Math.random() * 100)
          ]);
        }
        return data;
      }())
    }]
  });