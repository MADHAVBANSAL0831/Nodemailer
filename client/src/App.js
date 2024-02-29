import { Route, Routes } from 'react-router-dom'; 
import Register from './Register';
import Otp from './Otp';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/'  element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
