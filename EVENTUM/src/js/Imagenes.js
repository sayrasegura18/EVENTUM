import { LitElement, html } from "lit-element";
export class Imagenes extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <style>
            @import "/src/css/style.css"
        </style>
        <div class="text_center">
        <h2>Expertos en eventos</h2>
        <hr>
      </div>
      <div class="d-flex bd-highlight">
        <div class="p-2 w-100 bd-highlight"><img src="src/img/lastimage-removebg-preview.png" alt="" srcset=""></div>
        <div class="p-2 flex-shrink-1 bd-highlight"><img src="src/img/lastimage-removebg-preview.png" alt=""></div>
      </div>
      `
    }
}
customElements.define('my-imagenes', Imagenes)