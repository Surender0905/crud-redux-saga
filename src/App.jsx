import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import About from './pages/About';
import AddEditUser from './pages/AddEditUser';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<AddEditUser />} />
        <Route path="/edit/:id" element={<AddEditUser />} />
        <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;
