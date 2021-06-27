import { useState } from "react"

const apiKey = 'Pboj2pSFbOlMbjmKYHNlnwOG7oSSdvtg'

export default function getGifs ({keyword = 'matrix'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
  // En caso q fetch no esté soportado por navegador, se puede usar
  // github.com/developit/unfetch

  return fetch(apiURL)
  .then((res) => res.json())
  .then((response) => {
    const { data = [] } = response
    if (Array.isArray(data)) {
      // console.log('Dentro de if del getGif ')
      // console.log(data)
      const gifsRetornados = data.map(image => {
        // console.log('Valor del url: ' + image.images.downsized_medium.url)
        const {images, title, id} = image
        const {url} = image.images.downsized_medium.url
        const urlValor = images.downsized_medium.url
        // console.log('Valor del url (images): ' + urlValor)
        // console.log({url})
        //return {title, id, url}
        return {title, id, url: urlValor}

      })
      // console.log('Dentro de getGif ')
      // console.log(gifs)
      return gifsRetornados
    }
  })
}