import './Container.sass'
import { useState } from 'react'
import pets from './images/pets.png'
import url_fixa from '../../Axios/url_fixa.js'

function Container() {
  const [img, setImg] = useState()
  const [nome, setNome] = useState()
  const [sexo, setSexo] = useState()
  const [porte, setPorte] = useState()
  const [idade, setIdade] = useState()
  const [estado, setEstado] = useState()
  const [cidade, setCidade] = useState()
  const [espécie, setEspécie] = useState()
  const [descrição, setDescrição] = useState()

  async function createPost(e) {
    e.preventDefault()

    const post = {
      img,
      nome,
      sexo,
      idade,
      porte,
      estado,
      cidade,
      espécie,
      descrição,
      userID: 1,
    }

    await url_fixa.post('/post', {
      body: post,
    })
  }

  function handleImage(e) {
    if (e.target.files[0]) {
      const [image] = e.target.files
      const photo = URL.createObjectURL(image)
      setImg(photo)
    }
  }

  return (
    <main>
      <div className="div_img_container">
        <img src={pets} alt="Sweet Pets" className="img_pets" />
      </div>

      <div className="div_form">
        <h1 className="h1_cadastrar_pets">Cadastre um pet para adoção</h1>

        <form
          method="post"
          className="form_cadastrar"
          onSubmit={(e) => createPost(e)}
        >
          <div className="div_nome_pet">
            <label className="label" htmlFor="input_nome_pet">
              Nome do pet
            </label>

            <input
              required
              type="text"
              name="nome_pet"
              id="input_nome_pet"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="div_espécie_sexo_pet">
            <section>
              <label className="label" htmlFor="input_espécie_pet">
                Espécie:
              </label>

              <input
                required
                type="text"
                name="espécie_pet"
                id="input_espécie_pet"
                onChange={(e) => setEspécie(e.target.value)}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_sexo_pet">
                Sexo:
              </label>

              <input
                required
                type="text"
                name="sexo_pet"
                id="input_sexo_pet"
                onChange={(e) => setSexo(e.target.value)}
              />
            </section>
          </div>

          <div className="div_idade_porte_pet">
            <section>
              <label className="label" htmlFor="input_idade_pet">
                Idade:
              </label>

              <input
                required
                type="text"
                name="idade_pet"
                id="input_idade_pet"
                onChange={(e) => setIdade(e.target.value)}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_porte_pet">
                Porte:
              </label>

              <input
                required
                type="text"
                name="porte_pet"
                id="input_porte_pet"
                onChange={(e) => setPorte(e.target.value)}
              />
            </section>
          </div>

          <div className="div_estado_cidade_pet">
            <section>
              <label className="label" htmlFor="input_estado_pet">
                Estado:
              </label>

              <input
                required
                type="text"
                name="estado_pet"
                id="input_estado_pet"
                onChange={(e) => setEstado(e.target.value)}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_cidade_pet">
                Cidade:
              </label>

              <input
                required
                type="text"
                name="cidade_pet"
                id="input_cidade_pet"
                onChange={(e) => setCidade(e.target.value)}
              />
            </section>
          </div>

          <div className="div_file_comentar">
            <section>
              <span className="span_1">Adicione fotos:</span>

              <label
                tabIndex="0"
                className="label_file"
                htmlFor="input_file_pet"
              >
                <img className="img_file" src={img} alt="Clique aqui" />
              </label>

              <input
                required
                type="file"
                name="foto_pet"
                accept="images/*"
                id="input_file_pet"
                onChange={(e) => handleImage(e)}
              />
            </section>

            <section className="section">
              <span className="span_2">Conte um pouco sobre o pet:</span>

              <textarea
                required
                name="descrição_pet"
                onChange={(e) => setDescrição(e.target.value)}
              ></textarea>
            </section>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  )
}

export default Container

// 192.168.10.x:número_porta
