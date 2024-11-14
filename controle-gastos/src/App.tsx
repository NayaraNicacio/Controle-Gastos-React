import { useState } from 'react'
import capainicial from './assets/capainicial.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // contador de visitas

  return (
    <>
      <div>
  
          <img src={capainicial} className="logo react" alt="capa inicial" />
       
      </div>
      <h1>Bem Vindo ao Economic Trayde Layds</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
     
    </>
  )
}

export default App
