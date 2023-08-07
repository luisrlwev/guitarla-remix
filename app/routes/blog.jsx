import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/posts.server"
import Post from "~/components/post"
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
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </main>
  )
}

export default Blog