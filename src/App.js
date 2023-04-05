import { Route, Routes } from 'react-router-dom'

import './App.scss'
import Layout from './Components/Layout'
import About from './Components/About'
import Contact from './Components/Contact'
import Gallery from './Components/Gallery'
import Projects from './Components/Projects'
import Experiments from './Components/Experiments'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
    // <div className="App">
    //   <h1>Elizabeth Nova-Rowan Astra-Minerva</h1>
    //   <Gallery />
    //   <About />
    //   <Projects />
    //   <Experiments />
    //   <Contact />
    // </div>
  )
}
