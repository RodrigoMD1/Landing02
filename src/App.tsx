import './App.css'
import { Footer } from './components/Layout/Footer'
import { MisRutas } from './Router/MisRutas'

function App() {


  return (
    <div className='bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <div className='min-h-screen '>
        <MisRutas />
      </div>
      <div className='justify-items-center'>
        <Footer />
      </div>
    </div>
  )
}

export default App
