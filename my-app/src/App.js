import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'



function App() {
  return (
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
  );
}

export default App;
