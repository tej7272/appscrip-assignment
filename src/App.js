import './App.css';
import Detail from './components/detail/Detail';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/products/Dashboard';
import Footer from  './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Detail />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
