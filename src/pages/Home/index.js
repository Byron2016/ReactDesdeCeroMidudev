import React, {useEffect, useState} from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from '../../components/ListOfGifs/index'
import {useGifs} from '../../hooks/useGifs'

const POPULAR_GIFS = ["USA","Matrix", "Chile", "Colombia", "Ecuador"]

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  //i-Mismo código usado en SearchResult
  // const [loading, setLoading] = useState(false)
  // const [gifs, setGifs] = useState([])

  // useEffect(function (){
  //   setLoading(true)
  //   getGifs({keyword: 'Rick'})
  //     .then(gifsRetornados => {
  //       setGifs(gifsRetornados)
  //       setLoading(false)
  //     })
  // }, [keyword])
  //f-Mismo código usado en SearchResult
  const {loading, gifs} = useGifs({keyword: 'Indiana'})

  const handleSubmit = evt => {
    evt.preventDefault()
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword} />
        <button>Buscar</button>
      </form>
      <h3 className="App-title">Ültima búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
      {POPULAR_GIFS.map((popularGif) => (
        <li key={popularGif}>
          <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))}
      </ul>
    </>
  )
}