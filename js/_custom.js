// Bar chart
const barCtx = document.getElementById('barChart');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales in USD',
            data: [2350, 3000, 2500, 1800, 3850],
            backgroundColor: 'rgba(0, 123, 255, 0.7)',
            borderRadius: 5
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie chart
const pieCtx = document.getElementById('pieChart');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Smarthphone', 'Laptop', 'Tablet', 'Watch', 'Audio',],
        datasets: [{
            label: 'Orders',
            data: [55, 49, 44, 24, 15],
            backgroundColor: [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145"
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});