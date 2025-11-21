/* Vishubh Shop Dashboard - Products Specific Logic (products.js)
    Handles product data, filtering, and view switching (Grid/Table).
*/

// Sample Product Data
const productsData = [
    { id: 1, name: 'Premium Wireless Headset', category: 'Electronics', price: 99.99, stock: 150, status: 'In Stock', imageUrl: './images/Premium Wireless Headset.png' },
    { id: 2, name: 'Minimalist Leather Wallet', category: 'Accessories', price: 29.99, stock: 5, status: 'Low Stock', imageUrl: './images/Minimalist Leather Wallet.png' },
    { id: 3, name: 'Organic Coffee Beans (1kg)', category: 'Grocery', price: 19.50, stock: 0, status: 'Out of Stock', imageUrl: './images/Organic Coffee Beans (1kg).png' },
    { id: 4, name: '4K Ultra HD Monitor', category: 'Electronics', price: 450.00, stock: 75, status: 'In Stock', imageUrl: './images/4K Ultra HD Monitor.png' },
    { id: 5, name: 'Handcrafted Ceramic Mug', category: 'Home Goods', price: 15.00, stock: 250, status: 'In Stock', imageUrl: './images/Handcrafted Ceramic Mug.png' },
    { id: 6, name: 'Portable Power Bank 20000mAh', category: 'Electronics', price: 49.99, stock: 12, status: 'Low Stock', imageUrl: './images/Portable Power Bank 20000mAh.png' },
];

let currentView = localStorage.getItem('productView') || 'grid'; // 'grid' or 'table'

// --- Helper Functions for Rendering ---

function getStatusBadgeClass(status) {
    if (status.includes('In Stock')) return 'status-in-stock';
    if (status.includes('Low Stock')) return 'status-low-stock';
    return 'status-out-stock';
}

function renderGridView(products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.style.display = 'grid';
    productsGrid.innerHTML = products.map(p => `
        <div class="card product-card">
            <img src="${p.imageUrl}" alt="${p.name}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/333333?text=NO+IMAGE';" />
            <h4>${p.name}</h4>
            <p>${p.category}</p>
            <span class="price">$${p.price.toFixed(2)}</span>
            <span class="status-badge ${getStatusBadgeClass(p.status)}">${p.status}</span>
            <button class="btn-primary" onclick="alert('Viewing details for Product ID: ${p.id}')" style="margin-top: 10px; width: 100%;">View Details</button>
        </div>
    `).join('');
}

function renderTableView(products) {
    const productsTableContainer = document.getElementById('productsTableContainer');
    productsTableContainer.style.display = 'block';

    let tableHtml = `
        <table class="products-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;

    tableHtml += products.map(p => `
        <tr>
            <td data-label="Product" class="product-name-cell">
                <img src="${p.imageUrl}" alt="${p.name}" onerror="this.onerror=null;this.src='https://placehold.co/40x40/cccccc/333333?text=N/A';">
                ${p.name}
            </td>
            <td data-label="Category">${p.category}</td>
            <td data-label="Price">$${p.price.toFixed(2)}</td>
            <td data-label="Stock">${p.stock}</td>
            <td data-label="Status"><span class="badge ${getStatusBadgeClass(p.status)}">${p.status}</span></td>
            <td data-label="Actions">
                <button onclick="alert('Editing Product ID: ${p.id}')" style="background: none; color: var(--clr-brand-main); padding: 5px;">Edit</button>
                <button onclick="alert('Deleting Product ID: ${p.id}')" style="background: none; color: #ef4444; padding: 5px;">Delete</button>
            </td>
        </tr>
    `).join('');

    tableHtml += `
            </tbody>
        </table>
    `;
    productsTableContainer.innerHTML = tableHtml;
}

function updateView(view) {
    currentView = view;
    localStorage.setItem('productView', view);
    const gridBtn = document.getElementById('gridViewBtn');
    const tableBtn = document.getElementById('tableViewBtn');
    const productsGrid = document.getElementById('productsGrid');
    const productsTableContainer = document.getElementById('productsTableContainer');

    if (view === 'grid') {
        gridBtn.classList.add('active');
        tableBtn.classList.remove('active');
        productsGrid.style.display = 'grid';
        productsTableContainer.style.display = 'none';
        applyFilters();
    } else {
        tableBtn.classList.add('active');
        gridBtn.classList.remove('active');
        productsGrid.style.display = 'none';
        productsTableContainer.style.display = 'block';
        applyFilters();
    }
}

// --- Filtering Logic ---

function applyFilters() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;

    const filteredProducts = productsData.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchInput) || p.category.toLowerCase().includes(searchInput);
        const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
        const matchesStatus = statusFilter === 'all' || p.status === statusFilter;

        return matchesSearch && matchesCategory && matchesStatus;
    });

    if (currentView === 'grid') {
        renderGridView(filteredProducts);
    } else {
        renderTableView(filteredProducts);
    }
}

// --- Event Listeners and Initial Load ---

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the View Toggle Buttons
    document.getElementById('gridViewBtn').addEventListener('click', () => updateView('grid'));
    document.getElementById('tableViewBtn').addEventListener('click', () => updateView('table'));

    // Initialize Filter Events
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('statusFilter').addEventListener('change', applyFilters);

    // Initial Render
    updateView(currentView); // Renders the correct view and applies initial filters
});

// Expose updateView globally for the initial HTML buttons
window.updateView = updateView;
window.applyFilters = applyFilters;