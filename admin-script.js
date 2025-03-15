/* admin-script.js */

document.addEventListener('DOMContentLoaded', function () {
    // Sales Chart
    var salesChartCanvas = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(salesChartCanvas, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Sales Performance',
                data: [2500, 3000, 2800, 3500],
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Checkout Chart (Example: Bar chart for payment methods)
    var checkoutChartCanvas = document.getElementById('checkoutChart').getContext('2d');
    var checkoutChart = new Chart(checkoutChartCanvas, {
        type: 'bar',
        data: {
            labels: ['PayPal', 'Stripe', 'Credit Card'],
            datasets: [{
                label: 'Payment Methods',
                data: [150, 120, 80],
                backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Reports Chart (Example: Pie chart for product categories)
    var reportsChartCanvas = document.getElementById('reportsChart').getContext('2d');
    var reportsChart = new Chart(reportsChartCanvas, {
        type: 'pie',
        data: {
            labels: ['T-Shirts', 'Mugs', 'Pillows', 'Phone Cases', 'Tote Bags', 'Art Prints'],
            datasets: [{
                label: 'Product Categories',
                data: [300, 250, 200, 150, 100, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
});
