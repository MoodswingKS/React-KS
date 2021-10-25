import untitled_full from './assets/portfolio/untitled500x763.jpg'
import untitled from './assets/mobile/untitledthumb.jpg'
import portals_full from './assets/portfolio/portals500x642.png'
import portals from './assets/mobile/portalsthumb.png'
import lion_full from './assets/portfolio/lion500x555.png'
import lion from './assets/mobile/lionthumb.png'
import thedepths_full from './assets/portfolio/thedepthsink800x586.jpg'
import thedepths from './assets/mobile/thedepthsinkthumb.jpg'
import hh_full from './assets/portfolio/hh500x696.png'
import hh from './assets/mobile/hhthumb.png'
import oil_full from './assets/portfolio/oil500x667.jpg'
import oil from './assets/mobile/oilthumb.jpg'
import mask_full from './assets/portfolio/Mask567x567.jpg'
import mask from './assets/mobile/maskthumb.jpg'
import gardenofeden_full from './assets/portfolio/gardenofeden1440x1176.jpg'
import gardenofeden from './assets/mobile/gardenofedenthumb.jpg'
import train_full from './assets/portfolio/train600x807.jpg'
import train from './assets/mobile/trainthumb.png'
import mswhite_full from './assets/portfolio/mswhite.png'
import mswhite from './assets/mobile/mswhitethumb.png'
import awakening_full from './assets/portfolio/awakening-737x1024.png'
import awakening from './assets/mobile/awakeningthumb.png'
import vanity_full from './assets/portfolio/vanity700x459.jpg'
import vanity from './assets/mobile/vanitythumb.png'
import thrivedemon_full from './assets/portfolio/thrivewings.jpg'
import thrivedemon from './assets/mobile/thrivedemonthumb.png'
import thrivewings_full from './assets/portfolio/thrive.jpg'
import thrivewings from './assets/mobile/thrivewingsthumb.png'
import nightmare_full from './assets/portfolio/nightmare.jpg'
import nightmare from './assets/mobile/nightmarethumb.png'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Gallery shareButton={false}>
                <div className="portfolio__title">Portfolio</div>
                <Item
                    original={untitled_full}
                    thumbnail={untitled}
                    width="500"
                    height="763"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="untitled" onClick={open} src={untitled} alt="untitled" />
                    )}
                </Item>
                <Item
                    original={portals_full}
                    thumbnail={portals}
                    width="500"
                    height="642"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="portals" onClick={open} src={portals} alt="portals" />
                    )}
                </Item>
                <Item
                    original={lion_full}
                    thumbnail={lion}
                    width="500"
                    height="555"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="lion" onClick={open} src={lion} alt="lion" />
                    )}
                </Item>
                <Item
                    original={thedepths_full}
                    thumbnail={thedepths}
                    width="800"
                    height="586"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="thedepths" onClick={open} src={thedepths} alt="the depths" />
                    )}
                </Item>
                <Item
                    original={hh_full}
                    thumbnail={hh}
                    width="500"
                    height="696"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="hh" onClick={open} src={hh} alt="hanging heart" />
                    )}
                </Item>
                <Item
                    original={oil_full}
                    thumbnail={oil}
                    width="500"
                    height="667"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="oil" onClick={open} src={oil} alt="oil" />
                    )}
                </Item>
                <Item
                    original={mask_full}
                    thumbnail={mask}
                    width="567"
                    height="567"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="mask" onClick={open} src={mask} alt="mask" />
                    )}
                </Item>
                <Item
                    original={gardenofeden_full}
                    thumbnail={gardenofeden}
                    width="1440"
                    height="1176"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="gardenofeden" onClick={open} src={gardenofeden} alt="garden of eden" />
                    )}
                </Item>
                <Item
                    original={train_full}
                    thumbnail={train}
                    width="600"
                    height="807"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="train" onClick={open} src={train} alt="train" />
                    )}
                </Item>
                <Item
                    original={awakening_full}
                    thumbnail={awakening}
                    width="737"
                    height="1024"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="awakening" onClick={open} src={awakening} alt="awakening" />
                    )}
                </Item>
                <Item
                    original={vanity_full}
                    thumbnail={vanity}
                    width="700"
                    height="459"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="vanity" onClick={open} src={vanity} alt="vanity" />
                    )}
                </Item>
                <Item
                    original={nightmare_full}
                    thumbnail={nightmare}
                    width="1280"
                    height="720"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="nightmare" onClick={open} src={nightmare} alt="nightmare" />
                    )}
                </Item>
                <Item
                    original={thrivedemon_full}
                    thumbnail={thrivedemon}
                    width="1440"
                    height="1124"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="thrivedemon" onClick={open} src={thrivedemon} alt="thrivedemon" />
                    )}
                </Item>
                <Item
                    original={thrivewings_full}
                    thumbnail={thrivewings}
                    width="1440"
                    height="975"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="thrivewings" onClick={open} src={thrivewings} alt="thrivewings" />
                    )}
                </Item>
                <Item
                    original={mswhite_full}
                    thumbnail={mswhite}
                    width="4500"
                    height="4500"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="mswhite" onClick={open} src={mswhite} alt="mswhite" />
                    )}
                </Item>
            </Gallery>
        </div>
    )
}







export default Portfolio