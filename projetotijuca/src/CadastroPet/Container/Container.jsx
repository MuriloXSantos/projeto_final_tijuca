import './Container.sass'
import { useState } from 'react'
import pets from './images/pets.png'
import Input from './Inputs/Input.jsx'
import Input2 from './Inputs/Input_2.jsx'
import Textarea from './Inputs/Textarea.jsx'
import url_fixa from '../../Axios/UrlFixa.js'
import toastError from '../Toasts/ToastError.js'
import toastSucess from '../Toasts/ToastSucess.js'

function Container() {
  const [img, setImg] = useState()

  const [pet, setPet] = useState({
    nomePet: '',
    filePet: '',
    sexoPet: '',
    idadePet: '',
    portePet: '',
    estadoPet: '',
    cidadePet: '',
    especiePet: '',
    descricaoPet: '',
  })

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append('sexo', pet.sexoPet)
      formData.append('foto', pet.filePet)
      formData.append('nome', pet.nomePet)
      formData.append('porte', pet.portePet)
      formData.append('idade', pet.idadePet)
      formData.append('cidade', pet.cidadePet)
      formData.append('estado', pet.estadoPet)
      formData.append('especie', pet.especiePet)
      formData.append('descricao', pet.descricaoPet)

      await url_fixa.post('/animais', formData, {
        headers: { 'Content-type': 'multipart/form-data' },
      })
      toastSucess()
      console.log(pet)
    } catch (e) {
      toastError()
      console.log(e)
      console.log(pet)
    }
  }

  function handleChange(nameInput, valueInput) {
    const { name, valor } = { name: nameInput, valor: valueInput }
    setPet({
      ...pet,
      [name]: valor,
    })
  }

  function handleImage(e) {
    if (e.target.files[0]) {
      const [image] = e.target.files
      const photo = URL.createObjectURL(image)
      setImg(photo)
      setPet({ ...pet, filePet: e.target.files[0] })
    }
  }

  return (
    <main>
      <div className="div_img_container">
        <img src={pets} alt="Sweet Pets" className="img_pets" />
      </div>

      <div className="div_form">
        <h1 className="h1_cadastrar_pets">Cadastre um pet para adoção</h1>

        <form method="post" className="form_cadastrar">
          <div className="div_nome_pet">
            <label className="label" htmlFor="input_nome_pet">
              Nome do pet
            </label>

            <Input
              type="text"
              name="nomePet"
              id="input_nome_pet"
              value={pet.nomePet}
              onChange={(e) => {
                handleChange('nomePet', e.target.value)
              }}
            />
          </div>

          <div className="div_espécie_sexo_pet">
            <section>
              <label className="label" htmlFor="input_espécie_pet">
                Espécie:
              </label>

              <Input
                type="text"
                name="especiePet"
                id="input_espécie_pet"
                value={pet.especiePet}
                onChange={(e) => {
                  handleChange('especiePet', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_sexo_pet">
                Sexo:
              </label>

              <Input
                type="text"
                name="sexoPet"
                id="input_sexo_pet"
                value={pet.sexoPet}
                onChange={(e) => {
                  handleChange('sexoPet', e.target.value)
                }}
              />
            </section>
          </div>

          <div className="div_idade_porte_pet">
            <section>
              <label className="label" htmlFor="input_idade_pet">
                Idade:
              </label>

              <Input
                type="text"
                name="idadePet"
                id="input_idade_pet"
                value={pet.idadePet}
                onChange={(e) => {
                  handleChange('idadePet', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_porte_pet">
                Porte:
              </label>

              <Input
                type="text"
                name="portePet"
                id="input_porte_pet"
                value={pet.portePet}
                onChange={(e) => {
                  handleChange('portePet', e.target.value)
                }}
              />
            </section>
          </div>

          <div className="div_estado_cidade_pet">
            <section>
              <label className="label" htmlFor="input_estado_pet">
                Estado:
              </label>

              <Input
                type="text"
                name="estadoPet"
                id="input_estado_pet"
                value={pet.estadoPet}
                onChange={(e) => {
                  handleChange('estadoPet', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_cidade_pet">
                Cidade:
              </label>

              <Input
                type="text"
                name="cidadePet"
                id="input_cidade_pet"
                value={pet.cidadePet}
                onChange={(e) => {
                  handleChange('cidadePet', e.target.value)
                }}
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

              <Input2
                type="file"
                accept="images/*"
                id="input_file_pet"
                onChange={(e) => {
                  handleImage(e)
                }}
              />
            </section>

            <section className="section">
              <span className="span_2">Conte um pouco sobre o pet:</span>

              <Textarea
                name="descricaoPet"
                value={pet.descricaoPet}
                onChange={(e) => {
                  handleChange('descricaoPet', e.target.value)
                }}
              />
            </section>
          </div>
          <button onClick={(e) => handleSubmit(e)}>Enviar</button>
        </form>
      </div>
    </main>
  )
}

export default Container
