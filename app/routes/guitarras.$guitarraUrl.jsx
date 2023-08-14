import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'

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

function Guitarra() {

  const guitarra = useLoaderData()
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

  return (
    <div className='guitarra'>
      <img src={imagen.data.attributes.url} alt={`guitarra ${nombre}`} className="imagen" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>${precio}</p>

        <form className='formulario'>
          <label htmlFor="cantidad">Cantidad</label>
          <select name="cantidad" id="cantidad">
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            type="submit"
            value='Agregar al carrito'
          />
        </form>
      </div>
    </div>
  )
}

export default Guitarra