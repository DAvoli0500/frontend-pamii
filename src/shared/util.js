export function logout() {
    const login_url = document.querySelector('ion-route')?.useHash ?? true;
    window.location.href = login_url == true ? '#/login' : '/login';
}

