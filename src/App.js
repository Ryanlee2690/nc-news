import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Nav from './components/Nav'
import Header from './components/Header'
import Articles from './components/Articles'


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/articles' element={<Articles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
