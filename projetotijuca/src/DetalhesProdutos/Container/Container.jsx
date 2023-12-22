import './Container.sass'
import coração from './images/coração.svg'
import estrela from './images/estrela.svg'
import carrinho from './images/carrinho.svg'

function Container() {
  return (
    <main>
      <div className="div_img_produto">
        <div className="div_foto_produto"></div>
      </div>

      <div className="div_info_produto">
        <div className="div_avaliações">
          <div className="div_fundo_coração">
            <img className="img_heart" src={coração} alt="Sweet Pets" />
          </div>

          <button className="btn_avaliação">
            <span className="média_avaliação">
              <img className="img_estrela" src={estrela} alt="Sweet Pets" />
              4.8
            </span>

            <span className="número_avaliação">18</span>
          </button>
        </div>

        <div className="div_nome_preço_produto">
          <span className="nome_produto">Produto só a massa</span>

          <span className="preço_produto">R$ 71,99</span>
        </div>

        <div>
          <span className="nome_detalhes">Detalhes</span>

          <div className="div_detalhes_1">
            <button className="nome_durável">Durável</button>
            <button className="nome_algodão">Algodão</button>
          </div>

          <div className="div_detalhes_2">
            <button className="nome_cruelty_free">Cruelty-free</button>
          </div>
        </div>

        <button className="btn_adicionar">
          <img className="carrinho_btn" src={carrinho} alt="Sweet Pets" />

          <span className="span_btn">Adicionar ao carrinho</span>
        </button>
      </div>

      <div className="div_promoção">PROMOCIONAL</div>
    </main>
  )
}

export default Container
