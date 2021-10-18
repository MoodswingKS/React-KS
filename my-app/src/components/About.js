import about__img from './assets/images/picintro.png'


const About = () => {
    return (
        <div>        <div class="about__title-container">
            <div class="about__title">About</div>
        </div>
            <div class="About">
                <img class="about__img" src={about__img} alt="about__img" />
                <div class="about__text-container">
                    <div class="about__text-titel">
                        <strong>Kasper Simons</strong>
                    </div>
                    <p>
                        Academy of Media Design And Technology,<br />
                        Bachelor Of Arts
                    </p>
                    <p>Born 6th of August 1992</p>

                    <p>Current residence:</p>
                    <p>
                        Maastricht,&nbsp;The Netherlands
                    </p>

                    <p>Contact: (+31) 6 41 76 24 60</p>
                    <p>Kmrsimons@gmail.com</p>
                </div>
            </div></div>
    )
}

export default About