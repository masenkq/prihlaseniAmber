export function initPasswordToggle() {
    const toggle = document.getElementById('toggle-password');
    const input = document.getElementById('password');

    if (!toggle || !input) return;

    toggle.addEventListener('click', () => {
        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';
        toggle.textContent = isPassword ? '🙈' : '👁️';
    });
}
