import Thrive from './Thrive'
import Moodswing from './Moodswing'
import About from './About'
import Portfolio from './Portfolio'
import { Route, Switch } from 'react-router-dom'

const Home = () => {
    return(
        <Switch>
        <div className="Home">
            <Route exact path="/" />
            <section>
                <Thrive>
                <Route exact path="/#th" />
                </Thrive>
            </section>
            <section>
                <Moodswing>
                <Route exact path="/ms" />
                </Moodswing>
            </section>
            <section>
                <About />
            </section>
            <section>
                <Portfolio>
                <Route exact path="/#ph" />
                </Portfolio>
            </section>
        </div>
        </Switch>
    )
}

export default Home