import './App.css';
import {Routes ,Route } from 'react-router-dom';
import Login from './component/Login';
import Header  from './component/Header';
import Home from './component/Home';
import Detail from './component/Detail';


function App() {
  return (
    <>
    <Header />
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} /> 
    </Routes>
   </> 
  );
}

export default App;
