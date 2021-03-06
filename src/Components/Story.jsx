import React, { useState } from "react";
import { Modal } from "antd";
import MasterForm from "../Forms/StoryForm/MasterForm";
import SubmissionPage from "./SubmissionPage";

export default function Story() {
  const [add, setAdd] = useState(false);
  const [loading, updateLoading] = useState(false);
  const [showSubmission, setShowSubmission] = useState(false);

  const addStory = () => {
    setAdd(true);
  };

  const closeModal = () => {
    setShowSubmission(false);
    setAdd(false);
  };

  return (
    <div className="Story">
      <div className="StoryContainer">
        <p id="StoryTitle">Everyone has a chapter they don’t read out loud.</p>
        <p id="StoryParagraph">What’s yours?</p>
        <button
          style={{
            backgroundColor: "rgba(244,247,244)",
            color: "#1F1F1F",
          }}
          onClick={addStory}
        >
          SUBMIT YOUR STORY
        </button>
      </div>
      <div className="StoryContainer purple">
        <p id="StoryUs">Our Story</p>
        <p id="ParagraphUs">
          Ordinary Playlists is a space that collates and shares the experiences
          of commonfolk, where strings of woven words make stories, and pieces
          of stories inspire art. This is for you, for us, for the times we live
          and love and lose.
        </p>
        <button
          style={{
            marginTop: "30px",
            backgroundColor: "rgba(31,31,31, .65)",
            color: "white",
          }}
        >
          READ MORE
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
      </div>
    </div>
  );
}
