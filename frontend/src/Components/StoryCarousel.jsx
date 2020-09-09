import React from 'react';

export default function StoryCarousel() {
    return (
        <div className="MainCarousel">
            <div style={{alignSelf: "flex-end", paddingRight: "1vw"}}>
            <div className="leftCon">
                <div className="round">
                    <div id="cta">
                        <span className="arrow primary next "></span>
                        <span className="arrow secondary next "></span>
                    </div>
                </div>
            </div>

            <div id="LBlock"/>
            </div>
            <div id="card">
                <p id="serial">#1 <i className="fas fa-info-circle"></i></p>
                <p id="title">A dollar that costs 53 years of wedded bliss</p>
                <p id="author">by Gilbert Zhuo</p>
                <p id="story">One summer day in 1967, we headed to the courthouse for a marriage license. My husband-to-be, Steve, asked the clerk for a fishing license. She advised him a fishing license costs $1.50 and a marriage license costs $2.50. With some thought and a smile, he chose the marriage license, and so our life together, later filled with two children, began. Whenever we had a disagreement, I would remind my husband that he could have saved money had he chosen a fishing license, and it would have expired in a year. The extra dollar costs him 53 years of wedded bliss.</p>
            <div>
                <button><i class="fa fa-share-alt" aria-hidden="true"></i> SHARE</button>
                
                    <p id="disclaimer">*copied to clipboard</p>
                </div>
            </div>
            <div style={{alignSelf: "flex-end", paddingLeft: "1vw"}}>
                <div className="rightCon">
                    <div className="round">
                    <div id="cta">
                        <span className="arrow primary next "></span>
                        <span className="arrow secondary next "></span>
                    </div>
            </div>
            </div>

            
            <div id="RBlock"/>
            </div>
        </div>
    )
}