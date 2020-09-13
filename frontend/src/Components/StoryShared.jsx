import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import MasterForm from '../Forms/StoryForm/MasterForm';
import CountUp from 'react-countup';
import apiStories from '../services/utilities/API';

export default function StoryShared() {

    const [add, setAdd] = useState(false);
    const [loading, updateLoading] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        apiStories.getAll()
            .then(res => {
                setCount(res.data.length);
            })
    })

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
                        end={count}
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
                width="100%"
                height= "130%"
                visible={add}
                onCancel={closeModal}
                footer={[]}
                destroyOnClose={true}
            >
                <MasterForm closeModal={closeModal} add={add}  loading={loading} updateLoading={updateLoading}/>
            </Modal>
        </div>
    )
}