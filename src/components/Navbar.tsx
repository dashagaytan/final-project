import { NavLink } from "react-router-dom"
export default function Navbar(){
    return(
        <>
        <header className="navbar">
            <div className="navbar-logo"> Dasha Gyatan 🎨 🖼️</div>
                <nav className="navbar-links">
                    <NavLink to='/' end>Home Page</NavLink>
                    <NavLink to='/about' end>About Me</NavLink>
                    <NavLink to='/artGallery' end>Art Gallery</NavLink>
                    <NavLink to='/contact' end>Contact</NavLink>                    
                </nav>
        </header>
        </>
    )
}