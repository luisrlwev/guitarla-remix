import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/carrito.css'

export function meta(){
    return[
        {title: 'Carrito - GuitarLA'},
        {description: 'Termina de comprar lo que añadiste al carrito'}
    ]
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

function Carrito() {
    const { carrito } = useOutletContext()
  return (
    <main className="contenedor">
        <h1 className="heading">Carrito de compras</h1>
        <div className="contenido">
            <div className='carrito'>
                <h2>Artículos</h2>
                {carrito.length === 0 ? 'Carrito vacío' : (
                    carrito.map( producto => (
                        <div key={producto.id} className='producto'>
                            <div>
                                <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                            </div>
                            <div>
                                <p className="nombre">{producto.nombre}</p>
                                <p>Cantidad:</p>
                                <select
                                    value={producto.cantidad}
                                    className='select'
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <p className='precio'>Precio: $ <span>{producto.precio}</span></p>
                                <p className='subtotal'>Subtotal: $<span> {producto.cantidad * producto.precio}</span></p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <aside className="resumen">
                <h3>Resumen del pedido</h3>
                <p>Total a pagar: $</p>
            </aside>
        </div>
    </main>
  )
}

export default Carrito