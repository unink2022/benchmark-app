import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <header className="bm-navbar-wrapper">
            <div className="bm-navbar">
                <Link to="/">
                    Overview
                </Link>
                <Link to="/traffic">
                    Traffic
                </Link>
                <Link to="/site-performance">
                    Site Performance
                </Link>
            </div>
        </header>
    )
}

export default Navbar;