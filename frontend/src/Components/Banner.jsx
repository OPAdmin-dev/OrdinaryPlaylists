import React from 'react';

export default function Banner() {
    const release = {
        height: "17px",
        fontFamily: "GT Cinetype Trial",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "12px",
        lineHeight: "109%",
        color: "#8A80D3"}
    return(

        <div className="home">
            <div className="container">
                <p style={release}>NEW RELEASE</p>
                <h1>Any Picture With You</h1>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec placerat ante. Sed interdum fringilla justo, eget tincidunt purus...”</p>
                <p>by Joie Tan & Nurush Osman</p>
                <section id="section10">
                    <a href="#thanks"><span></span></a>
                </section>
           </div>
        </div>
            
    )
}