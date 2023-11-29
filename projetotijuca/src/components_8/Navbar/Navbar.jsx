import "./Navbar.sass"
import seta from "./images/img_seta.svg"

function Navbar() {

  return (

    <nav>

      <div className="div_link_nav">

        <a className="link_nav" href="/">
          <img className="img_nav" src={seta} alt="Sweet Pets" />
        </a>
      </div>

      <div className="div_input">
        
        <input type="text" placeholder="O que seu pet precisa ?" />
      </div>

    </nav>
  )
}

export default Navbar