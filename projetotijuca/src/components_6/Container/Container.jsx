import './Container.sass'
import { useState } from 'react'
import Input from './Inputs/Input.jsx'
import Input2 from './Inputs/Input_2.jsx'

function Container() {
  const [img, setImg] = useState()

  const [produto, setProduto] = useState({
    nome_produto: '',
    selo_produto: '',
    file_produto: '',
    preco_produto: '',
    material_produto: '',
    durabilidade_produto: '',
  })

  function handleChange(nameInput, valueInput) {
    const { name, valor } = { name: nameInput, valor: valueInput }
    setProduto({
      ...produto,
      [name]: valor,
    })
  }

  function handleImage(e) {
    if (e.target.files[0]) {
      const [image] = e.target.files
      const photo = URL.createObjectURL(image)
      setImg(photo)
      setProduto({ ...produto, file_produto: e.target.files[0] })
    }
  }

  return (
    <main>
      <div className="div_img_container">
        <div className="div_span">
          <span className="span_1">Mini visualizador</span>
        </div>

        <div className="div_img_produto">
          <img className="img_file" src={img} alt="" />
        </div>

        <div className="div_detalhes_produto">
          <span className="preço_detalhes_produtos">R$71,99</span>

          <div className="div_btns">
            <button className="nome_durável">Durável</button>
            <button className="nome_cruelty_free">Cruelty-free</button>
          </div>
        </div>
      </div>

      <div className="div_form">
        <h1 className="h1_cadastrar_produto">Cadastre um produto</h1>

        <form method="post" className="form_cadastrar">
          <div className="div_nome_produto">
            <label className="label" htmlfor="input_nome_produto">
              Nome do produto
            </label>

            <Input
              type="text"
              name="nome_produto"
              id="input_nome_produto"
              value={produto.nome_produto}
              onChange={(e) => {
                handleChange('nome_produto', e.target.value)
              }}
            />
          </div>

          <div className="div_preço_material_produto">
            <section>
              <label className="label" htmlfor="input_preço_produto">
                Preço
              </label>

              <Input
                type="text"
                name="preco_produto"
                id="input_preço_produto"
                value={produto.preco_produto}
                onChange={(e) => {
                  handleChange('preco_produto', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlfor="input_material_produto">
                Material
              </label>

              <Input
                type="text"
                name="material_produto"
                id="input_material_produto"
                value={produto.material_produto}
                onChange={(e) => {
                  handleChange('material_produto', e.target.value)
                }}
              />
            </section>
          </div>

          <div className="div_selo_durabilidade_produto">
            <section>
              <label className="label" htmlfor="input_selo_produto">
                Selo cruelty-free ?
              </label>

              <Input
                type="text"
                name="selo_produto"
                id="input_selo_produto"
                value={produto.selo_produto}
                onChange={(e) => {
                  handleChange('selo_produto', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlfor="input_durabilidade_produto">
                Durabilidade
              </label>

              <Input
                type="text"
                name="durabilidade_produto"
                id="input_durabilidade_produto"
                value={produto.durabilidade_produto}
                onChange={(e) => {
                  handleChange('durabilidade_produto', e.target.value)
                }}
              />
            </section>
          </div>

          <div className="div_file">
            <section>
              <span className="span_2">Adicione fotos:</span>

              <label
                className="label_file"
                htmlfor="input_file_produto"
                tabIndex="0"
              >
                <img className="img_file" src={img} alt="Clique aqui" />
              </label>

              <Input2
                type="file"
                accept="images/*"
                name="foto_produto"
                id="input_file_produto"
                value={produto.foto_produto}
                onChange={(e) => {
                  handleImage(e)
                }}
              />
            </section>
          </div>

          <button className="btn_enviar">Enviar</button>
        </form>
      </div>
    </main>
  )
}

export default Container
