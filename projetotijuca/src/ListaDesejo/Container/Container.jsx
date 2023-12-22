import "./Container.sass"
import coração from "./images/coração.svg"

function Container() {

  return (

    <main>

      <h1 className="h1_main">Minha lista de desejos</h1>

      <div className="div_quantidade_itens_maior">

        <div className="div_quantidades_itens">

          <span className="nome_itens">Itens</span>

          <span className="quantidade_itens">(2)</span>
        </div>
      </div>

      <div className="div_lista_desejo">

        <div className="div_item_desejo">

          <div className="div_img_item">

            <section className="section_img_item"></section>

            <section className="section_heart">
              <img className="img_coração" src={coração} alt="Sweet Pets" />
            </section>
          </div>

          <h2>Produto massa demais</h2>
          <span>R$29,90</span>
        </div>

        <div className="div_item_desejo">

          <div className="div_img_item">

            <section className="section_img_item"></section>

            <section className="section_heart">
              <img className="img_coração" src={coração} alt="Sweet Pets" />
            </section>
          </div>

          <h2>Produto massa demais</h2>
          <span>R$29,90</span>
        </div>

        <div className="div_item_desejo">

          <div className="div_img_item">

            <section className="section_img_item"></section>

            <section className="section_heart">
              <img className="img_coração" src={coração} alt="Sweet Pets" />
            </section>
          </div>

          <h2>Produto massa demais</h2>
          <span>R$29,90</span>
        </div>

        <div className="div_item_desejo">

            <div className="div_img_item">

              <section className="section_img_item"></section>

              <section className="section_heart">
                <img className="img_coração" src={coração} alt="Sweet Pets"/>
              </section>
            </div>

            <h2>Produto massa demais</h2>
            <span>R$29,90</span>
          </div>

          <div className="div_item_desejo">

            <div className="div_img_item">

              <section className="section_img_item"></section>

              <section className="section_heart">
                <img className="img_coração" src={coração} alt="Sweet Pets"/>
              </section>
            </div>

            <h2>Produto massa demais</h2>
            <span>R$29,90</span>
          </div>
      </div>

      <div className="div_lista_desejo">

        <div className="div_item_desejo">

          <div className="div_img_item">

            <section className="section_img_item"></section>

            <section className="section_heart">
              <img className="img_coração" src={coração} alt="Sweet Pets" />
            </section>
          </div>

          <h2>Produto massa demais</h2>
          <span>R$29,90</span>
        </div>

        <div className="div_item_desejo">

          <div className="div_img_item">

            <section className="section_img_item"></section>

            <section className="section_heart">
              <img className="img_coração" src={coração} alt="Sweet Pets" />
            </section>
          </div>

          <h2>Produto massa demais</h2>
          <span>R$29,90</span>
        </div>

        <div className="div_item_desejo">

          <div className="div_img_item">

            <section className="section_img_item"></section>

            <section className="section_heart">
              <img className="img_coração" src={coração} alt="Sweet Pets" />
            </section>
          </div>

          <h2>Produto massa demais</h2>
          <span>R$29,90</span>
        </div>

        <div className="div_item_desejo">

            <div className="div_img_item">

              <section className="section_img_item"></section>

              <section className="section_heart">
                <img className="img_coração" src={coração} alt="Sweet Pets"/>
              </section>
            </div>

            <h2>Produto massa demais</h2>
            <span>R$29,90</span>
          </div>

          <div className="div_item_desejo">

            <div className="div_img_item">

              <section className="section_img_item"></section>

              <section className="section_heart">
                <img className="img_coração" src={coração} alt="Sweet Pets"/>
              </section>
            </div>

            <h2>Produto massa demais</h2>
            <span>R$29,90</span>
          </div>
      </div>
    </main>
  )
}

export default Container