import { Link } from 'react-router-dom';
import logoImage from '../BNM_Logo_White.png';

const Header = () => {

    return (
        <header className="bm-logo-header">
            <div className="bm-logo-wrapper">
                <Link to="/">
                    <img src={logoImage} alt="Benchmark Logo" />
                </Link>
            </div>
        </header>
    )
}

export default Header;