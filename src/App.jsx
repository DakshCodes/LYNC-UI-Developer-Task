import './styles/app.scss'
import Landing from './pages/Landing/Landing'
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

function App() {


  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <>
      <Landing />
    </>
  )
}

export default App
