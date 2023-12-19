import './Container.sass'
import { useState } from 'react'
import Input from './Inputs/Input.jsx'
import Input2 from './Inputs/Input_2.jsx'
import Select1 from './Inputs/Select1.jsx'
import Select2 from './Inputs/Select2.jsx'
import Select3 from './Inputs/Select3.jsx'
import url_fixa from '../../Axios/UrlFixa.js'
import toastError from '../Toasts/ToastError.js'
import toastSucess from '../Toasts/ToastSucess.js'

function Container() {
  const [img, setImg] = useState()

  const selo = [
    { value: 'Sim', label: 'Sim' },
    { value: 'Não', label: 'Não' },
  ]

  const durabilidades = [
    { value: 'Alta', label: 'Alta' },
    { value: 'Média', label: 'Média' },
    { value: 'Baixa', label: 'Baixa' },
  ]

  const materiais = [
    { value: 'Látex', label: 'Látex' },
    { value: 'Algodão', label: 'Algodão' },
    { value: 'Alumínio', label: 'Alumínio' },
    { value: 'Plástico', label: 'Plástico' },
    { value: 'Borracha', label: 'Borracha' },
  ]

  const [produto, setProduto] = useState({
    nome_produto: '',
    selo_produto: '',
    file_produto: '',
    preco_produto: '',
    material_produto: '',
    durabilidade_produto: '',
  })

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append('nome', produto.nome_produto)
      formData.append('selo', produto.selo_produto)
      formData.append('foto', produto.file_produto)
      formData.append('preco', produto.preco_produto)
      formData.append('material', produto.material_produto)
      formData.append('durabilidade', produto.durabilidade_produto)

      await url_fixa.post('/animais', formData, {
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
          <div className="div_nome_preço_produto">
            <section className="section_nome_preço">
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
            </section>

            <section className="section_nome_preço">
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
          </div>

          <div className="div_material_durabilidade_produto">
            <section className="section_material_durabilidade">
              <section className="section_span1">
                <span className="span1">Escolha o material do produto</span>
              </section>

              <Select1
                className="select"
                name="material_produto"
                options={materiais}
                value={produto.material_produto}
                onChange={(e) => {
                  handleChange('material_produto', e.target.value)
                }}
              />
            </section>

            <section className="section_material_durabilidade">
              <section className="section_span2">
                <span className="span2">Escolha a durabilidade do produto</span>
              </section>

              <Select2
                className="select"
                options={durabilidades}
                name="durabilidade_produto"
                value={produto.durabilidade_produto}
                onChange={(e) => {
                  handleChange('durabilidade_produto', e.target.value)
                }}
              />
            </section>
          </div>

          <div className="div_selo_file_produto">
            <section className="section_selo_file">
              <section className="section_span1">
                <span className="span1">Selo cruelty-free</span>
              </section>

              <Select3
                options={selo}
                className="select"
                name="selo_produto"
                value={produto.selo_produto}
                onChange={(e) => {
                  handleChange('selo_produto', e.target.value)
                }}
              />
            </section>

            <section className="section_selo_file">
              <section className="section_span">
                <span className="span1">Adicione fotos:</span>
              </section>

              <section className="section_selo_file">
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
