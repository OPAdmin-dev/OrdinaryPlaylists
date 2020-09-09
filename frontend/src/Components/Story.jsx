import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import StoryForm from '../Forms/StoryForm';

export default function Story() {

    const [add, setAdd] = useState(false);
    const [loading, updateLoading] = useState(false);

    const addStory = () => {
        setAdd(true);
      }

    const closeModal = () => {
        setAdd(false);
    }

    return(
        <div className="Story">
        <div className="StoryContainer">
            <p id="StoryTitle">Everyone has a chapter they don’t read out loud.</p>
            <p id="StoryParagraph">What’s yours?</p>
            <button style={{
                backgroundColor: "rgba(244,247,244 .65)",
            }}
            onClick={addStory}
            >SUBMIT YOUR STORY</button>
        </div>
        <div className="StoryContainer purple">
            <p id="StoryUs">Our Story</p>
            <p id="ParagraphUs">Ordinary Playlists is a space that collates and shares the experiences of commonfolk, where strings of woven words make stories, and pieces of stories inspire art. This is for you, for us, for the times we live and love and lose.</p>
            
            <button style={{
                marginTop: "30px",
                backgroundColor: "rgba(31,31,31, .65)",
                color: "white"
            }}
            >READ MORE</button>
            <Modal
                title="Add Story"
                visible={add}
                onCancel={closeModal}
                footer={[]}
                destroyOnClose={true}
            >
                <StoryForm closeModal={closeModal} add={add}  loading={loading} updateLoading={updateLoading}/>
            </Modal>
            </div>
        </div>
    )
}

