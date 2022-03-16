
     //初始化函數 接受兩個參數 1.容器id (container)  2.圖表設定
var i = 1     
var mychart = Highcharts.chart('container', { 
    
    chart:{ //圖表類型
        type:'line', //default = line 
        // inverted: true, //x軸 y軸顛倒
        // plotBackgroundColor: '#ffff00', //背景更換成黃色
    },
    
    title: { //標題
    //     style: {
    //     fontSize: "20px",
    //     fontWeight: "bold",
    //     textAlign: "right",
    //     color: "#292929",
    //     padding: "8px"
    // },
        text: 'Solar Employment Growth by Sector, 2010-2016',
        // align:'left',
    },

    subtitle: { //子標題
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {  //y軸標題
        title: {
            text: 'Number of Employees'
            }
        },

    xAxis: { //x軸標題   
        // accessibility: {
        //     rangeDescription: 'Range: 2010 to 2017'
        // },
        categories:[2010,2011,2012,2013,2014,2015,2016,2017]
    },

    // credits: { // 版權標籤設定
    //     text:'cosbi',
    //     style:{
    //         fontSize: '15px',
    //     }
    // }, 

    legend: {
        layout: 'vertical', // 預設 horizontal
        align: 'right',
        verticalAlign: 'middle'
    },

    // tooltip: { //提示框設定
    //     style: {
    //         color: "#333333",
    //         cursor: "default",
    //         fontSize: "15px",
    //         whiteSpace: "nowrap"
    //     },
    //     valuePrefix: "共", 
    //     valueSuffix: "人",//加入前/後綴詞
    // },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
                },
            pointStart: 2010
        }
    },
    //設置圖表數據
    series: [
        
        {
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }
    ],

    responsive: { //響應式設定
    rules: [{
        condition: {
            maxWidth: 668
        },
        chartOptions: {
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
            }
        }
    }]
    }

}); 
// removePoint.addEventListener("click", function() {
//     mychart.series[0].remove()
// })

$(".removePoint").click(function(){
    mychart.series[mychart.series.length -1].remove()
    mychart.update({
        subtitle: {
            text: `已刪除或更新${i}個數據`
        }
        });
    i++
});

$(".updatePoint").click(function(){
    const random_array = []
    for(var j = 0;j<8;j++){
        random_array.push(Math.floor(Math.random()*150000))
    } 
    mychart.update({
        subtitle: {
            text: `已刪除或更新${i}個數據`
        }
        });
    mychart.addSeries({
        name: i,
        data: random_array
      });
    i++
});