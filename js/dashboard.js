/* Vishubh Shop Dashboard - Dashboard Specific Logic (dashboard.js)
    Handles fetching metrics and rendering charts.
*/

// Function to fetch and display key metrics
function loadKeyMetrics() {
    // --- Placeholder Data ---
    const metrics = {
        totalSales: { value: 24500, label: 'Total Sales', prefix: '$', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-2.25-4.5h4.5m4.5 0h-4.5m-4.5 0v-4.5m4.5 4.5L12 12m-4.5 4.5h4.5m-4.5 0v4.5M6 18h12a3 3 0 003-3V9a3 3 0 00-3-3H6a3 3 0 00-3 3v6a3 3 0 003 3z" /></svg>' },
        pendingOrders: { value: 124, label: 'Pending Orders', prefix: '', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.472 6.516 6 8.163 6 10v3a2.03 2.03 0 00-2 2.03V16l.1.1A2 2 0 004 18h16a2 2 0 002-2.03V16l-.1-.1A2 2 0 0020 18h-5z" /></svg>' },
        newCustomers: { value: 45, label: 'New Customers', prefix: '', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0z" /></svg>' },
        conversionRate: { value: 4.8, label: 'Conversion Rate', suffix: '%', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125l5.25 5.25L19.5 7.5M12 21V3" /></svg>' }
    };

    // Format values
    document.getElementById('salesValue').textContent = `${metrics.totalSales.prefix}${metrics.totalSales.value.toLocaleString()}`;
    document.getElementById('ordersValue').textContent = `${metrics.pendingOrders.value}`;
    document.getElementById('customersValue').textContent = `${metrics.newCustomers.value}`;
    document.getElementById('rateValue').textContent = `${metrics.conversionRate.value}${metrics.conversionRate.suffix}`;

    // Note: The icons are already placed in the HTML template.
}

// Function to simulate rendering a Chart
function renderSalesChart() {
    const chartArea = document.getElementById('salesChart');
    chartArea.innerHTML = `
        <div style="text-align: center; color: var(--clr-text-secondary); padding: 50px;">
            [Placeholder for a Line Chart displaying Sales Over Time]
            <br>
            <small>Integration with a library like Chart.js would go here.</small>
            <br><br>
            <img src="https://placehold.co/400x200/6366f1/ffffff?text=SALES+CHART" alt="Sales Chart Placeholder" style="max-width: 100%; height: auto; border-radius: 8px;">
        </div>
    `;
}

// Function to simulate rendering a Product Performance table/list
function renderTopProducts() {
    const topProductsList = document.getElementById('topProducts');
    // --- Placeholder Data ---
    const products = [
        { name: 'Quantum Laptop X', revenue: 5200, sales: 85, badge: 'badge-success' },
        { name: 'Ergo Mechanical Keyboard', revenue: 3100, sales: 150, badge: 'badge-warning' },
        { name: '4K Monitor Pro', revenue: 2800, sales: 40, badge: 'badge-info' },
    ];

    let html = `
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="padding: 10px; border-bottom: 1px solid var(--clr-border);">Product</th>
                    <th style="padding: 10px; border-bottom: 1px solid var(--clr-border); text-align: right;">Revenue</th>
                    <th style="padding: 10px; border-bottom: 1px solid var(--clr-border); text-align: right;">Sales</th>
                </tr>
            </thead>
            <tbody>
    `;

    products.forEach(p => {
        html += `
            <tr style="border-bottom: 1px solid var(--clr-border);">
                <td style="padding: 10px;">${p.name}</td>
                <td style="padding: 10px; text-align: right;">$${p.revenue.toLocaleString()}</td>
                <td style="padding: 10px; text-align: right;"><span class="${p.badge} badge">${p.sales} Units</span></td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    topProductsList.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    // Ensure main.js is loaded and the theme is set before running
    loadKeyMetrics();
    renderSalesChart();
    renderTopProducts();
});