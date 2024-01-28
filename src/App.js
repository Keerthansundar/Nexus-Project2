import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import {Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App ">
      <Home/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes> 

  
    </div>
  );
}

export default App;
