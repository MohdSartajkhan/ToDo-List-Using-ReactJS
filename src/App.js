import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';

function App() {
  return (
    <div className="container">
      <Header />
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
