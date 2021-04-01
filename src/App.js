
import './App.scss';
import {Button, Container} from 'react-bootstrap';
import Header from '../src/components/Header/Header';
import Projects from '../src/components/Projects/Projects';
import Footer from '../src/components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Header />
    <Projects />
    <Footer />
    </div>
  );
}

export default App;
