import {useContext} from "react"
import GifsContext from '../context/GifsContext'

export default function useGlobalGifs(){
  // Devuelve solo la capacidad de leerlos
  // Esto es una buena práctica.
  //const {gifs} = useContext(GifsContext)
  //return gifs
  return useContext(GifsContext).gifs
}