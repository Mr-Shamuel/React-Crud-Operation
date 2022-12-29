import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import Adduser from './Components/Adduser/Adduser';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Showuser from './Components/Showuser/Showuser';
import UpdateUser from './Components/UpdateUser/UpdateUser';
function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='adduser' element={<Adduser />} />
        <Route path='showuser' element={<Showuser />} />
        <Route path='userUpdate/:userid' element={<UpdateUser />} />
        {/* <Route path='userUpdate' element={<UpdateUser />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Link></Link>

    </div>
  );
}

export default App;
