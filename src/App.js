import './App.css';
import Detail from './components/detail/Detail';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/products/Dashboard';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Detail />
      <Dashboard />
    </div>
  );
}

export default App;
