import Thrive from './Thrive'
import ThriveScreen from './ThriveScreen'
import Moodswing from './Moodswing'
import MoodswingScreen from './MoodswingScreen'
import About from './About'
import Portfolio from './Portfolio'
import { Route, Switch } from 'react-router-dom'


const isMobileDes = () => {
    const screenSize = window.innerWidth
    if (screenSize <= 700) {
        return (
            <Route exact path="/th">
                <section>
                    <Thrive />
                </section>
            </Route>
        )
    }
    return (
        <Route exact path="/th">
            <section>
                <ThriveScreen />
            </section>
        </Route>
    )
}

const isMobileDev = () => {
    const screenSize = window.innerWidth
    if (screenSize <= 700) {
        return (
            <Route exact path="/ms">
                <section>
                    <Moodswing />
                </section>
            </Route>
        )
    }
    return (
        <Route exact path="/ms">
            <section>
                <MoodswingScreen />
            </section>
        </Route>
    )
}


const Home = () => {
    return (
        <Switch>
            <div className="Home">
                {isMobileDes()}

                {isMobileDev()}

                <Route exact path="/">
                    <section>
                        <About />
                    </section>
                </Route>

                <Route exact path="/pf">
                    <section>
                        <Portfolio />
                    </section>
                </Route>
            </div>
        </Switch>
    )
}

export default Home