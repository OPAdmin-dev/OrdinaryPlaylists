import React from 'react';

export default function Footer() {
    let date =  new Date().getFullYear();

    return (
        <footer id="footer">
            <h1 style={{paddingTop: "1em"}}>Connect with us</h1>
            <div id="social" className="socialDark">
            <a href="#"><span className="fab fa-facebook"></span></a>
            <a href="#"><span className="fab fa-twitter"></span></a>
            <a href="#"><span className="fab fa-instagram"></span></a>
            <a href="#"><span className="fab fa-youtube"></span></a>
            </div>
            
            <ul id="footerList">
                <li>
                    <a href="./About">WHO ARE WE</a>
                </li>
                <li>
                    <a href="./FAQs">FAQs</a>
                </li>
            </ul>
            <br/>
            <button id="footerButton">
            SUBMIT YOUR STORY
            </button>
            
            <p id="copyrights">© Ordinary Playlists {date}</p>
        </footer>
    )
}