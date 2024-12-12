import { useState } from 'react'
import logo from './assets/OlymoLogo.svg'
import backdrop from "./assets/WelcomeUp.svg"
import backdropBottom from "./assets/Welcome.svg"
// import logo from './assets/Frame 5 (1).svg'
import Home from './pages/home'
import WhatIsXP from './pages/WhatIsXP'
import Reasoning from './pages/Reasoning'
import Plan from './pages/Plan'
import AbtWebsite from './pages/AbtWebsite'
import Footer from './pages/footer'
import Preregister from './pages/Preregister'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-full  bg-[#faf9f6]'>
    <Home />
    <WhatIsXP />
    <Reasoning />
    <Plan />
    <AbtWebsite />
    <Preregister />
    <Footer />
    </main>
  )
}

export default App
