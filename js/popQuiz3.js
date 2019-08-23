google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    /* Defines the data used for the first set of quiz questions. */
    var data = google.visualization.arrayToDataTable([
        ['SliceID', 'trueValue', { role: 'style' }],
        ['Blue',    39, '#1E97FC'],
        ['Green',   19.5, '#21C225'],
        ['Yellow',  9.8, '#FEE335'],
        ['Red',     7.4, '#E21B1C'],
        ['Pink',    3.1, '#FD50F0'],
        ['Purple',  21.2, '#8C50FB']
    ]);

    /* Defines the options for the first question in the pop quiz. */
    var options3 = {
        backgroundColor: 'none',
        width: 900,
        height: 600,
        chartArea: { width: '95%', height: '95%' },
        legend: { position: 'none' },
        orientation : 'horizontal',
        tooltip: { trigger: 'none' },
        vAxis : { gridlines : { color : 'none' }, ticks : [] },
        hAxis : { gridlines : { color : 'none' }}
    };

    var chart = new google.visualization.BarChart(document.getElementById('popQuiz3'));
    chart.draw(data, options3);
}