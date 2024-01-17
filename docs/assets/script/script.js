const darkModeToggle = document.getElementById('dark-mode-switch');
        const moonIcon = document.getElementById('moon-icon');
        const sunIcon = document.getElementById('sun-icon');
        const body = document.body;

        // Check for user's preference in local storage
        if (localStorage.getItem('dark-mode') === 'enabled') {
            enableDarkMode();
        }

        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });

        function enableDarkMode() {
            body.classList.add('dark-mode');
            moonIcon.style.display = 'inline';
            sunIcon.style.display = 'none';
            localStorage.setItem('dark-mode', 'enabled');
        }

        function disableDarkMode() {
            body.classList.remove('dark-mode');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline';
            localStorage.setItem('dark-mode', null);
        }