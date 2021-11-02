import dev_icon from "./assets/mobile/developer__icon.png"
import des_icon from "./assets/mobile/nightmarethumb.png"
import art_icon from "./assets/mobile/untitledthumb.jpg"
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <div className="navigation">
            <Link to="/ms"
                className="developer__img">
                <img
                    href="'#ms'"
                    // src="./src/assets/mobile/developer__icon.png"
                    src={dev_icon}
                    alt="developer__icon"
                />
            </Link>

            <div className="developer__title">
                <Link to="/ms">
                    Developer
                </Link>
            </div>
            <Link to="/th" className="design__img">
                <img
                    href="'#th'"
                    src={des_icon}
                    alt="nightmare-thumb"
                />
            </Link>

            <div className="design__title">
                <Link to="/th">
                    Design
                </Link>
            </div>
            <Link to="/pf" className="artist__img">
                <img
                    href="'#pf'"
                    src={art_icon}
                    alt="untitled-thumb"
                />
            </Link>

            <div className="artist__title">
                <Link to="/pf">
                    Artist
                </Link>
            </div>
        </div>
    )
}

export default Nav