import { useState } from 'react'
import './App.css'
import Calculator from './components/Calculator'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  const [theme, setTheme] = useState<string>('ligth')

  const isLigth = () =>{
    return theme == 'ligth'
  }

  return (
    <div className={isLigth() ? 'container': 'container dark'}>
      <Header theme={theme} setTheme={setTheme} isLigth={isLigth}/>
      <Calculator theme={theme} isLigth={isLigth}/>
      <Footer />
    </div>
  )
}

export default App
