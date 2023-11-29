import "./Container.sass"

function Container() {

  return (

    <main>

        <h1 className="h1_main">Minha lista de desejos</h1>

        <div className="div_quantidade_itens">

            <div className="div_q_i">

                <span className="nome_itens">Itens</span>

                <span className="quantidade_itens">(2)</span>
            </div>
        </div>
    </main>
  )
}

export default Container