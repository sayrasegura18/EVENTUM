import { LitElement, html } from "lit-element";

import "./Navegation"
import "./ContentTwo"
import "./Cards"
import "./ContentThree"
import "./Imagenes"
import "./Footer"

export class Home extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <my-nav></my-nav>
        <my-contenttwo></my-contenttwo>
        <my-card></my-card>
        <my-contentthree></my-contentthree>
        <my-imagenes></my-imagenes>
        <my-footer></my-footer>
      `
    }
}
customElements.define('my-home', Home)