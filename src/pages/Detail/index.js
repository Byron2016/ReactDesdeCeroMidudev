import React,  { useContext } from "react"
// import StaticContext from '../../context/StaticContext'
import GifsContext from '../../context/GifsContext'

export default function Detail ({ params }) {
  // const staticConfig = useContext(StaticContext)
  // console.log(staticConfig)
  const gifsContext = useContext(GifsContext)
  const {gifs} = useContext(GifsContext)
  console.log(gifs)
  // console.log(params.id)
  return <h1>GIF con id {params.id}</h1>
}