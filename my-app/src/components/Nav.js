import dev_icon from "./assets/mobile/developer__icon.png"
import des_icon from "./assets/mobile/nightmarethumb.png"
import art_icon from "./assets/mobile/untitledthumb.jpg"

import { HashLink } from 'react-router-hash-link';


const Nav = () => {
    return (
        <div className="navigation">
            <img
                class="developer__img"
                href="'#ms'"
                // src="./src/assets/mobile/developer__icon.png"
                src={dev_icon}
                alt="developer__icon"
            />

            <div class="developer__title">
                <HashLink smooth to="/#ms">
                    Developer
                </HashLink>
            </div>

            <img
                class="design__img"
                href="'#th'"
                src={des_icon}
                alt="nightmare-thumb"
            />

            <div class="design__title">
                <HashLink smooth to="/#th">
                    Design
                </HashLink>
            </div>

            <img
                class="artist__img"
                href="'#pf'"
                src={art_icon}
                alt="untitled-thumb"
            />

            <div class="artist__title">
                <HashLink smooth to="/#pf">
                    Artist
                </HashLink>
            </div>
        </div>
    )
}

export default Nav