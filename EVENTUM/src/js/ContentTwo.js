import { LitElement, html } from "lit-element";
export class ContentTwo extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <style>
            @import "/src/css/style.css"
        </style>
        <div class="container text-center">
        <div class="row">
          <div class="col">
            <img src="src/img/logoLetras.png" alt="">
            <p>Crea, sueña, realizalo</p>
            <button>Conocenos</button>
          </div>
          <div class="col second_content">
            <div class="text_content">
              <p>¿Ya eres Cliente?</p>
              <button>Ingresa</button>
            </div>
          </div>
        </div>
      </div>
      `
    }
}
customElements.define('my-contenttwo', ContentTwo)
