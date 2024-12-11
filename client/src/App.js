import logo from './logo.svg';
import './App.css';
import Navbars from './Components/Navbars';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import CreateBlog from './Components/CreateBlog';
import EditBlog from './Components/EditBlog';


function App() {
  return (
    <BrowserRouter>

      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/addBlog' element={<CreateBlog />} />
        <Route path='/editBlog/:id' element={<EditBlog />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
