import React,  { useContext } from "react"
// import StaticContext from '../../context/StaticContext'
import GifsContext from '../../context/GifsContext'
import Gif from '../../components/Gif/index'

export default function Detail ({ params }) {
  // const staticConfig = useContext(StaticContext)
  // console.log(staticConfig)
  const gifsContext = useContext(GifsContext)
  const {gifs} = useContext(GifsContext)
  const gif = gifs.find(singleGif => singleGif.id === params.id)
  console.log(gifs)
  // console.log(params.id)
  return <Gif {...gif} />
}