import React from 'react';
import CountUp from 'react-countup';

export default function StoryShared() {
    return (
        <div className="StoryShared">
            <div className="SharedCount">
            <p id="Title">Stories Shared</p>
                <div id="Count">
                    <CountUp
                    start={0}
                    end={1000000}
                    duration={2.5}
                    />
                    </div>
                    <p id="Text">and counting...</p>
                
            </div>
            <div className="SharedContainer">
                <p>Whats your story to tell?</p>
                <button>SUBMIT YOUR STORY</button>
            </div>
        </div>
    )
}