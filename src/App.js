import './App.css';

import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
