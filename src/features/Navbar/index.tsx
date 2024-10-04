import { NavLink } from 'react-router-dom'
import './navbar.scss'
export default function Navbar() {
    return (
        <header className='header'>
            <h1>L</h1>
            <nav className='Navbar'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/cadastro">Junte-se</NavLink>
            </nav>
        </header>
    )
}