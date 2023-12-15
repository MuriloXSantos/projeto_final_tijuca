import './Container.sass'
import { useState } from 'react'
import Input from './Inputs/Input.jsx'
import Input2 from './Inputs/Input_2.jsx'
// import Input3 from './Inputs/Input_3.jsx'
// import Input4 from './Inputs/Input_4.jsx'
import url_fixa_2 from '../../Axios2/UrlFixa.js'
import toastError from '../Toasts/ToastError.js'
import toastSucess from '../Toasts/ToastSucess.js'

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

  async function handleSubmit(e) {
    e.preventDeafult()

    try {
      const formData = new FormData()

      formData.append('nome', produto.nome_produto)
      formData.append('selo', produto.selo_produto)
      formData.append('foto', produto.file_produto)
      formData.append('preco', produto.preco_produto)
      formData.append('material', produto.material_produto)
      formData.append('durabilidade', produto.durabilidade_produto)

      await url_fixa_2.post('/', formData, {
        headers: { 'Content-type': 'multipart/form-data' },
      })
      toastSucess()
      console.log(produto)
    } catch (e) {
      toastError()
      console.log(e)
      console.log(produto)
    }
  }

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
            <label className="label" htmlFor="input_nome_produto">
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

          <div className="div_material_durabilidade_produto">
            <section>
              <label className="label" htmlFor="input_preço_produto">
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
              <label className="label" htmlFor="input_material_produto">
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
              <label className="label" htmlFor="input_selo_produto">
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
              <label className="label" htmlFor="input_durabilidade_produto">
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
                htmlFor="input_file_produto"
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

          <button className="btn_enviar" onClick={(e) => handleSubmit(e)}>
            Enviar
          </button>
        </form>
      </div>
    </main>
  )
}

export default Container
