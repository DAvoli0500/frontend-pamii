import { createHeader } from '../../shared/Header.js';
import './produtoPages.css'
import { logout } from '../../shared/util.js'

class ProdutoPage extends HTMLElement {
    connectedCallback() {
        this.classList.add('ion-page');
        const cabecalho = createHeader(ProdutoPage.name);
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
customElements.define('produtos-page', ProdutoPage);