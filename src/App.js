import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// pages
import Cat from './pages/cat/Cat';
import Dog from './pages/dog/Dog';

// components
import Navbar from './components/Navbar';

// styles
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Cat />} />
          <Route path='/dog' element={<Dog />} />
          <Route path='/cat' element={<Navigate to="/" />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
