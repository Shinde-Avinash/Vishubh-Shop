/* Vishubh Shop Dashboard - Orders Specific Logic (orders.js)
    Placeholder logic for orders management.
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log("Orders Page Script Loaded.");

    // --- Placeholder Data ---
    const orders = [
        { id: '#O-001', customer: 'Alice Johnson', date: '2025-10-20', total: 159.98, status: 'Shipped' },
        { id: '#O-002', customer: 'Bob Smith', date: '2025-10-21', total: 49.99, status: 'Processing' },
        { id: '#O-003', customer: 'Charlie Brown', date: '2025-10-22', total: 8.50, status: 'Delivered' },
        { id: '#O-004', customer: 'Diana Prince', date: '2025-10-22', total: 399.00, status: 'Cancelled' },
    ];

    const tableBody = document.querySelector('#ordersTable tbody');
    if (tableBody) {
        tableBody.innerHTML = orders.map(order => {
            let badgeClass = 'badge-info';
            if (order.status === 'Delivered') badgeClass = 'badge-success';
            if (order.status === 'Cancelled') badgeClass = 'badge-danger';

            return `
                <tr>
                    <td data-label="Order ID" style="font-weight: 600;">${order.id}</td>
                    <td data-label="Customer">${order.customer}</td>
                    <td data-label="Date">${order.date}</td>
                    <td data-label="Total">$${order.total.toFixed(2)}</td>
                    <td data-label="Status"><span class="badge ${badgeClass}">${order.status}</span></td>
                    <td data-label="Actions">
                        <button onclick="alert('Viewing Order ${order.id}')" style="background: none; color: var(--clr-brand-main); padding: 5px;">View</button>
                    </td>
                </tr>
            `;
        }).join('');
    }
});

function createNewOrder() {
    alert("Function to open a modal for creating a new order would be implemented here.");
}

function handleOrderSearch(event) {
    // Placeholder for search/filter logic
    console.log("Searching orders for:", event.target.value);
}