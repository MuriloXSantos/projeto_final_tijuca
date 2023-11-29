import "./Container.sass"
import { useState } from "react"

function Container() {

    const [img, setImg] = useState();

    function handleImage(e) {

        if (e.target.files[0]) {

            const [image] = e.target.files;
            const photo = URL.createObjectURL(image);
            setImg(photo);
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
                        <button className="nome_cruelty_free">
                            Cruelty-free
                        </button>
                    </div>
                </div>
            </div>

            <div className="div_form">

                <h1 className="h1_cadastrar_produto">
                    Cadastre um produto
                </h1>

                <form method="post" className="form_cadastrar">

                    <div className="div_nome_produto">

                        <label className="label" for="input_nome_produto">
                            Nome do produto
                        </label>

                        <input type="text" id="input_nome_produto"
                            name="nome_produto" required />
                    </div>

                    <div className="div_preço_material_produto">

                        <section>
                            <label className="label" for="input_preço_produto">
                                Preço
                            </label>

                            <input type="text" id="input_preço_produto"
                                name="preço_produto"
                                required />
                        </section>

                        <section>
                            <label className="label"
                                for="input_material_produto">
                                Material
                            </label>

                            <input type="text" id="input_material_produto"
                                name="material_produto" required />
                        </section>
                    </div>

                    <div className="div_selo_durabilidade_produto">

                        <section>
                            <label className="label" for="input_selo_produto">
                                Selo cruelty-free ?
                            </label>

                            <input type="text" id="input_selo_produto"
                                name="selo_produto" required />
                        </section>

                        <section>
                            <label className="label"
                                for="input_durabilidade_produto">
                                Durabilidade
                            </label>

                            <input type="text" id="input_durabilidade_produto"
                                name="durabilidade_produto" required />
                        </section>
                    </div>

                    <div className="div_file">

                        <section>

                            <span className="span_2">Adicione fotos:</span>

                            <label className="label_file"
                                for="input_file_produto" tabIndex="0">

                                <img className="img_file" src={img}
                                    alt="Clique aqui" />

                            </label>

                            <input type="file" accept="images/*"
                                name="foto_produto" id="input_file_produto"
                                onChange={(e) => handleImage(e)} />

                        </section>
                    </div>

                    <button className="btn_enviar">Enviar</button>
                </form>
            </div>
        </main>
    )
}

export default Container