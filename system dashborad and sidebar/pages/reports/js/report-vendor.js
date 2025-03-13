function initializeVendorCharts() {
    // Vendor Payables Chart
    const payablesCtx = document.getElementById('vendorPayablesChart')?.getContext('2d');
    if (payablesCtx) {
        new Chart(payablesCtx, {
            type: 'bar',
            data: {
                labels: ['Tech Supplies Inc', 'Office Solutions Ltd', 'Global Logistics', 'IT Services Co'],
                datasets: [{
                    label: 'Outstanding Balance',
                    data: [10000, 10000, 8500, 5000],
                    backgroundColor: '#3B82F6'
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

    // Aging Distribution Chart
    const agingCtx = document.getElementById('agingDistributionChart')?.getContext('2d');
    if (agingCtx) {
        new Chart(agingCtx, {
            type: 'pie',
            data: {
                labels: ['Current', '1-30 Days', '31-60 Days', '60+ Days'],
                datasets: [{
                    data: [65450, 32500, 18000, 9500],
                    backgroundColor: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444']
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
}

// Initialize charts when the document is ready
document.addEventListener('DOMContentLoaded', initializeVendorCharts); 