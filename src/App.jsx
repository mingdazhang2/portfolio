import './app.scss';
import { Contact } from './components/contact/Contact';
import { Topbar } from './components/topbar/Topbar';
import { Testimonials } from './components/testimonials/Testimonials';
import { Portfolio } from './components/portfolio/Portfolio';
import { Intro } from './components/intro/Intro';
import { Menu } from './components/menu/Menu';
import { Works } from './components/works/Works';
import { useState } from 'react';
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
     <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
     <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works />
        <Testimonials/>
        <Contact/>
     </div>
    </div>
  );
}

export default App;
