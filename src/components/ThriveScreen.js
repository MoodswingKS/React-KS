// import __background from './assets/main_menu2.png'
// import thrive_title_img from './assets/thrive/textbox2.png'
import thrive_eye from './assets/images/eyeopening.gif'
import screenshot1 from "./assets/screenshot6.png"
import screenshot2 from "./assets/screenshot2.png"
import screenshot3 from "./assets/screenshot4.png"

const isScreen = () => {
    const screenSize = window.innerWidth
    if (screenSize > 1024) {
        return (
            <div className="download__text">
                <p>
                    But why not try it for yourself!<br />
                    If you are on a pc or laptop,<br />
                    you can download the alpha of the game over here:<br />
                    <br />
                    Mac: <a href="https://mega.nz/file/1htW2QbQ#PA8eMLW9VWnp7OeXdoHXh2ZMHBP3EEwZFVB-x6zYiy4">Download Link!</a><br />
                    Pc: <a href="https://mega.nz/file/0k1ABSSL#AQnNtTkjVD-cGwvLF-w5Lxq7TaPdBPckVs2PmGzLjNk">Download Link!</a><br />
                    Linux: <a href="https://mega.nz/file/A9tElA5S#YQASSqEbtwmvtFL8SrE1iDVrtGP2vAOFImE0TaRyLNo">Download Link!</a>
                </p>

            </div>
        )
    }
}

const ThriveScreen = () => {
    return (
        <div id="/#th">
            <div className="thrive__title"><p>T H R I V E</p></div>
            <div className="screenshot__container" style={{ height: '500px' }}>
                <img src={thrive_eye} alt="thrive eye" />
                <div className="screenshot__text">
                    <p>
                        I&rsquo;ve created a visual novel where choices<br />
                        are the primary theme.
                    </p>
                </div>
            </div>
            <div className="screenshot__container">
                <img src={screenshot1} alt="screenshot1" />
                <div className="screenshot__text">
                    <p>
                        You play the game by making choices.<br />
                        Each path has different perspectives,<br />
                        but all follow the same
                        <span style={{ color: 'red' }}> red thread</span>.<br />
                    </p>
                </div>
            </div>
            <div className="screenshot__container">
                <img src={screenshot2} alt="screenshot2" />
                <div className="screenshot__text">
                    <p>
                        Every choice made in the game,<br />
                        expands the abilities of the<br />
                        creature and the world around it.<br />
                    </p>
                </div>
            </div>
            <div className="screenshot__container">
                <img src={screenshot3} alt="screenshot3" />
                <div className="screenshot__text">
                    <p>
                        The possibilities to 'thrive' are endless,<br />
                        but <span style={{ color: 'red' }}>danger</span> can be just around
                        the corner...
                    </p>
                </div>
            </div>
            {isScreen()}


        </div>
    )
}

export default ThriveScreen