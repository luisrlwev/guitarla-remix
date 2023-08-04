import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export async function loader ({params}){
  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)

  if(guitarra.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }

  return guitarra
}

export function meta({data}){

  const nombre = data.data[0].attributes.nombre
  const descripcion = data.data[0].attributes.descripcion

  if(!data){
    return [
      {title: 'Guitarra no encontrada - GuitarLA'},
      {description: `La guitarra ${nombre} no fue encontrada o no existe`}
    ]
  }

  return[
    {title: `${nombre} - GuitarLA`},
    {description: `${descripcion}`}
  ]
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Guitarra() {

  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

  return (
    <main className='contenedor guitarra'>
      <img src={imagen.data.attributes.url} alt={`guitarra ${nombre}`} className="imagen" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>${precio}</p>
      </div>
    </main>
  )
}

export default Guitarra