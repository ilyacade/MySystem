function initializeInvoiceCharts() {
    // Invoice Status Distribution Chart
    const statusCtx = document.getElementById('invoiceStatusChart')?.getContext('2d');
    if (statusCtx) {
        new Chart(statusCtx, {
            type: 'doughnut',
            data: {
                labels: ['Paid', 'Pending', 'Overdue'],
                datasets: [{
                    data: [198400, 31650, 15800],
                    backgroundColor: ['#10B981', '#F59E0B', '#EF4444']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                let value = context.parsed || 0;
                                return `${label}: $${value.toLocaleString()}`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Invoice Trend Chart
    const trendCtx = document.getElementById('invoiceTrendChart')?.getContext('2d');
    if (trendCtx) {
        new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Total Invoiced',
                    data: [210000, 225000, 235000, 228000, 240000, 245850],
                    borderColor: '#3B82F6',
                    tension: 0.4
                }, {
                    label: 'Amount Collected',
                    data: [185000, 195000, 200000, 190000, 195000, 198400],
                    borderColor: '#10B981',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: value => '$' + value.toLocaleString()
                        }
                    }
                }
            }
        });
    }

    // Payment Methods Chart
    const methodsCtx = document.getElementById('paymentMethodsChart')?.getContext('2d');
    if (methodsCtx) {
        new Chart(methodsCtx, {
            type: 'pie',
            data: {
                labels: ['Bank Transfer', 'Credit Card', 'Cash', 'Other'],
                datasets: [{
                    data: [45, 30, 15, 10],
                    backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });
    }
}

// Initialize charts when the document is ready
document.addEventListener('DOMContentLoaded', initializeInvoiceCharts); 