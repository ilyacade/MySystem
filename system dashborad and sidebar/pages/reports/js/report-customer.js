function initializeCustomerReportCharts() {
    // Customer Growth Chart
    const growthCtx = document.getElementById('customerGrowthChart')?.getContext('2d');
    if (growthCtx) {
        new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'New Customers',
                    data: [15, 18, 22, 24, 28, 32],
                    borderColor: '#10B981',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Payment Methods Chart
    const paymentCtx = document.getElementById('paymentMethodsChart')?.getContext('2d');
    if (paymentCtx) {
        new Chart(paymentCtx, {
            type: 'doughnut',
            data: {
                labels: ['Credit Card', 'PayPal', 'Bank Transfer', 'Cash'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

    // Customer Segment Chart
    const segmentCtx = document.getElementById('customerSegmentChart')?.getContext('2d');
    if (segmentCtx) {
        new Chart(segmentCtx, {
            type: 'pie',
            data: {
                labels: ['VIP', 'Regular', 'Occasional'],
                datasets: [{
                    data: [25, 55, 20],
                    backgroundColor: ['#3B82F6', '#10B981', '#F59E0B']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
}

// Initialize charts when the document is ready
document.addEventListener('DOMContentLoaded', initializeCustomerReportCharts); 