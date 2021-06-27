import {useEffect, useState} from 'react'
import './App.css';
import getGifs from './services/getGifs';
import Gif from './components/Gif';

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    // console.log('efecto ejecutado')
    getGifs({keyword: 'Homero'}).then(gifsRetornados => setGifs(gifsRetornados))
    // console.log('dentro de useEffect ')
    // console.log(gifs)
  }, [])

  // console.log('fuera de useEffect ')
  // console.log(gifs)

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGig => 
            <Gif 
              key={singleGig.id}
              title={
              singleGig.title} 
              url={singleGig.url} 
              id={singleGig.id} 
            /> ) 
        }
      </section>
    </div>
  );
}

export default App;
