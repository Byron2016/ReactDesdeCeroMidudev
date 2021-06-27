import {useEffect, useState} from 'react'
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=Pboj2pSFbOlMbjmKYHNlnwOG7oSSdvtg&q=panda&limit=10&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifs] = useState([])

  

  useEffect(() => {
    console.log('efecto ejecutado')

    // En caso q fetch no esté soportado por navegador, se puede usar
    // github.com/developit/unfetch

    fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response
      const gifs = data.map(image => image.images.downsized_medium.url)
      setGifs(gifs)
    })
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGig => <img src={singleGig} />)
        }
        {/*
         <button onClick={() => setGifs(DIFFERENTS_GIFS) }>
          Cambiar gifs
        </button> */}
      </section>
    </div>
  );
}

export default App;
