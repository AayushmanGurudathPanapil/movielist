
import { NavLink } from 'react-router-dom'
import '../css/css/Navbar.css'

function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/" className="brand-link">
                  {/* you could replace with an <img> or svg icon */}
                  🎬 Movie App
                </NavLink>
            </div>
            <div className="navbar-links">
                <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                  Home
                </NavLink>
                <NavLink to="/favorites" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                  Favorites
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar