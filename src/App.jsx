import { NavBar } from "./components/NavBar"
import './App.css'
import { ItemListContainer } from "./components/ItemListContainer"

function App() {
  const greeting = "Lista de Produtos"

  return (
    <>
     <NavBar />
     <ItemListContainer greeting={greeting} />
    </>
  )
}

export default App
