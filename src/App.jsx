import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)
  const viewportHeightInPixels = window.innerHeight;
  console.log(viewportHeightInPixels);


  return (
    <>
    <section>
      <Navbar/>
      </section>
    <section id='Home'>Home</section>
    <section>About</section>
    <section>Services</section>
    <section id='Portfolio'>Portfolio</section>
    <section>Contact</section>
    </>
  )
}

export default App
