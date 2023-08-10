import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/posts.server"
import ListadoPosts from "~/components/listado-posts"

export function meta(){
  return[
    {title: 'Blog - GuitarLA'},
    {description: 'Entérate de todas las noticias sobre guitarras en GuitarLA'}
  ]
}

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Blog() {

  const posts = useLoaderData()

  return (
      <ListadoPosts
        posts={posts}
      />
  )
}

export default Blog