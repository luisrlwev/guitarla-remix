import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/posts.server"
import { formatearFecha } from "~/utils/helpers"

export async function loader ({params}){
  const { postUrl } = params
  const post = await getPost(postUrl)

  if(post.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Post del blog no encontrado'
    })
  }

  return post
}

export function meta({data}){

  const titulo = data.data[0].attributes.titulo

  if(!data){
    return [
      {title: 'Post no encontrado - GuitarLA'},
      {description: `El post ${titulo} no fue encontrado o no existe`}
    ]
  }

  return[
    {title: `${titulo} - GuitarLA`},
    {descripcion: `Enterate en este blog sobre todo lo relacionado acerca de ${titulo}`}
  ]
}

function Post() {
  const post = useLoaderData()
  const { contenido, imagen, titulo, publishedAt } = post?.data[0]?.attributes
  return (
    <article className="post">
      <img src={imagen?.data?.attributes?.url} alt={`post ${titulo}`} className="imagen" />
      <div className="contenido">
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <h3>{titulo}</h3>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}

export default Post