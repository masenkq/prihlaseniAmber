import { initPasswordToggle } from './passwordToggle.js';
import { validateForm } from './validation.js';
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }

    initPasswordToggle(); // aktivuje oko
});
