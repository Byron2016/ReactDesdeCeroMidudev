import {useState} from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Route } from 'wouter'

function App() {
  const [keyword, setKeyword] = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <a href='/gif/panda'>Gifs de pandas</a>
        <a href='/gif/ecuador'>Gifs de Ecuador</a>
        <a href='/gif/chile'>Gifs de Chile</a>
        <Route 
          component={ListOfGifs} 
          path="/gif/:keyword" />
        {/* 
        <button onClick={() => setKeyword('mapache')}>Cambiar keyword</button>
        <ListOfGifs keyword={keyword} /> 
        */}
      </section>
    </div>
  );
}

export default App;
