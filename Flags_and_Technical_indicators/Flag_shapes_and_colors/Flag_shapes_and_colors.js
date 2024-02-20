Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json', function (data) {

  var year = new Date(data[data.length - 1][0]).getFullYear(); // Get year of last data point

  // Create the chart
  Highcharts.stockChart('container', {


    rangeSelector: {
      selected: 4
    },

    title: {
      text: 'USD to EUR exchange rate'
    },

    yAxis: {
      title: {
        text: 'Exchange rate'
      }
    },

    series: [{
      name: 'USD to EUR',
      data: data,
      id: 'dataseries',
      tooltip: {
        valueDecimals: 4
      }
    }, { // 倆倆一對
      type: 'flags',
      data: [{
        x: Date.UTC(year, 1, 22),
        title: ' ',
        text: 'Shape: "squarepin"'
      }, {
        x: Date.UTC(year, 3, 28),
        title: ' ',
        text: 'Shape: "squarepin"'
      }],
      onSeries: 'dataseries',
      shape: 'squarepin',
      width: 16
    }, { // 定義一對旗子
    type: 'flags',
    data: [{
        x: Date.UTC(year, 1, 27),
        title: ' ',
        text: 'Shape: "squarepin"'
    }, {
        x: Date.UTC(year, 3, 21),
        title: ' ',
        text: 'Shape: "squarepin"'
    }],
    color: Highcharts.getOptions().colors[0], // 邊框顏色
    fillColor: '#FFF8DC', // 填入顏色
    onSeries: 'dataseries',
    shape: 'squarepin',
    width: 16
      },  {
      type: 'flags',
      data: [{
        x: Date.UTC(year, 2, 1),
        title: ' ',
        text: 'Shape: "circlepin"'
    }, {
        x: Date.UTC(year, 3, 1),
        title: ' ',
        text: 'Shape: "circlepin"'
      }],
      shape: 'circlepin',
      width: 16
    }, {
      type: 'flags',
      data: [{
        x: Date.UTC(year, 2, 10),
        title: ' ',
        text: 'Shape: "flag"'
      }, {
        x: Date.UTC(year, 3, 11),
        title: ' ',
        text: 'Shape: "flag"'
      }],
      color: Highcharts.getOptions().colors[0], // same as onSeries
      fillColor: Highcharts.getOptions().colors[0],
      onSeries: 'dataseries',
      width: 16,
      style: { // text style
        color: 'white'
      },
      states: {
        hover: {
          fillColor: '#395C84' // darker
        }
      }
    }]
  });
});