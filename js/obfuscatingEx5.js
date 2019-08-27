google.charts.load('current', {packages:['corechart']});
google.charts.setOnLoadCallback(drawSeriesChart);
function drawSeriesChart() {

    var data = google.visualization.arrayToDataTable([
        ['Rate Type', 'Graduation Rate', 'Dropout Rate', 'Continuing Rate', 'Other'],
        [2013,  64, 18, 16, 2],
        [2014,  70, 15, 14, 1],
        [2015,  72, 15, 11, 2],
        [2016,  75, 12, 10, 3]
    ]);

    var options = {
        title: 'High School Graduation, Dropout, & Completion Rates',
        hAxis: { title: 'Year', format: '####', titleTextStyle: {color: '#333'}, textPosition: 'out', gridlines: { color : 'none' } },
        vAxis: { title: '% of Students', format: 'decimal', minValue: 0, maxValue: 100, gridlines: { color : 'none' }},
        width: 900,
        height: 600,
        chartArea: { width: '65%', height: '80%' },
        orientation : 'horizontal',
        isStacked: true,
        bar: { groupWidth: '75%' },
        colors: [ '#875692', '#f38400', '#a1caf1', '#be0032' ]
    };

    var chart = new google.visualization.BarChart(document.getElementById('obfuscating5'));
    chart.draw(data, options);

}
