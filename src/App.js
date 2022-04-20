import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Nav from './components/Nav'
import Header from './components/Header'
import Articles from './components/Articles'
import Topics from './components/Topics'
import Cooking from './components/Topics/Cooking'
import Coding from './components/Topics/Coding'
import Football from './components/Topics/Football'



function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/articles' element={<Articles />}></Route>
        <Route path='/topics' element={<Topics />}></Route>
        <Route path='/articles/cooking' element={<Cooking />}></Route>
        <Route path='/articles/coding' element={<Coding />}></Route>
        <Route path='/articles/football' element={<Football />}></Route>
      </Routes>
    </div>
  );
}

export default App;
