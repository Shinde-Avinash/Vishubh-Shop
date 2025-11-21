/* Vishubh Shop Dashboard - Customers Specific Logic (customers.js)
    Placeholder logic for customers management.
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log("Customers Page Script Loaded.");

    // --- Placeholder Data ---
    const customers = [
        { id: 101, name: 'Alice Johnson', email: 'alice@example.com', totalSpent: 159.98, status: 'Active' },
        { id: 102, name: 'Bob Smith', email: 'bob@example.com', totalSpent: 49.99, status: 'Inactive' },
        { id: 103, name: 'Charlie Brown', email: 'charlie@example.com', totalSpent: 8.50, status: 'Active' },
        { id: 104, name: 'Diana Prince', email: 'diana@example.com', totalSpent: 399.00, status: 'VIP' },
    ];

    const tableBody = document.querySelector('#customersTable tbody');
    if (tableBody) {
        tableBody.innerHTML = customers.map(c => {
            let badgeClass = 'badge-info';
            if (c.status === 'Active') badgeClass = 'badge-success';
            if (c.status === 'VIP') badgeClass = 'badge-warning';

            return `
                <tr>
                    <td data-label="ID">${c.id}</td>
                    <td data-label="Name" style="font-weight: 600;">${c.name}</td>
                    <td data-label="Email">${c.email}</td>
                    <td data-label="Total Spent">$${c.totalSpent.toFixed(2)}</td>
                    <td data-label="Status"><span class="badge ${badgeClass}">${c.status}</span></td>
                    <td data-label="Actions">
                        <button onclick="alert('Viewing Customer ${c.id}')" style="background: none; color: var(--clr-brand-main); padding: 5px;">View Profile</button>
                    </td>
                </tr>
            `;
        }).join('');
    }
});

function addNewCustomer() {
    alert("Function to open a modal for adding a new customer would be implemented here.");
}

function handleCustomerSearch(event) {
    // Placeholder for search/filter logic
    console.log("Searching customers for:", event.target.value);
}