import {useState} from 'react'
import './App.css';

const GIFS = [
  'https://media1.giphy.com/media/cnbsOTkEJnq0/200w.webp?cid=ecf05e47t2codon6cnvgc3hpow7819durne9nzjugqiqn5lb&rid=200w.webp&ct=g',
  'https://media4.giphy.com/media/EPcvhM28ER9XW/200w.webp?cid=ecf05e47t2codon6cnvgc3hpow7819durne9nzjugqiqn5lb&rid=200w.webp&ct=g',
  'https://media4.giphy.com/media/BCgcfnaGDaYai5eYD1/200w.webp?cid=ecf05e47w7vptu3y7yn7gri1261clg7d7h60m7m89b2qo137&rid=200w.webp&ct=g'
]

const DIFFERENTS_GIFS = [
  'https://media2.giphy.com/media/TObbUke0z8Mo/200.webp?cid=ecf05e47t2codon6cnvgc3hpow7819durne9nzjugqiqn5lb&rid=200.webp&ct=g',
]

function App() {
  const [gifs, setGifs] = useState(GIFS)
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGig => <img src={singleGig} />)
        }
        <button onClick={() => setGifs(DIFFERENTS_GIFS) }>
          Cambiar gifs
        </button>
      </section>
    </div>
  );
}

export default App;
