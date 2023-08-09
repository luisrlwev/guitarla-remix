import { Link } from "@remix-run/react"
import { formatearFecha } from "~/utils/helpers"

export default function Post({post}) {

    const { contenido, imagen, titulo, url, publishedAt } = post
  return (
    <article className="post">
        <Link className="titulo" to={`/blogs/${url}`}><img src={imagen.data.attributes.formats.small.url} alt={`Imagen del blog ${titulo}`} className="imagen"/></Link>
        <div className="contenido">
            <h3><Link className="titulo" to={`/blogs/${url}`}>{titulo}</Link></h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className="enlace" to={`/blogs/${url}`}>Leer más</Link>
        </div>
    </article>
  )
}
