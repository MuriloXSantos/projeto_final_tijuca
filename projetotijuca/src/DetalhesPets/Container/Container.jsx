import './Container.sass'
import { useState, useEffect } from 'react'
import url_fixa from '../../Axios/UrlFixa.js'

function Container() {
  const [detalhes, setDetalhes] = useState([])

  async function busca() {
    try {
      const response = await url_fixa.get('/animais')
      const data = response.data
      setDetalhes(data)
      console.log('Deu certo !!')
      console.log(data)
    } catch (e) {
      console.log('Deu errado !!')
    }
  }

  useEffect(() => {
    busca()
  }, [])

  return (
    <main>
      <div className="div_img_container">
        <div className="div_img_2"></div>
      </div>

      {detalhes.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        detalhes.map((details) => {
          return (
            <div className="div_descrição" key={details.id}>
              <h1 className="h1_descrição">Chiquinho</h1>

              <div className="div_localização">
                <span className="span_location">xique xique-BA</span>
              </div>

              <div className="descrição_animal">
                <div>
                  <h2 className="h2_descrição">A história de Chiquinho</h2>

                  <span className="span_descrição">
                    Esse é o chiquinho irmão do kiwi e da amora, filhote da
                    gatinha grávida que resgatei, ele com toda certeza é o mais
                    manhoso da ninhada e comilão, é muito sociável e ama
                    brincar.
                  </span>
                </div>

                <button className="bttn">Entrar em contato</button>
              </div>
            </div>
          )
        })
      )}
    </main>
  )
}

export default Container
