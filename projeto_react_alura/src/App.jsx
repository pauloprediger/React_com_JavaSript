import Banner from './components/Banner/Banner'
import { Formulario } from './components/Formulario/Formulario'
import { CampoTexto } from './components/CampoTexto/CampoTexto'



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
