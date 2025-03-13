function initializeProfitLossCharts() {
    const ctx = document.getElementById('profitLossTrendChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue',
                    data: [125000, 138000, 142000, 148000, 152000, 158450],
                    borderColor: '#10B981',
                    tension: 0.4
                }, {
                    label: 'Expenses',
                    data: [82000, 88000, 92000, 94000, 96000, 98230],
                    borderColor: '#EF4444',
                    tension: 0.4
                }, {
                    label: 'Net Profit',
                    data: [43000, 50000, 50000, 54000, 56000, 60220],
                    borderColor: '#3B82F6',
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
}

// Initialize charts when the document is ready
document.addEventListener('DOMContentLoaded', initializeProfitLossCharts); 