import { Link } from "@remix-run/react"

function Header() {
  return (
    <header className="header">
        <div className="contenedor barra">
            <div className="logo">

            </div>
            <nav className="navegacion">
                <Link
                    to="/"
                    prefetch="render"
                >Inicio</Link>
                <Link
                    to="/nosotros"
                    prefetch="render"
                >Nosotros</Link>
                <Link
                    to="/tienda"
                    prefetch="render"
                >Tienda</Link>
                <Link
                    to="/blog"
                    prefetch="render"
                >Blog</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header