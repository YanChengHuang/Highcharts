Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json', function (data) {

  var startDate = new Date(data[data.length - 1][0]), //拿最後一個data的時間
    minRate = 1,
    maxRate = 0,
    startPeriod,
    date,
    rate,
    index;
  
  startDate.setMonth(startDate.getMonth() - 3); // 設定開始時間為最後一個data的時間的前三個月
  startPeriod = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()); //轉成毫秒數
  //找出最近三個月的最高值和最低值
  for (index = data.length - 1; index >= 0; index = index - 1) {
    date = data[index][0]; // data[i][0] is date
    rate = data[index][1]; // data[i][1] is exchange rate
    if (date < startPeriod) {
      break; // 當時間小於開始時間停止
    }
    if (rate > maxRate) {
      maxRate = rate;
    }
    if (rate < minRate) {
      minRate = rate;
    }
  }

  // 開始畫圖
  Highcharts.stockChart('container', {

    rangeSelector: {
      selected: 1
    },

    title: {
      text: 'USD to EUR exchange rate'
    },

    yAxis: {
      title: {
        text: 'Exchange rate'
      },
      //在y軸畫線
      plotLines: [{
        value: minRate,
        color: 'green',//線顏色
        dashStyle: 'solid', //線樣式
        width: 2,//線寬度
        label: {
          text: 'Last quarter minimum'
        }
      }, {
        value: maxRate,
        color: 'red',
        dashStyle: 'shortdash',
        width: 2,
        label: {
          text: 'Last quarter maximum'
        }
      }]
    },

    series: [{
      name: 'USD to EUR',
      data: data,
      tooltip: {
        valueDecimals: 4
      }
    }]
  });
});