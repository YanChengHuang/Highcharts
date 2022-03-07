var seriesOptions = [],
  seriesCounter = 0,
  names = ['MSFT', 'AAPL', 'GOOG'];



function createChart() {

  Highcharts.stockChart('container', {

    rangeSelector: {
      selected: 4
    },

    yAxis: {
      labels: {
        formatter: function () {
          // console.log(this.value)
          return (this.value > 0 ? ' + ' : '') + this.value + '%'; //定義Y軸格式
        }
      },
      plotLines: [{
        value: 0, //y軸位置
        width: 5,//y軸寬度
        color: 'silver'//y軸顏色
      }]
    },

    plotOptions: {
      series: {
        compare: 'percent',//以第一個非零整數當0%做比較
        showInNavigator: false
      }
    },

    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>', // HTML
      valueDecimals: 2, //小數點後幾位
      split: true
    },

    series: seriesOptions //設定data
  });
}

function success(data) {
  var name = this.url.match(/(msft|aapl|goog)/)[0].toUpperCase(); //偵測url裡有 msft,aapl,goog 哪個 並轉成大寫
  var i = names.indexOf(name); //偵測到的array ['MSFT', 'AAPL', 'GOOG'] 位置
  // console.log(this.url.match(/(msft|aapl|goog)/))
  seriesOptions[i] = { //定義data
    name: name,
    data: data
  };

  // As we're loading the data asynchronously, we don't know what order it
  // will arrive. So we keep a counter and create the chart when all the data is loaded.
  seriesCounter += 1;

  if (seriesCounter === names.length) { //當 seriesCounter = 3 => 三條線的data都抓到了 開始畫圖
    createChart();
  }
}

Highcharts.getJSON(
  'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/msft-c.json',
  success
);//第一個參數放要抓data的url 第二個放要執行的callbacks function
Highcharts.getJSON(
  'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/aapl-c.json',
  success
);
Highcharts.getJSON(
  'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/goog-c.json',
  success
);