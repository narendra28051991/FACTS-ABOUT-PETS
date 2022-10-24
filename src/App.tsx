import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useMode } from './hooks/useMode'

// pages
import Cat from './pages/cat/Cat';
import Dog from './pages/dog/Dog';

// components
import Navbar from './components/Navbar';
import ModeSelector from './components/ModeSelector';

// styles
import './App.css';

function App() {
  const { mode } = useMode()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ModeSelector />
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
