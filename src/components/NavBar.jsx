import '../styles/navbar.scss'
import CartWidget from "./CartWidget"


const NavBar = () => {
  return (
   <nav className="nav">
    <ul>
   <li><a href="#">Inicio</a></li>
   <li><a href="#">Productos</a></li>
   <li><a href="#">Contacto</a></li>
   <li><a href="#">Sobre Nosotros</a></li>
   <CartWidget/>
 </ul>
 </nav>
 
  )
}

export default NavBar