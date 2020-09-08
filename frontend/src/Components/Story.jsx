import React from 'react';

export default function Story() {
    return(
        <div className="Story">
        <div className="StoryContainer">
            <p id="StoryTitle">Everyone has a chapter they don’t read out loud.</p>
            <p id="StoryParagraph">What’s yours?</p>
            <button style={{
                backgroundColor: "rgba(244,247,244 .65)",
            }}>SUBMIT YOUR STORY</button>
        </div>
        <div className="StoryContainer purple">
            <p id="StoryUs">Our Story</p>
            <p id="ParagraphUs">Ordinary Playlists is a space that collates and shares the experiences of commonfolk, where strings of woven words make stories, and pieces of stories inspire art. This is for you, for us, for the times we live and love and lose.</p>
            
            <button style={{
                marginTop: "30px",
                backgroundColor: "rgba(31,31,31, .65)",
                color: "white"
            }}>READ MORE</button>
            </div>
        </div>
    )
}

