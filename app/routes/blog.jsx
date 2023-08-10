import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/posts.server"
import ListadoPosts from "~/components/listado-posts"
import styles from '~/styles/blog.css'

export function meta(){
  return[
    {title: 'Blog - GuitarLA'},
    {description: 'Entérate de todas las noticias sobre guitarras en GuitarLA'}
  ]
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Blog() {

  const posts = useLoaderData()

  return (
    <main className="contenedor">
      <ListadoPosts
        posts={posts}
      />
    </main>
  )
}

export default Blog