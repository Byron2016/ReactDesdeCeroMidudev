// import { useState } from "react"

const apiKey = 'Pboj2pSFbOlMbjmKYHNlnwOG7oSSdvtg'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({limit = 10, keyword = 'morty'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`
  // En caso q fetch no esté soportado por navegador, se puede usar
  // github.com/developit/unfetch

  return fetch(apiURL)
  .then((res) => res.json())
  .then(fromApiResponseToGifs)
  // .then((response) => {
  //   const { data = [] } = response
  //   if (Array.isArray(data)) {
  //     const gifsRetornados = data.map(image => {
  //       const {images, title, id} = image
  //       const {url} = image.images.downsized_medium.url
  //       const urlValor = images.downsized_medium.url
  //       //return {title, id, url}
  //       return {title, id, url: urlValor}

  //     })
  //     return gifsRetornados
  //   }
  // })
}