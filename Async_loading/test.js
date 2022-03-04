const dataURL = 'https://demo-live-data.highcharts.com/aapl-historical.json';

/**
 * Load new data depending on the selected min and max
 */
function afterSetExtremes(e) {
  const { chart } = e.target;
  chart.showLoading('Loading data from server...');//印出loading字樣
  fetch(`${dataURL}?start=${Math.round(e.min)}&end=${Math.round(e.max)}`)
    .then(res => res.ok && res.json()) // res.ok用來判斷狀態碼是否正常 , Fetch 成功後的 response 本身是個 ReadableStream 物件，所以還需要再透過.json來取得資料
    .then(data => {
      chart.series[0].setData(data);//修改data
      chart.hideLoading();//隱藏loading字樣
    }).catch(error => console.error(error.message));
}

fetch(dataURL)
  .then(res => res.ok && res.json())
  .then(data => {

    // Add a null value for the end date
    data.push([Date.UTC(2011, 9, 14, 18), null, null, null, null]);
    // create the chart
    Highcharts.stockChart('container', {
      chart: {
        type: 'candlestick',
        zoomType: 'x'
      },

      navigator: {
        adaptToUpdatedData: false,//When loading data async, as in the demo below, this should be false. Otherwise new data will trigger navigator redraw, which will cause unwanted looping.
        series: {
          data: data
        }
      },

      scrollbar: {
        liveRedraw: false //當拖曳scrollbar時 會同步更新data 但這邊data會因為zooming的區塊改變所以不建議使用
      },

      title: {
        text: 'AAPL history by the minute from 1998 to 2011',
        align: 'left'
      },

      subtitle: {
        text: 'Displaying 1.7 million data points in Highcharts Stock by async server loading',
        align: 'left'
      },

      rangeSelector: {
        buttons: [{
          type: 'hour',
          count: 1,
          text: '1h'
        }, {
          type: 'day',
          count: 1,
          text: '1d'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'year',
          count: 1,
          text: '1y'
        }, {
          type: 'all',
          text: 'All'
        }],
        inputEnabled: false, // it supports only days
        selected: 4 // all
      },

      xAxis: {
        events: {
          afterSetExtremes: afterSetExtremes //當x軸range更動時觸發
        },
        minRange: 3600 * 1000 // The minimum range to display on this axis (one hour)
      },

      yAxis: {
        floor: 0 //The lowest allowed value for automatically computed axis extremes
      },

      series: [{
        data: data,
        dataGrouping: {
          enabled: false
        }
      }]
    });
  }).catch(error => console.error(error.message));