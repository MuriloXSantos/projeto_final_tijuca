import './Container.sass'
import { useState } from 'react'
import Input from './Inputs/Input'
import pets from './images/pets.png'
import Input2 from './Inputs/Input_2'
import Textarea from './Inputs/Textarea'
import url_fixa from '../../Axios/url_fixa.js'

function Container() {
  const [img, setImg] = useState()

  const [pet, setPet] = useState({
    nome_pet: '',
    file_pet: '',
    sexo_pet: '',
    idade_pet: '',
    porte_pet: '',
    estado_pet: '',
    cidade_pet: '',
    especie_pet: '',
    descricao_pet: '',
  })

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append('sexo', pet.sexo_pet)
      formData.append('foto', pet.file_pet)
      formData.append('nome', pet.nome_pet)
      formData.append('porte', pet.porte_pet)
      formData.append('idade', pet.idade_pet)
      formData.append('cidade', pet.cidade_pet)
      formData.append('estado', pet.estado_pet)
      formData.append('especie', pet.especie_pet)
      formData.append('descricao', pet.descricao_pet)

      await url_fixa.post('/animais', formData, {
        headers: { 'Content-type': 'multipart/form-data' },
      })
      console.log(pet)
      console.log('Deu certo')
    } catch (e) {
      console.log(pet)
      console.error('Deu errado')
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
      setPet({ ...pet, file_pet: e.target.files[0] })
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
              name="nome_pet"
              id="input_nome_pet"
              value={pet.nome_pet}
              onChange={(e) => {
                handleChange('nome_pet', e.target.value)
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
                name="especie_pet"
                id="input_espécie_pet"
                value={pet.especie_pet}
                onChange={(e) => {
                  handleChange('especie_pet', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_sexo_pet">
                Sexo:
              </label>

              <Input
                type="text"
                name="sexo_pet"
                id="input_sexo_pet"
                value={pet.sexo_pet}
                onChange={(e) => {
                  handleChange('sexo_pet', e.target.value)
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
                name="idade_pet"
                id="input_idade_pet"
                value={pet.idade_pet}
                onChange={(e) => {
                  handleChange('idade_pet', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_porte_pet">
                Porte:
              </label>

              <Input
                type="text"
                name="porte_pet"
                id="input_porte_pet"
                value={pet.porte_pet}
                onChange={(e) => {
                  handleChange('porte_pet', e.target.value)
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
                name="estado_pet"
                id="input_estado_pet"
                value={pet.estado_pet}
                onChange={(e) => {
                  handleChange('estado_pet', e.target.value)
                }}
              />
            </section>

            <section>
              <label className="label" htmlFor="input_cidade_pet">
                Cidade:
              </label>

              <Input
                type="text"
                name="cidade_pet"
                id="input_cidade_pet"
                value={pet.cidade_pet}
                onChange={(e) => {
                  handleChange('cidade_pet', e.target.value)
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
                required
                type="file"
                name="foto_pet"
                accept="images/*"
                id="input_file_pet"
                value={pet.foto_pet}
                onChange={(e) => {
                  handleImage(e)
                }}
              />
            </section>

            <section className="section">
              <span className="span_2">Conte um pouco sobre o pet:</span>

              <Textarea
                required
                name="descricao_pet"
                value={pet.descricao_pet}
                onChange={(e) => {
                  handleChange('descricao_pet', e.target.value)
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
