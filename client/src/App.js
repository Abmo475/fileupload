
import { Routes, Route } from 'react-router-dom';
import './App.css';
import UploadFile from './components/uploadfile';
import Home from './components/Home';
function App() {
  return (
    <div className="app">
     <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/upload' element={<UploadFile/>}/>

     </Routes>

    </div>
  );
}

export default App;
