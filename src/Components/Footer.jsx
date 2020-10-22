import React, { useState } from "react";
import { Modal } from "antd";
import MasterForm from "../Forms/StoryForm/MasterForm";
import SubmissionPage from "./SubmissionPage";

export default function Footer() {
  let date = new Date().getFullYear();

  const [add, setAdd] = useState(false);
  const [loading, updateLoading] = useState(false);
  const [showSubmission, setShowSubmission] = useState(false);

  const addStory = () => {
    setAdd(true);
  };

  const closeModal = () => {
    setAdd(false);
    setShowSubmission(false);
  };

  return (
    <footer id="footer">
      <h1 style={{ paddingTop: "1em" }}>Connect with us</h1>
      <div id="social" className="socialDark">
        <a href="#">
          <span className="fab fa-facebook"></span>
        </a>
        <a href="#">
          <span className="fab fa-twitter"></span>
        </a>
        <a href="#">
          <span className="fab fa-instagram"></span>
        </a>
        <a href="#">
          <span className="fab fa-youtube"></span>
        </a>
      </div>

      <ul id="footerList">
        <li>
          <a href="./About">WHO ARE WE</a>
        </li>
        <li>
          <a href="./FAQs">FAQs</a>
        </li>
      </ul>
      <br />
      <button id="footerButton" onClick={addStory}>
        SUBMIT YOUR STORY
      </button>
      <Modal
        width="100%"
        height="130%"
        visible={add}
        onCancel={closeModal}
        footer={[]}
        destroyOnClose={true}
      >
        {showSubmission ? (
          <SubmissionPage />
        ) : (
          <MasterForm
            closeModal={closeModal}
            add={add}
            loading={loading}
            updateLoading={updateLoading}
            setShowSubmission={setShowSubmission}
          />
        )}
      </Modal>
      <p id="copyrights">© Ordinary Playlists {date}</p>
    </footer>
  );
}
