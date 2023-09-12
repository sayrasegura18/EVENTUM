import { LitElement, html } from "lit-element";
export class Footer extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <style>
            @import "/src/css/style.css"
        </style>
        <footer >
        <img src="/src/img/logoLetras-removebg-preview.png" alt="" srcset="" class="lastImageFooter">
      </footer>
      `
    }
}
customElements.define('my-footer', Footer)