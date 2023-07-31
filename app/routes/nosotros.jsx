import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

export function meta() {
  return [
    {title: 'Nosotros - GuitarLA'},
    {description: 'Todo sobre nosotros. Tu tienda en línea de guitarras'}
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur risus quis turpis consectetur molestie. Nullam vel nunc non eros dapibus pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam aliquam sem in eros semper, quis condimentum tellus molestie. Nullam blandit, augue vel aliquet dictum, libero nisl accumsan leo, non molestie mi lorem id tortor. Suspendisse tincidunt ultricies dolor vitae euismod.</p>
          <p>Etiam id tincidunt leo, ut condimentum dolor. Praesent porta, justo ut facilisis tempor, augue arcu rhoncus nulla, ac volutpat turpis risus eu augue. Proin feugiat lorem id libero pharetra, ac fringilla felis mollis. Nulla at urna placerat, vehicula mauris at, semper lacus. Praesent id feugiat ex. Suspendisse potenti. Aliquam hendrerit urna sit amet mi placerat egestas. Fusce maximus lorem arcu, eu hendrerit arcu placerat elementum. Proin ac turpis eu risus mattis viverra. Etiam lacinia nibh vitae mauris fringilla sodales.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros