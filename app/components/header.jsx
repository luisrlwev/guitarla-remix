import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg'

function Header() {
  return (
    <header className="header">
        <div className="contenedor barra">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
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