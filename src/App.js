
import './App.css';
import { Contact } from './components/contact/Contact';
import { Topbar } from './components/topbar/Topbar'
import { Testmonials } from './components/testmonials/Testmonials';
import { Portfolio } from './components/portfolio/Portfolio';
import { Intro } from './components/intro/Intro';
function App() {
  return (
    <div className="App">
     <Topbar/>
     <div className="sections">
        <Intro/>
        <Portfolio/>
        <Testmonials/>
        <Contact/>
     </div>
    </div>
  );
}

export default App;
