import React, {useEffect, useState} from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from '../../components/ListOfGifs/index'
import Category from '../../components/Category'
import {useGifs} from '../../hooks/useGifs'

const POPULAR_GIFS = ["USA","Matrix", "Chile", "Colombia", "Ecuador", "Peru"]

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const {loading, gifs} = useGifs()

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
      <Category name="Categorias populares" options={POPULAR_GIFS}/>
    </>
  )
}