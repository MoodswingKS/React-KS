import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import imageSrc from './ImageSrc.js'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Gallery shareButton={false}>
                <div className="portfolio__title">Portfolio</div>
                <Item
                    original={imageSrc.untitled_full}
                    thumbnail={imageSrc.untitled}
                    width="500"
                    height="763"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="untitled" onClick={open} src={imageSrc.untitled} alt="untitled" />
                    )}
                </Item>
                <Item
                    original={imageSrc.portals_full}
                    thumbnail={imageSrc.portals}
                    width="500"
                    height="642"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="portals" onClick={open} src={imageSrc.portals} alt="portals" />
                    )}
                </Item>
                <Item
                    original={imageSrc.lion_full}
                    thumbnail={imageSrc.lion}
                    width="500"
                    height="555"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="lion" onClick={open} src={imageSrc.lion} alt="lion" />
                    )}
                </Item>
                <Item
                    original={imageSrc.thedepths_full}
                    thumbnail={imageSrc.thedepths}
                    width="800"
                    height="586"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="thedepths" onClick={open} src={imageSrc.thedepths} alt="the depths" />
                    )}
                </Item>
                <Item
                    original={imageSrc.hh_full}
                    thumbnail={imageSrc.hh}
                    width="500"
                    height="696"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="hh" onClick={open} src={imageSrc.hh} alt="hanging heart" />
                    )}
                </Item>
                <Item
                    original={imageSrc.oil_full}
                    thumbnail={imageSrc.oil}
                    width="500"
                    height="667"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="oil" onClick={open} src={imageSrc.oil} alt="oil" />
                    )}
                </Item>
                <Item
                    original={imageSrc.mask_full}
                    thumbnail={imageSrc.mask}
                    width="567"
                    height="567"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="mask" onClick={open} src={imageSrc.mask} alt="mask" />
                    )}
                </Item>
                <Item
                    original={imageSrc.gardenofeden_full}
                    thumbnail={imageSrc.gardenofeden}
                    width="1440"
                    height="1176"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="gardenofeden" onClick={open} src={imageSrc.gardenofeden} alt="garden of eden" />
                    )}
                </Item>
                <Item
                    original={imageSrc.train_full}
                    thumbnail={imageSrc.train}
                    width="600"
                    height="807"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="train" onClick={open} src={imageSrc.train} alt="train" />
                    )}
                </Item>
                <Item
                    original={imageSrc.awakening_full}
                    thumbnail={imageSrc.awakening}
                    width="737"
                    height="1024"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="awakening" onClick={open} src={imageSrc.awakening} alt="awakening" />
                    )}
                </Item>
                <Item
                    original={imageSrc.vanity_full}
                    thumbnail={imageSrc.vanity}
                    width="700"
                    height="459"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="vanity" onClick={open} src={imageSrc.vanity} alt="vanity" />
                    )}
                </Item>
                <Item
                    original={imageSrc.nightmare_full}
                    thumbnail={imageSrc.nightmare}
                    width="1280"
                    height="720"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="nightmare" onClick={open} src={imageSrc.nightmare} alt="nightmare" />
                    )}
                </Item>
                <Item
                    original={imageSrc.thrivedemon_full}
                    thumbnail={imageSrc.thrivedemon}
                    width="1440"
                    height="1124"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="thrivedemon" onClick={open} src={imageSrc.thrivedemon} alt="thrivedemon" />
                    )}
                </Item>
                <Item
                    original={imageSrc.thrivewings_full}
                    thumbnail={imageSrc.thrivewings}
                    width="1440"
                    height="975"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="thrivewings" onClick={open} src={imageSrc.thrivewings} alt="thrivewings" />
                    )}
                </Item>
                <Item
                    original={imageSrc.mswhite_full}
                    thumbnail={imageSrc.mswhite}
                    width="4500"
                    height="4500"
                >
                    {({ ref, open }) => (
                        <img ref={ref} className="mswhite" onClick={open} src={imageSrc.mswhite} alt="mswhite" />
                    )}
                </Item>
            </Gallery>
        </div>
    )
}







export default Portfolio