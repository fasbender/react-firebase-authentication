import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
// import Blogs from './pages/Blogs';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoute/>}>
              <Route path='/' element={<Home/>}/>
            </Route>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            {/* <Route path="/blogs" element={<Blogs/>}/> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
