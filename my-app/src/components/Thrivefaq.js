import FaqComponent from "react-faq-toggler";

const Thrivefaq = () => {
    const data = [
        {
            question: "How does it work?", answer: 
            `
        While playing, users will notice that I've created a vivid world that twists and turns at every corner. 
        WE are not alone. Each choice has consequences, each choice will expand into even more choices.
        There are BAD choices, yet the creature is neither good nor bad. 
        The game has a sense of duality in it, but not the way it usually works.
        
        To avoid these bad choices I've created THREE basic rules to follow. 
        The first rule is already implemented in the alpha and for you to find out!` 
        },
        {
            question: "How do you make those choices?", answer: `
        The game let's you progress by choosing which route to follow. 
        Each path has different perspectives. All paths follow the same thread.
        The alpha mainly focuses on the first steps towards evolution. 
        Ranging from a few of the options, more will be added at later stages.
        This is but a tip of the iceberg for what I have planned, 
        as the next stages will move towards other aspects of the world it is living in.` 
        },
        {
            question: "What is the theme?", answer: `
        Genre: Mystery / Choice-Game / Sci-Fi
        You play LITERALLY the third person, not being sure of what you are, nor what you will be achieving.
        You are following a being not able to thrive on its own.
        You are its higher power, meaning you have the power to guide the creature to be a better version of itself.` 
        },
        {
        question: "Where did you get the illustrations?", answer: `
        All things included have been made or modified by myself. 
        It almost feels like a picture book. 
        Even the choices are drawings made by my hand, digitalised and enhanced to become part of the game.` 
        },
        {
        question: "What is the main selling point?", answer: `
        REPLAY
        Since every path opens another perspective of the same thread,
        it is impossible to understand the story if you follow only a single path. 
        You are obligated to try different courses just to comprehend the different takes on the environment. 
        The alpha has something secret included to elaborate on this idea, if certain conditions have been met.` 
        },
        {
        question: "Where did you get the inspiration from?", answer: `
        I took my inspiration from Spore, Telltale games and No Man Sky. 
        But a bigger resemblance can be seen as a complete opposite of The Stanley Parable.` 
        },
        { question: "Where can I play it?", answer: "Over here! Enjoy!" },
    ];
    return (
        <div>
            <FaqComponent faqs={data} />
        </div>
    )
}

export default Thrivefaq