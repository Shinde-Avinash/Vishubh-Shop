/* Vishubh Shop Dashboard - Shared UI Logic (main.js)
    Handles global UI interactions like sidebar toggle and theme switching.
*/

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const modeSwitchBtn = document.getElementById('modeSwitch');
    const menuToggleBtn = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    // --- 1. Dark/Light Mode Switch ---

    // Load theme preference from localStorage or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark-mode';
    if (currentTheme === 'light-mode') {
        body.classList.add('light-mode');
        modeSwitchBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.593.748-3.75 1.055 1.341 1.752 3.012 1.752 4.755 0 2.628-1.503 4.843-3.69 6.002z" /></svg>'; // Moon
    } else {
        body.classList.remove('light-mode');
        modeSwitchBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364 1.636l-1.556 1.556M21 12h-2.25m-1.636 6.364l-1.556-1.556M12 18v2.25M7.778 16.222l-1.556 1.556M3 12h2.25m1.636-6.364l1.556-1.556M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" /></svg>'; // Sun
    }

    modeSwitchBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const newTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
        localStorage.setItem('theme', newTheme);

        // Update icon based on the new theme
        if (newTheme === 'light-mode') {
            modeSwitchBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.593.748-3.75 1.055 1.341 1.752 3.012 1.752 4.755 0 2.628-1.503 4.843-3.69 6.002z" /></svg>'; // Moon
        } else {
            modeSwitchBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364 1.636l-1.556 1.556M21 12h-2.25m-1.636 6.364l-1.556-1.556M12 18v2.25M7.778 16.222l-1.556 1.556M3 12h2.25m1.636-6.364l1.556-1.556M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" /></svg>'; // Sun
        }
    });

    // --- 2. Mobile Sidebar Toggle ---
    menuToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // --- 3. Highlight Active Nav Link ---
    const navLinks = document.querySelectorAll('.nav-list a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});