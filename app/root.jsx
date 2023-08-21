import { useState, useEffect } from 'react'
import{
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
    return [
        {charset: 'utf-8'},
        {title: 'GuitarLA - Remix'},
        {viewport: 'width=device-width,initial-scale=1'},
        {description: 'Venta de guitarras'}
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App(){

    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
    const [carrito, setCarrito] = useState(carritoLS)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const agregarCarrito = guitarra => {
        // Comprobar si el elemento en el carrito ya existe
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
            // El elemento ya existe, actualizar elemento
            // Iterar sobre el arreglo, e identificar el elemento duplicado
            const carritoActualizado = carrito.map( guitarraState => {
                // comprobar si la guitarra del state tiene el mismo id que la guitarra que seleccionamos
                if(guitarraState.id === guitarra.id){
                    // Reescribir la cantidad
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            // Añadir al carrito
            setCarrito(carritoActualizado)
        } else {
            // Registro nuevo agregar al carrito
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {
        const carritoActualizado = carrito.map(guitarraState => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoActualizado)
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter( guitarraState => guitarraState.id !== id )
        setCarrito(carritoActualizado)
    }

    return(
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
        </Document>
    )
}

function Document({children}){
    return (
        <html lang="es">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
            <Header/>
            {children}
            <Footer/>
            <Scripts/>
            <LiveReload/>
        </body>
        </html>
    )
}

/* Manejo de errores */
export function ErrorBoundary() {

    const error = useRouteError()

    if(isRouteErrorResponse(error)){
        return(
            <Document>
                <p className="error">{error.status} {error.statusText}</p>
                <Link to="/" className='error-enlace'>Tal vez quieras volver a la página principal</Link>
            </Document>
        )
    }
}