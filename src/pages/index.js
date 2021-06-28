import { useState } from 'react'
import {Link, useLocation} from 'wouter'

const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Ecuador"]

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleSubmit = evt => {
    evt.preventDefault()
    // navegar a otra ruta
    pushLocation('/search/${keyword}')

  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search a gif here...." onChange={handleChange} type='text' value={keyword} />
      </form>
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li>
            <Link to={'/search/${popularGif}'}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}