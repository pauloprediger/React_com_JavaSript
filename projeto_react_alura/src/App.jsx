import './App.css'
import Banner from './components/Banner/Banner'
import { Formulario } from './components/Formulario/Formulario'



function App() {
  return (
    <>
      <div>
        <Banner/>
      </div>
      <div className='formulario'>
        <Formulario/>
      </div>
    </>
  )
}

export default App
