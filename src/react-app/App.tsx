// src/App.tsx

import "./App.css";

function App() {

    return (
        <>
            <Navbar></Navbar>
        </>
    );
}


function Navbar() {
    return (
        <section className="nav">
            <div className="nav-title">
                <h1>NC.</h1>
            </div>
            <div className="nav-wrapper">
                <div className="nav-buttons">
                    <a href="" className="nav-button">Home</a>
                    <a href="" className="nav-button">About</a>
                    <a href="" className="nav-button">Projects</a>
                    <a href="" className="nav-button">Skills</a>
                    <a href="" className="nav-button">Contact</a>
                </div>
            </div>
            <div className="nav-right"></div>
        </section>
    )
}

export default App;
