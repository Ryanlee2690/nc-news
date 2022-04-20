import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Nav from './components/Nav'
import Header from './components/Header'
import Articles from './components/Articles'
import Topics from './components/Topics'
import SingleTopic from './components/SingleTopic'
import SingleArticle from './components/SingleArticle';



function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/articles' element={<Articles />}></Route>
        <Route path='/topics' element={<Topics />}></Route>
        <Route path='/articles/topic/:topic' element={<SingleTopic />}></Route>
        <Route path='/articles/:article_id' element={<SingleArticle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
