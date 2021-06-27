import {useState} from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs';

import {Link, Route } from 'wouter'

function App() {
  const [keyword, setKeyword] = useState('panda')
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/ecuador'>Gifs de Ecuador</Link>
        <Link to='/gif/chile'>Gifs de Chile</Link>
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
