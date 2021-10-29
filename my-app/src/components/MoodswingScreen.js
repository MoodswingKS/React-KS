import React, { Component } from 'react'
import Parallax from '@basith374/parallax-background'
import '@basith374/parallax-background/dist/index.css'
import bg0 from './assets/parallax/ms-background.png';
import bg1 from './assets/parallax/ms-original.png';
import bg2 from './assets/parallax/ms-neon.png';
import bg3 from './assets/parallax/ms-kaleido.png';
import ms_original_icon from './assets/mobile/ms_logo1.png'
import ms_neon_icon from './assets/mobile/ms_logo2.png'
import ms_kaleido_icon from './assets/mobile/ms_logo3.png'
import ReactPlayer from "react-player"


class MoodswingScreen extends Component {
    constructor() {
        super();
        this.state = {
            original: false,
            neon: false,
            kaleido: false
        };
    }

    onClick = (input) => {
        if (input === 'original') {
            this.setState({ original: !this.state.original })
            this.setState({ neon: false })
            this.setState({ kaleido: false })
        }
        else if (input === 'neon') {
            this.setState({ neon: !this.state.neon })
            this.setState({ original: false })
            this.setState({ kaleido: false })
        }
        else if (input === 'kaleido') {
            this.setState({ kaleido: !this.state.kaleido })
            this.setState({ neon: false })
            this.setState({ original: false })
        }
        this.parallaxView()
    }

    parallaxView = () => {
        if (this.state.original) {
            return [bg0, bg1]
        }
        if (this.state.neon) {
            return [bg0, bg2]
        }
        if (this.state.kaleido) {
            return [bg0, bg3]
        }
        return [bg0]
    }

    render() {
        return <div>
            <div className="navigation__parallax">
                <img
                    onClick={() => this.onClick('original')}
                    className="nav_original"
                    src={ms_original_icon}
                    alt="original icon"
                />
                <img
                    onClick={() => this.onClick('neon')}
                    className="nav_neon"
                    src={ms_neon_icon}
                    alt="neon icon"
                />
                <img
                    onClick={() => this.onClick('kaleido')}
                    className="nav_kaleido"
                    src={ms_kaleido_icon}
                    alt="kaleido icon"
                />
            </div>
            <div className="moodswing__parallax">
                <Parallax images={this.parallaxView()} />
            </div>
            <div className="moodswing__info">
                <p>
                    Moodswing is my way of visualising the unconscious emotional
                    state I perceive while performing the Arts.<br />
                    It&rsquo;s a never-ending source of inspiration that
                    reflects a glimpse of what goes through my mind while
                    absorbing my environment through primarily the auditory and
                    visual senses.
                </p><p>
                    The program uses my art as a visual source and picks up the
                    live frequency of the environmental sounds to compose a
                    constant change in the visual output.<br />
                    Thus, Moodswing is merely the process of creating art and
                    never a binding final outcome.
                </p><p>
                    While creating Moodswing I learned to express myself in new
                    ways, through the use of programming tools, developing my
                    individuality as an artist.&nbsp;&nbsp;
                </p><p>
                    Experimenting with later variations, eventually concluded in
                    the 'Kaleido' variation.<br />
                    Which has very short ranges in frequency recognition, making the objects appear to be moving on the screen.
                </p>
                <p>
                    Another variation, can be seen here:
                </p>
            <ReactPlayer
                style={{ 'margin': 'auto' }}
                url="https://www.facebook.com/778081475883270/videos/561983010875726/"
                controls
            />
            
            </div>
        </div>

    }
}


export default MoodswingScreen