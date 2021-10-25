// import __background from './assets/main_menu2.png'
// import thrive_title_img from './assets/thrive/textbox2.png'
import thrive_eye from './assets/images/eyeopening.gif'
import thrive_box from './assets/thrive/thrivebox.png'
import Thrivefaq from "./Thrivefaq"

import screenshot1 from "./assets/screenshot6.png"
import screenshot2 from "./assets/screenshot2.png"
import screenshot3 from "./assets/screenshot4.png"

import Slider from 'react-perfect-slider';

const ThriveScreen = () => {
    return (
        <div id="/#th">
            <div className="thrive__title"><p>T H R I V E</p></div>
            <div className="thrive">
                <img className="thrive__eye" src={thrive_eye} alt="thrive eye" />
                <div className="thrive__text-container">
                    <div className="thrive__text">
                        <p>
                            I&rsquo;ve created a visual novel where choices<br />
                            are the primary theme.
                        </p>
                    </div>
                </div>
            </div>
            <div className="thrive__choices">
                <img className="choice__box" src={thrive_box} alt="thrive box" />
                <div className="choice__text">
                    <p>
                        "You play the game by choosing which route to follow. Each
                        path has different perspectives,<br />
                        but all follow the same
                        <span styles="color=red">red thread</span>.<br />
                    </p>
                    <p>
                        Every choice made in the game, expands the abilities of the
                        creature and the world around it.<br />
                    </p>
                    <p>
                        The possibilities to 'thrive' are endless,<br />
                        but <span styles="color:red">danger</span> can be just around
                        the corner.."
                    </p>
                </div>
            </div>
            <Slider autoplay="true" >
                <div><img src={screenshot1} alt="1" className="screenshot" /></div>
                <div><img src={screenshot2} alt="1" className="screenshot" /></div>
                <div><img src={screenshot3} alt="1" className="screenshot" /></div>
            </Slider>
            <div className="thrive__faq"><Thrivefaq /></div>


        </div>
    )
}

export default ThriveScreen