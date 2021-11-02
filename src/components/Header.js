// import header__img from "./assets/images/msheader2.png";
// import header__img__lower from "./assets/images/headerimglower.png"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header__title">
            <Link to="/" className="header_title_class">
                <p>KASPER SIMONS</p>
            </Link>
            </div>
        </div>
    )
}

export default Header