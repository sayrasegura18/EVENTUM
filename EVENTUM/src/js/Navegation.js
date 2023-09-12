import { LitElement, html } from "lit-element";

export class Navegation extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <style>
            @import "/src/css/style.css"
        </style>
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="src/img/logo.png" alt="Logo" width="35" height="40" class="d-inline-block align-text-top">
                Bootstrap
            </a>
            </div>
        </nav>
        `
    }
}

customElements.define('my-nav', Navegation)