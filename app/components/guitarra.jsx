import { Link } from '@remix-run/react'

export default function Guitarra({guitarra}) {
    const { descripcion, imagen, precio, url, nombre } = guitarra

  return (
    <div className="guitarra">
        <img src={imagen.data.attributes.formats.medium.url} alt={`Guitarra ${nombre}`} />
        <div className="contenido">
            <h3><Link className='titulo' to={`/guitarras/${url}`}>{nombre}</Link></h3>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">${precio}</p>

            <Link className='enlace' to={`/guitarras/${url}`}>Ver producto</Link>
        </div>
    </div>
  )
}