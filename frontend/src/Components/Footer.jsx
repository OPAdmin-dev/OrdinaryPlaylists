import React from 'react';

export default function Footer() {
    let date =  new Date().getFullYear();

    return (
        <footer id="footer">
            <h1>Connect with us</h1>
            <ul id="footerList">
                <li>
                    <a href="./About">ABOUT US</a>
                </li>
                <li>
                    <a href="./FAQs">FAQs</a>
                </li>
            </ul>
            <br/>
            <button id="footerButton">
            SUBMIT YOUR STORY
            </button>
            <div id="social" className="socialDark">
            <a href="#"><span className="fab fa-facebook"></span></a>
            <a href="#"><span className="fab fa-twitter"></span></a>
            <a href="#"><span className="fab fa-instagram"></span></a>
            <a href="#"><span className="fab fa-youtube"></span></a>
        
            </div>
            <p id="copyrights">© Ordinary Playlists {date}</p>
        </footer>
    )
}