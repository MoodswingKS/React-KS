import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Header />
      </header>
      <nav>
        <Nav />
      </nav>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
