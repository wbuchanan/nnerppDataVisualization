google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    /* Defines the data used for the first set of quiz questions. */
    var data = google.visualization.arrayToDataTable([
        ['SliceID', 'trueValue'],
        ['Blue',    39],
        ['Green',   19.5],
        ['Yellow',  9.8],
        ['Red',     7.4],
        ['Pink',    3.1],
        ['Purple',  21.2]
    ]);

    /* Defines the options for the first question in the pop quiz. */
    var options2 = {
        backgroundColor: 'none',
        is3D: true,
        pieStartAngle: -70,
        width: 900,
        height: 600,
        chartArea: { width: '95%', height: '95%' },
        legend: { position: 'none' },
        tooltip: { trigger: 'none' },
        pieSliceText: 'none',
        colors: ['#1E97FC', '#21C225', '#FEE335', '#E21B1C', '#FD50F0', '#8C50FB']
    };

    var chart = new google.visualization.PieChart(document.getElementById('popQuiz2'));
    chart.draw(data, options2);
}