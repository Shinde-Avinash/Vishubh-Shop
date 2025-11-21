/* Vishubh Shop Dashboard - Settings Specific Logic (settings.js)
    Placeholder logic for system settings management.
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log("Settings Page Script Loaded.");

    const settingsForm = document.getElementById('settingsForm');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const shopName = document.getElementById('shopName').value;
            const currency = document.getElementById('currency').value;
            const email = document.getElementById('notificationEmail').value;

            // Simulate saving data
            console.log("Saving Settings:", { shopName, currency, email });

            // Display success message
            const messageDiv = document.getElementById('saveMessage');
            messageDiv.textContent = 'Settings saved successfully!';
            messageDiv.style.color = '#10b981'; // Green color for success

            setTimeout(() => {
                messageDiv.textContent = '';
            }, 3000);

            // In a real app, this is where an API call would occur.
            // axios.post('/api/settings', { shopName, currency, email })
        });
    }
});