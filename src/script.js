// Funkce pro ověření platného emailu
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Funkce pro validaci formuláře
function validateForm(event) {
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

}

// Napojení na formulář
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});
function showToast(message, isSuccess = false) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    if (isSuccess) {
        toast.style.backgroundColor = '#4caf50'; // zelená
    } else {
        toast.style.backgroundColor = '#f44336'; // červená
    }

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3500);
}
