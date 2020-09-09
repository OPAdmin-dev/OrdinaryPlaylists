import React, { useState } from 'react';
import { Modal } from 'antd';
import StoryForm from '../Forms/StoryForm';

export default function Footer() {
    
    let date =  new Date().getFullYear();

    const [add, setAdd] = useState(false);
    const [loading, updateLoading] = useState(false);

    const addStory = () => {
        setAdd(true);
      }

    const closeModal = () => {
        setAdd(false);
    }

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
            <button 
             id="footerButton"
             onClick={addStory} 
            >
                SUBMIT YOUR STORY
            </button>
            <Modal
                title="Add Story"
                visible={add}
                onCancel={closeModal}
                footer={[]}
                destroyOnClose={true}
            >
                <StoryForm closeModal={closeModal} add={add}  loading={loading} updateLoading={updateLoading}/>
            </Modal>
            <p id="copyrights">© Ordinary Playlists {date}</p>
        </footer>
    )
}