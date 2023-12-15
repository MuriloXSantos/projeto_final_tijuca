// código abaixo representando a lógica de filtrar e pesquisar produtos

// import "./index.css";
// import { useState } from "react";
// import ToDo from "./components/ToDo"
// import Search from "./components/Search"
// import Filter from "./components/Filter"

// function App() {

//   const [to_dos] = useState([

//     {
//       id: 1,
//       title: "Ana",
//       category: "Padrão",
//       category_1: "Limpeza",
//     },
//     {
//       id: 2,
//       title: "Carolina",
//       category: "Padrão",
//       category_1: "Limpeza",
//     },
//     {
//       id: 3,
//       title: "Moreira",
//       category: "Padrão",
//       category_2: "Remédio",
//     },
//     {
//       id: 4,
//       title: "Tavares",
//       category: "Padrão",
//       category_2: "Remédio",
//     },
//     {
//       id: 5,
//       title: "Luna",
//       category: "Padrão",
//       category_3: "Vestimenta",
//     },
//     {
//       id: 6,
//       title: "Sousa",
//       category: "Padrão",
//       category_3: "Vestimenta",
//     },
//   ])

//   const [search, setSearch] = useState("")

//   const [filter, setFilter] = useState("Todos")

//   return (

//     <div className="app">

//       <h1>Lista de Produtos</h1>

//       <Search search={search} setSearch={setSearch} />

//       <Filter filter={filter} setFilter={setFilter} />

//       <div className="to_do_list">

//         {to_dos

//         .filter((to_do) =>
//         filter === "Todos" ? to_do.category :
//         filter === "Limpeza" ? to_do.category_1:
//         filter === "Remédio" ? to_do.category_2 :
//         filter === "Vestimenta" ? to_do.category_3 :
//         to_do.category)

//         .filter((to_do) => to_do.title.toLowerCase()
//             .includes(search.toLowerCase()))

//         .map((to_do) => (

//           <ToDo key={to_do.id} to_do={to_do} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default App;

// --------------------------------------------------------------------------

// código abaixo representando a navbar, o container e o footer da home

// import "./index.sass"
// import Navbar from "./components_2/Navbar/Navbar"
// import Footer from "./components_2/Footer/Footer"
// import Container from "./components_2/Container/Container"

// function App() {

//     return (

//         <div className="app">

//             <Navbar />

//             <Container />

//             <Footer />
//         </div>
//     )
// }

// export default App

// --------------------------------------------------------------------------

// código abaixo representando o cadastro de pets

// import './index.sass'
// import CadastroPet from './CadastroPet/CadastroPet.jsx'

// function App() {
//   return (
//     <div className="app">
//       <CadastroPet />
//     </div>
//   )
// }

// export default App

// --------------------------------------------------------------------------

// código abaixo representando os detalhes do animal

// import "./index.sass"
// import Navbar from "./components_4/Navbar/Navbar"
// import Footer from "./components_4/Footer/Footer"
// import Container from "./components_4/Container/Container"

// function App() {

//     return(

//         <div className="app">

//             <Navbar />

//             <Container />

//             <Footer />
//         </div>
//     )
// }

// export default App

// --------------------------------------------------------------------------

// código abaixo representando os detalhes do produto

// import "./index.sass"
// import Navbar from "./components_5/Navbar/Navbar"
// import Footer from "./components_5/Footer/Footer"
// import Container from "./components_5/Container/Container"

// function App() {

//     return(

//         <div className="app">

//             <Navbar />

//             <Container />

//             <Footer />
//         </div>
//     )
// }

// export default App

// --------------------------------------------------------------------------

// código abaixo representando o cadastro do produto

import './index.sass'
import Navbar from './components_6/Navbar/Navbar'
import Container from './components_6/Container/Container'

function App() {
  return (
    <div className="app">
      <Navbar />

      <Container />
    </div>
  )
}

export default App

// --------------------------------------------------------------------------

// código abaixo representando o carrinho

// import "./index.sass"
// import Navbar from "./components_7/Navbar/Navbar"
// import Footer from "./components_7/Footer/Footer"
// import Container from "./components_7/Container/Container"

// function App() {

//   return(

//     <div className="app">

//       <Navbar />

//       <Container />

//       <Footer />

//     </div>
//   )
// }

// export default App

// --------------------------------------------------------------------------

// código abaixo representando a lista de desejos

// import "./index.sass"
// import Navbar from "./components_8/Navbar/Navbar"
// import Footer from "./components_8/Footer/Footer"
// import Container from "./components_8/Container/Container"

// function App() {

//   return (

//     <div className="app">

//       <Navbar />

//       <Container />

//       <Footer />
//     </div>
//   )
// }

// export default App

// --------------------------------------------------------------------------

// Murilo: Detalhes de animais e produtos, cadastro de animais e produtos,
// carrinho, lista de desejos. (6)
