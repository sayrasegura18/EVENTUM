import { LitElement, html} from "lit-element";
export class Cards extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <div class="text_center">
    <h2>Expertos en eventos</h2>
    <hr>
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4 ">
    <div class="col">
      <div class="card  cards">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
            <button>Más info</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card cards">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
            <button>Más info</button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card cards">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
            content.</p>
            <button>Más info</button>
        </div>
      </div>
    </div>
  </div>
    `
    }
}
customElements.define('my-card', Cards)