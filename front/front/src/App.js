import { Route, Routes } from 'react-router';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<HomePage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/profile/:id' element={<ProfilePage/>}  />
      </Routes>
    </div>
  );
}

export default App;
''