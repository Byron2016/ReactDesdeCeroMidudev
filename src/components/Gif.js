import './Gif.css'

export default function Gif({title, id, url}) {
  return (
    <div className='Gif'>
      <h4>{title}</h4>
      <p><small>{id}</small></p>
      <img src={url} alt={title}/>
    </div>
  )
}