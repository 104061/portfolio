// src/App.tsx
import "./App.css";

function App() {

    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Contact></Contact>
        </>
    );
}


function Navbar() {
    window.addEventListener("scroll", () => {
        const nav = document.querySelector(".nav") as HTMLElement;
        if (!nav) return;
        if (window.scrollY > 0){
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    })
    return (
        <section className="nav">
            <div className="nav-title">
                <h1>NC.</h1>
            </div>
            <div className="nav-wrapper">
                <div className="nav-buttons">
                    <a href="#about" className="nav-button">About</a>
                    <a href="#projects" className="nav-button">Projects</a>
                    <a href="#skills" className="nav-button">Skills</a>
                    <a href="#contact" className="nav-button">Contact</a>
                </div>
            </div>
        </section>
    )
}

function Hero(){
    return(
        <section className="hero" id="hero">
            <div className="hero-wrapper">
                <h1>Hero</h1>
            </div>
        </section>
    )
}

function About(){
    return(
        <section className="about" id="about">
            <div className="about-wrapper">
                <h1>About</h1>
            </div>
        </section>
    )
}

function Projects(){
    return(
        <section className="projects" id="projects">
            <div className="projects-wrapper">
                <h1>Projects</h1>
            </div>
        </section>
    )
}

function Skills(){
    return(
        <section className="skills" id="skills">
            <div className="skills-wrapper">
                <h1>Skills</h1>
            </div>
        </section>
    )
}

function Contact(){
    return(
        <section className="contact" id="contact">
            <div className="contact-wrapper">
                <h1>Contact</h1>
            </div>
        </section>
    )
}

export default App;
