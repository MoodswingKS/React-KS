import linkedin_icon from './assets/socialmedia/linkedin.png'
import instagram_icon from './assets/socialmedia/insta.png'
import facebook_icon from './assets/socialmedia/fb.png'
import youtube_icon from './assets/socialmedia/yt.png'
import mixcloud_icon from './assets/socialmedia/mc.png'

const Footer = () => {
    return (
        <div class="footer">
            <div class="footercontainer">
                <p>&copy; Kasper Simons 2021</p>
            </div>

            <div class="socialmedia">
                <a
                    href="https://www.linkedin.com/in/kasper-simons-04392017a"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={linkedin_icon}
                        alt="linkedin_icon"
                    />
                </a>

                <a
                    href="https://www.instagram.com/kaspersimons"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagram_icon}
                        alt="instagram_icon"
                    />
                </a>

                <a
                    href="https://www.facebook.com/Moodswing-778081475883270"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={facebook_icon}
                        alt="facebook_icon" />
                </a>

                <a
                    href="https://www.youtube.com/channel/UCjbnfr3CD1nwrdGZjpdMfcg"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={youtube_icon} alt="youtube_icon" />
                </a>

                <a
                    href="https://www.mixcloud.com/kasper-simons"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={mixcloud_icon}
                        alt="mixcloud_icon"
                    />
                </a>
            </div>
        </div>
    )
}

export default Footer