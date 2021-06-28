import './App.css';
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import {Link, Route } from 'wouter'

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt='Giffy logo' src='/logo.png' />
        </Link>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/ecuador'>Gifs de Ecuador</Link>
        <Link to='/gif/chile'>Gifs de Chile</Link>
        <Route 
          component={SearchResults} 
          path="/search/:keyword" />
        <Route
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
  );
}
