import ms__org_img from './assets/mobile/org.png'
import ms__neon_img from './assets/mobile/neon.png'
import ms__kaleido_img from './assets/mobile/kaleido.png'
import ReactPlayer from "react-player"

const Moodswing = () => {
    return (
        <div id="/ms">
            <div className="moodswing">
                <div className="moodswing__title">Moodswing</div>
            </div>
            <div className="moodswing__text-container">
                <div className="moodswing__text">
                    <p>
                        Moodswing is my way of visualising the unconscious emotional
                        state I perceive while performing the Arts.<br />
                        It&rsquo;s a never-ending source of inspiration that
                        reflects a glimpse of what goes through my mind while
                        absorbing my environment through primarily the auditory and
                        visual senses.
                    </p>
                    <img src={ms__org_img} alt="original" />
                    <p>
                        The program uses my art as a visual source and picks up the
                        live frequency of the environmental sounds to compose a
                        constant change in the visual output.<br />
                        Thus, Moodswing is merely the process of creating art and
                        never a binding final outcome.
                    </p>
                    <img src={ms__neon_img} alt="neon" />
                    <p>
                        While creating Moodswing I learned to express myself in new
                        ways, through the use of programming tools, developing my
                        individuality as an artist.&nbsp;&nbsp;
                    </p>
                   <img src={ms__kaleido_img} alt="kaleido" />
                    <p>
                        Experimenting with later variations, eventually concluded in
                        the 'Kaleido' variation.<br /> 
                        Which has very short ranges in frequency recognition, making the objects appear to be moving on the screen.
                    </p>
                    <p>
                        Another variation, can be seen here:
                    </p>
                </div>
            </div>
            <ReactPlayer
                style={{ 'margin': 'auto', 'max-width': '100%' }}
                url="https://www.facebook.com/778081475883270/videos/561983010875726/"
                controls
            />
        </div>
    )
}

export default Moodswing