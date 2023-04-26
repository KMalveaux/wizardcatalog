import { children } from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            {/* Link to essentially replaces the anchor tags and acts as a router instead of the href */}
            <Link to="/" class="site-title"> 
                Wizard Shop
            </Link>
            <ul>
                <CustomLink to="/Listings">Listings</CustomLink>
                <CustomLink to="/Categories">Categories</CustomLink>
                <CustomLink to="/Deals">Deals</CustomLink>
                <CustomLink to="/Account">Account</CustomLink>
                <CustomLink to="/Cart">Cart</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props} ) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
             <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}