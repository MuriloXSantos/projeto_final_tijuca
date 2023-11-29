import "./Container.sass"
import { useState } from "react"
import pets from "./images/pets.png"

function Container() {

    const [img, setImg] = useState();

    function handleImage(e){

        if(e.target.files[0]) {

            const [image] = e.target.files;
            const photo = URL.createObjectURL(image);
            setImg(photo);
        }
    }

    return (

        <main>

            <div className="div_img_container">
                <img src={pets} alt="Sweet Pets" className="img_pets" />
            </div>

            <div className="div_form">

                <h1 className="h1_cadastrar_pets">
                    Cadastre um pet para adoção
                </h1>

                <form method="post" className="form_cadastrar">

                    <div className="div_nome_pet">

                        <label className="label" for="input_nome_pet">
                            Nome do pet
                        </label>

                        <input type="text" id="input_nome_pet" name="nome_pet"
                            required />
                    </div>

                    <div className="div_espécie_sexo_pet">

                        <section>
                            <label className="label" for="input_espécie_pet">
                                Espécie:
                            </label>

                            <input type="text" id="input_espécie_pet"
                                name="espécie_pet"
                                required />
                        </section>

                        <section>
                            <label className="label" for="input_sexo_pet">
                                Sexo:
                            </label>

                            <input type="text" id="input_sexo_pet" name="sexo_pet"
                                required />
                        </section>
                    </div>

                    <div className="div_idade_porte_pet">

                        <section>
                            <label className="label" for="input_idade_pet">
                                Idade:
                            </label>

                            <input type="text" id="input_idade_pet" name="idade_pet"
                                required />
                        </section>

                        <section>
                            <label className="label" for="input_porte_pet">
                                Porte:
                            </label>

                            <input type="text" id="input_porte_pet" name="porte_pet"
                                required />
                        </section>
                    </div>

                    <div className="div_estado_cidade_pet">

                        <section>
                            <label className="label" for="input_estado_pet">
                                Estado:
                            </label>

                            <input type="text" id="input_estado_pet" name="estado_pet"
                                required />
                        </section>

                        <section>
                            <label className="label" for="input_cidade_pet">
                                Cidade:
                            </label>

                            <input type="text" id="input_cidade_pet" name="cidade_pet"
                                required />
                        </section>
                    </div>

                    <div className="div_file_comentar">

                        <section>

                            <span className="span_1">Adicione fotos:</span>

                            <label className="label_file" for="input_file_pet"
                                tabIndex="0">

                                <img className="img_file" src={img} alt="Clique aqui" />

                            </label>

                            <input type="file" accept="images/*" name="foto_pet"
                                id="input_file_pet"
                                onChange={(e) => handleImage(e)} />

                        </section>

                        <section className="section">

                            <span className="span_2">Conte um pouco sobre o pet:</span>

                            <textarea required></textarea>
                        </section>
                    </div>

                    <button>Enviar</button>
                </form>
            </div>
        </main>
    )
}

export default Container