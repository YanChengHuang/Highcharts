Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', data => {
  const chart = Highcharts.stockChart('container', {
    chart: {
      height: 400
    },

    title: {
      text: 'Highcharts Stock Responsive Chart'
    },

    subtitle: {
      text: 'Click small/large buttons or change window size to test responsiveness'
    },

    rangeSelector: {
      selected: 1
    },

    series: [{
      name: 'AAPL Stock Price',
      data: data,
      type: 'area',
      threshold: null,
      tooltip: {
        valueDecimals: 2
      }
    }],

    responsive: {
      rules: [{
        condition: { //Under which conditions the rule applies.
          maxWidth: 500
          //maxHeight
        },
        chartOptions: {
          chart: {
            height: 300
          },
          subtitle: {
            text: null
          },
          navigator: {
            enabled: false
          },
          // series: [{
          //   name: 'AAPL Stock Price',
          //   data: data,
          //   type: 'area',
          //   threshold: null,
          //   tooltip: {
          //     valueDecimals: 1
          //   },
          //   color:'green',
          // }],
        }
      }]
    }
  });
  document.getElementById('small').addEventListener('click', () => {
    chart.setSize(400);
  });

  document.getElementById('large').addEventListener('click', () => {
    chart.setSize(800);
  });

  document.getElementById('auto').addEventListener('click', () => {
    chart.setSize(null);
  });
});