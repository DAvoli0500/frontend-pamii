import './usuarioPages.css'
import { createHeader } from '../../shared/Header.js';
import { logout } from '../../shared/util.js'

class UsuarioPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(UsuarioPage.name);
        this.innerHTML = `
            ${cabecalho}
        `;
        this.querySelector('#logout-button')?.addEventListener('click', logout);

        // Referências aos elementos
        const userInput = this.querySelector('#usuario');
        const passInput = this.querySelector('#senha');
        const btnLogin = this.querySelector('#login');
    }
}

customElements.define('usuario-page', UsuarioPage);