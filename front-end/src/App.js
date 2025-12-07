import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/pages/Navbar';
import Home from './layout/pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
