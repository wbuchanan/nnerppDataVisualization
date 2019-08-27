google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Graduation Rate', 'Dropout Rate', 'Continuing Rate', 'Other'],
        ['2013',  64, 18, 16, 2],
        ['2014',  70, 15, 14, 1],
        ['2015',  72, 15, 11, 2],
        ['2016',  75, 12, 10, 3]
    ]);

    var options = {
        title: 'High School Graduation, Dropout, & Completion Rates',
        hAxis: { title: 'Year', format: 'decimal', titleTextStyle: {color: '#333'}, textPosition: 'out' },
        vAxis: { title: '% of Students', format: 'decimal', minValue: 0, maxValue: 100},
        width: 900,
        height: 600,
        isStacked: 'absolute',
        series : {
            0 : { color: '#875692', lineWidth: 3, opacity: 1 },
            1 : { color: '#f38400', lineWidth: 3, opacity: 1 },
            2 : { color: '#a1caf1', lineWidth: 3, opacity: 1 },
            3 : { color: '#be0032', lineWidth: 3, opacity: 1 }
        },
        chartArea: { width: '65%', height: '80%' }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('obfuscating2'));
    chart.draw(data, options);
}