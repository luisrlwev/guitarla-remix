import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from "~/models/guitarras.server"
import ListadoGuitarras from '../components/listado-guitarras'
import styles from '~/styles/guitarras.css'

export function meta() {
  return [
    {title: 'Tienda - GuitarLA'},
    {description: 'Descubre toda la colección de nuestras guitarras'}
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {

  const guitarras = useLoaderData()

  return (
    <main className='contenedor'>
      <ListadoGuitarras
        guitarras={guitarras}
      />
    </main>
  )
}

export default Tienda