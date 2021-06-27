import {useEffect, useState} from 'react'
import './App.css';
import getGifs from './services/getGifs';

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    // console.log('efecto ejecutado')
    getGifs({keyword: 'matrix'}).then(gifsRetornados => setGifs(gifsRetornados))
    // console.log('dentro de useEffect ')
    // console.log(gifs)
  }, [])

  // console.log('fuera de useEffect ')
  // console.log(gifs)

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGig => {
          return <div>
            <h4>{singleGig.title}</h4>
            <p><small>{singleGig.id}</small></p>
            <img src={singleGig.url} alt={singleGig.title}/>
          </div>
          }) 
        }
      </section>
    </div>
  );
}

export default App;
