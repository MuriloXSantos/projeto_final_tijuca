import "./Navbar.sass"
import cart from "./images/cart.svg"
import logo from "./images/logo.png"

function Navbar() {

  return (

    <nav>

      <a className="link_logo" href="/">
        <img className="img_link" src={logo} alt="Sweet Pets" />
      </a>

      <input type="text" placeholder="O que seu pet precisa ?" />

      <div className="redirecionar">

        <div className="div_link"><a className="link_redirecionar" href="/">Entrar|Cadastrar</a></div>

        <div className="div_img">
          <img className="img_redirecionar" src={cart} alt="Sweet Pets" />
        </div>
      </div>

    </nav>
  )
}

export default Navbar