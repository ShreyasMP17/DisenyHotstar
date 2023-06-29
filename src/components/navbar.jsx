import '../styles/navbar.css' //double dot using import another folder file
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src="images/newlogo.svg" alt="" />
            </div>
            <div className="nav_links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link id='two' to="/movies">Favourites</Link></li>
                    <li><Link id='three' to="/celebs">Celebs</Link></li>
                    <li><Link id='four' to="/add-favourites">Add to Favourites</Link></li>
                    <li><Link id='one' to="">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;