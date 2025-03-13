function initializeBalanceSheetCharts() {
    const ctx = document.getElementById('assetsDistributionChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Cash & Bank', 'Accounts Receivable', 'Inventory', 'Prepaid Expenses', 'Fixed Assets'],
                datasets: [{
                    data: [125000, 85250, 155500, 12000, 108000],
                    backgroundColor: [
                        '#3B82F6',
                        '#10B981',
                        '#F59E0B',
                        '#8B5CF6',
                        '#EF4444'
                    ]
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
document.addEventListener('DOMContentLoaded', initializeBalanceSheetCharts); 