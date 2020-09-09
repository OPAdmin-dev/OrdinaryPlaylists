import React, { useState } from 'react';
import { Modal } from 'antd';
import StoryForm from '../Forms/StoryForm';
import CountUp from 'react-countup';

export default function StoryShared() {

    const [add, setAdd] = useState(false);
    const [loading, updateLoading] = useState(false);

    const addStory = () => {
        setAdd(true);
      }

    const closeModal = () => {
        setAdd(false);
    }

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
                <button
                    onClick={addStory} 
                >SUBMIT YOUR STORY
                </button>
            </div>
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
    )
}