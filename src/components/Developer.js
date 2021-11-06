import kikkers__img from "./assets/developer/kikkers.png"
import film__img from "./assets/developer/film.png"
import super__img from "./assets/developer/superpy.png"
import tdd__img from "./assets/developer/tdd.png"
import betsy__img from "./assets/developer/betsy.png"
import student__img from "./assets/developer/student.png"

const Developer = () => {
    return (
        <div>
            <div className="dev__container">
                <div className="dev__text">
                    <p style={{ "font-style":"italic" }}>
                        For the past few years, I have worked on various projects<br />
                        to improve my skills in becoming a Full Stack Developer.<br />
                        Right now I am focussing on Continuous Development,<br />
                        creating a pipeline with Python, Flask and Nginx.<br />
                    </p>
                    <p>
                        This website has been made with React, SASS and JavaScript.
                    </p>
                    <hr />
                </div>
            </div>
            <div className="dev__container">
                <img className="dev__text-image" alt="dev img" src={super__img} />

                <div className="dev__text">
                    <a href="https://github.com/MoodswingKS/SuperPy-Kasper_Simons" target="_blank"
                        rel="noreferrer">Repository</a>
                    <h1>Python</h1>
                    <p>
                        I've created a Command Line Interface for supermarkets.<br />
                        Through the use of Python's module Argparse.
                    </p>
                    <hr />
                </div>
            </div>
            <div className="dev__container">
                <img className="dev__text-image" alt="dev img" src={betsy__img} />

                <div className="dev__text">
                    <a href="https://github.com/MoodswingKS/Betsys-Webshop-Kasper-Simons" target="_blank"
                        rel="noreferrer">Repository</a>
                    <h1>Python and SQL</h1>
                    <p>
                        I've created a database with SQL.<br />
                        With it you can create users and products,<br />
                        and generate transactions between them.
                    </p>
                    <hr />
                </div>
            </div>
            <div className="dev__container">
                <img className="dev__text-image" alt="dev img" src={student__img} />

                <div className="dev__text">
                    <a href="https://github.com/MoodswingKS/Kasper_Simons-StudentDashboard/tree/main/student-dashboard" target="_blank"
                        rel="noreferrer">Repository</a>
                    <h1>React Redux</h1>
                    <p>
                        I've created a student dashboard with state management.<br />
                        With it, you can see statistics for each student<br />
                        and visualized through the use of graphs.
                    </p>
                    <hr />
                </div>
            </div>
            <div className="dev__container">
                <img className="dev__text-image" alt="dev img" src={tdd__img} />

                <div className="dev__text">
                    <a href="https://github.com/MoodswingKS/Kasper_Simons-TDD-Groentetuin" target="_blank"
                        rel="noreferrer">Repository</a>
                    <h1>JavaScript and TDD</h1>
                    <p>
                        This project was made while using JavaScript and Jest.<br />
                        It features a method for Test Driven Development.
                    </p>
                    <hr />
                </div>
            </div>
            <div className="dev__container">
                <img className="dev__text-image" alt="dev img" src={film__img} />

                <div className="dev__text">
                    <a href="https://vigilant-dijkstra-3cf03f.netlify.app/" target="_blank"
                        rel="noreferrer">Live page</a><br />
                    <a href="https://github.com/MoodswingKS/Winc_academy/tree/master/Kasper_Simons%20-%20Filmzoeker" target="_blank"
                        rel="noreferrer">Repository</a>
                    <h1>HTML, CSS and JavaScript</h1>
                    <p>
                        I've created a website to find specific movies.<br />
                        It features a CSS grid, radio buttons and links to their IMDB pages.<br />
                        The JavaScript code changes the list of movies,<br />
                        depending on which button has been checked.
                    </p>
                    <hr />
                </div>
            </div>
            <div className="dev__container">
                <img className="dev__text-image" alt="dev img" src={kikkers__img} />

                <div className="dev__text">
                    <a href="https://laughing-goldwasser-f9c884.netlify.app/" target="_blank"
                        rel="noreferrer">Live page!</a><br />
                    <a href="https://github.com/MoodswingKS/Winc_academy/tree/main/Kasper_Simons%20-%20Hackathon" target="_blank"
                        rel="noreferrer">Repository</a>
                    <h1>HTML and CSS</h1>
                    <p>
                        I've created a website while only making use of HTML and CSS.<br />
                        I used CSS Flex, Grid and other well known techniques.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Developer