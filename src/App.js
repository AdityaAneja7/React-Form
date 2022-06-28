import './App.css';
import Form from './components/Form';
import Login from './components/Login';
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className='container my-3'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
