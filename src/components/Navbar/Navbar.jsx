import {Link} from "react-router-dom";
import "./Navbar.css";
export const Navbar=()=>{
    return(
        <header className="navbarH">
            <div className="headingtitleicon">
                <h1 className="heading-title">
                    <Link to ="/" className="link cursor">ButterflyBooks</Link>
                </h1>
            </div>
            <nav className="navigation">
                <ul className="list-non-bullet">
                    <li className="list-item-inline">
                        <Link to="/" className="link cursor">Home</Link>
                    </li>
                    <li className="list-item-inline">
                        <Link to="/cart" className="link cursor">Cart</Link>
                    </li>
                </ul>
              
            </nav>
        </header>
    )
}