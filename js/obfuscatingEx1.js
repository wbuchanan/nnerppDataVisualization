google.charts.load('current', {packages:['corechart']});
google.charts.setOnLoadCallback(drawSeriesChart);
function drawSeriesChart() {
    var data = google.visualization.arrayToDataTable([
        ['ID', 'X', 'Y', 'Color', 'Size'],
        [ '', 5, 1, 'steelblue', 5],
        [ '', 5, 3, 'steelblue', 7.5],
        [ '', 5, 5, 'steelblue', 10],
        [ '', 5, 8, 'steelblue', 20],
        [ '', 5, 12, 'steelblue', 40],
        [ '', 5, 17, 'steelblue', 50]
    ]);

    var options = {
        title: '',
        hAxis: { minValue: 0, maxValue: 10, gridlines : { color : 'none' }, ticks : [] },
        vAxis: { maxValue: 20, gridlines : { color : 'none' }, ticks : [] },
        width: 900,
        height: 600,
        sizeAxis : { maxSize : 50, maxValue : 50, minSize : 5, minValue : 5 },
        chartArea: { width: '95%', height: '95%' },
        legend: { position: 'none' },
        tooltip: { trigger: 'none' }
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('obfuscating1'));

    chart.draw(data, options);
}
