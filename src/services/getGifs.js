const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=Pboj2pSFbOlMbjmKYHNlnwOG7oSSdvtg&q=panda&limit=10&offset=0&rating=g&lang=en'

export default function getGifs () {
  // En caso q fetch no esté soportado por navegador, se puede usar
  // github.com/developit/unfetch

  return fetch(apiURL)
  .then((res) => res.json())
  .then((response) => {
    const { data = [] } = response
    const gifs = data.map(image => image.images.downsized_medium.url)
    return gifs
  })
}