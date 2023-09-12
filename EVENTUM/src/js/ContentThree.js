import { LitElement, html } from "lit-element";
export class ContentThree extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <style>
            @import "/src/css/style.css"
        </style>
        <div class="d-flex imagenTexto">
    <div class="flex-shrink-0 horizontal">
      <img src="src/img/imagenBienvenido.png" alt="..." class="imagen_bienvenido">
    </div>
    <div class="flex-grow-1 ms-3 section_second">
      <h1>BIENVENIDO A <img src="src/img/eventum-removebg-preview.png " alt="" srcset="" class="image"></h1> 
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, hic. Similique necessitatibus perferendis sequi sed totam ratione fuga? Ut qui impedit amet quo distinctio minima ex laboriosam itaque blanditiis repudiandae.
            Ullam, cumque. Veniam cumque consequatur dignissimos officia vel debitis porro? Dolorum ipsa dolorem quidem, consequatur cumque mollitia! Eum repudiandae unde aperiam vitae ex quaerat, obcaecati illum dolorem id ullam aspernatur?
            Officia, quisquam provident culpa sed facilis labore architecto minima ex praesentium omnis accusamus quas quae. Fuga ad dolores quasi hic natus, ipsa quae nihil doloremque sint vel culpa cumque adipisci.
            Commodi minus iusto laboriosam porro doloribus. Facilis veritatis mollitia officia, cum amet optio quaerat explicabo laborum quisquam, maxime impedit magnam. Dolorem error reprehenderit enim sapiente dolor a, repellat porro magnam.
            Magnam quaerat quisquam similique voluptate nihil fuga reiciendis inventore cupiditate totam pariatur veniam, veritatis maiores provident architecto deleniti cumque at qui, sint repellat quos. Fugiat voluptatum exercitationem eius maiores vel?
            Eaque harum nihil non commodi ipsam tenetur iure ullam quam architecto sunt laboriosam asperiores ipsa nobis quasi cupiditate dicta, explicabo error totam vitae numquam quisquam? Sed ratione expedita repellendus qui!
            Atque nisi deleniti earum aspernatur libero facere fugit quae quaerat ullam iure. Officiis recusandae veritatis dolore quibusdam similique corrupti tempora debitis provident voluptates harum, dolorem sunt, vel ullam a id.
            Placeat hic quis rerum vel sed nam eligendi commodi et qui sequi rem autem, cum est fugit nihil, possimus at ut officia maiores cumque recusandae doloremque, porro architecto modi. Ipsam.
          </p>
    </div>
  </div>
      `
    }
}
customElements.define('my-contentthree', ContentThree)