export function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export function validateForm(event) {
    sessionStorage.setItem('successLogin', 'Úspěšně přihlášeno!');

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '') {
        showToast('Zadej e-mail.');
        event.preventDefault();
        return;
    }

    if (!email.includes('@')) {
        showToast('E-mail musí obsahovat zavináč (@).');
        event.preventDefault();
        return;
    }

    if (!isValidEmail(email)) {
        showToast('Zadej platnou e-mailovou adresu.');
        event.preventDefault();
        return;
    }

    if (password === '') {
        showToast('Zadej heslo.');
        event.preventDefault();
        return;
    }

    if (password.length < 5) {
        showToast('Heslo musí mít alespoň 5 znaků.');
        event.preventDefault();
        return;
    }

    showToast('Úspěšně přihlášeno!', true);
    event.preventDefault();
}

// Importujeme i showToast z toast.js
import { showToast } from './toast';
