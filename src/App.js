import {useEffect, useState} from 'react'
import './App.css';
import getGifs from './services/getGifs';

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    console.log('efecto ejecutado')
    getGifs().then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGig => <img src={singleGig} />)
        }
      </section>
    </div>
  );
}

export default App;
