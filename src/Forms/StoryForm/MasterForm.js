import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { message } from "antd";
import Collection from "../../Data/Collection";

import Story_1 from "./Story_1";
import Story_2 from "./Story_2";
import Story_3 from "./Story_3";
import Music_1 from "./Music_1";
import Music_2 from "./Music_2";
import Music_3 from "./Music_3";
import Music_4 from "./Music_4";

import notepad from "../../Images/note.svg";
import music from "../../Images/music.svg";

import { apiStories, apiTracks } from "../../services/utilities/API";

const key = "updatable";

export default function MasterForm(props) {
  const [submission, setSubmission] = useState(0);
  const { handleSubmit } = useForm({});

  const [level, setLevel] = useState(0);

  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  const [title, setTitle] = useState(null);
  const [email, setEmail] = useState(null);
  const [story, setStory] = useState(null);
  const [tags, setTags] = useState(Collection);
  const [prompt, setPrompt] = useState(null);
  const [choice, setChoice] = useState(0);

  const [storyID, setStoryID] = useState(null);
  const [song_title, setSongTitle] = useState(null);
  const [song_link, setSongLink] = useState(null);
  const [song_lyrics, setSongLyrics] = useState(null);
  const [song_tags, setSongTags] = useState(Collection);
  const [artist_name, setArtistName] = useState(null);
  const [artist_email, setArtistEmail] = useState(null);
  const [track_desc, setTrackDesc] = useState(null);
  const [social_handle, setSocialHandle] = useState(null);

  const formSubmitMessage = (status, type) => {
    if (status === true) {
      message.loading({ content: "Processing...", key });
      setTimeout(() => {
        message.success({
          content: `${type} submitted successfully!`,
          key,
          duration: 2,
        });
        setSubmission(submission + 1);
        props.setShowSubmission(true);
        //props.closeModal();
      }, 2000);
    } else if (status === false) {
      message.loading({ content: "Processing...", key });
      setTimeout(() => {
        message.error({
          content: "Oops! An error occured! Please try again!",
          key,
          duration: 2,
        });
      }, 2000);
    } else {
      message.loading({ content: "Processing...", key });
      setTimeout(() => {
        message.warning({
          content:
            "Oops! Looks like you haven't filled out the form entirely! Please fill in all required fields!",
          key,
          duration: 2,
        });
      }, 2000);
    }
  };

  const handleOk = () => {
    if (choice === 1) {
      if (prompt && title && email && story && tags) {
        const selected_tags = tags
          .filter((tag) => {
            if (tag.click) {
              return tag;
            }
          })
          .map((tag) => {
            return tag.name;
          });
        apiStories
          .post({
            name: name ? name : "Anon",
            story: story,
            prompt: prompt,
            tags: selected_tags,
            title: title,
            email: email,
            location: location ? location : "Undisclosed",
          })
          .then((res) => {
            formSubmitMessage(true, "Story");
          })
          .catch((err) => {
            formSubmitMessage(false, "Story");
          });
      } else {
        formSubmitMessage(undefined, "Story");
      }
    } else if (choice === 2) {
      if (storyID && song_title && song_tags && artist_name && artist_email) {
        const selected_tags = song_tags
          .filter((tag) => {
            if (tag.click) {
              return tag;
            }
          })
          .map((tag) => {
            return tag.name;
          });
        apiTracks
          .post({
            story: storyID,
            name: song_title,
            artist: artist_name,
            description: track_desc,
            youtube_link: song_link,
            tags: selected_tags,
            email: artist_email,
            lyrics: song_lyrics,
            social_handle: social_handle,
          })
          .then((res) => {
            formSubmitMessage(true, "Track");
          })
          .catch((err) => {
            formSubmitMessage(false, "Track");
          });
      } else {
        formSubmitMessage(undefined, "Track");
      }
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(handleOk)}>
        {level === 0 ? (
          <div className="mainForm">
            <p id="question">Q1</p>
            <p id="header">What would you like to contribute?</p>
            <div id="options">
              <div
                id="Story"
                onClick={() => {
                  setLevel(level + 1);
                  setChoice(1);
                }}
              >
                <img src={notepad} />
                story
              </div>
              <div
                id="Music"
                onClick={() => {
                  setLevel(level + 1);
                  setChoice(2);
                }}
              >
                <img src={music} />
                Music
              </div>
            </div>
          </div>
        ) : null}
        {level === 1 && choice === 2 ? (
          <Music_1 setStoryID={setStoryID} />
        ) : null}
        {level === 1 && choice === 1 ? (
          <Story_1
            title={title}
            story={story}
            setTitle={setTitle}
            setStory={setStory}
            prompt={prompt}
            setPrompt={setPrompt}
          />
        ) : null}
        {level === 2 && choice === 2 ? (
          <Music_2
            song_title={song_title}
            setSongTitle={setSongTitle}
            song_link={song_link}
            setSongLink={setSongLink}
            song_lyrics={song_lyrics}
            setSongLyrics={setSongLyrics}
          />
        ) : null}
        {level === 2 && choice === 1 ? (
          <Story_2 tags={tags} setTags={setTags} />
        ) : null}
        {level === 3 && choice === 2 ? (
          <Music_3 song_tags={song_tags} setSongTags={setSongTags} />
        ) : null}
        {level === 3 && choice === 1 ? (
          <Story_3
            name={name}
            setName={setName}
            location={location}
            setLocation={setLocation}
            email={email}
            setEmail={setEmail}
          />
        ) : null}
        {level === 4 && choice === 2 ? (
          <Music_4
            artist_name={artist_name}
            setArtistName={setArtistName}
            artist_email={artist_email}
            setArtistEmail={setArtistEmail}
            track_desc={track_desc}
            setTrackDesc={setTrackDesc}
            social_handle={social_handle}
            setSocialHandle={setSocialHandle}
          />
        ) : null}
      </form>
      <div id="nav-button">
        <div id="b">
          {level !== 0 ? (
            <a onClick={() => setLevel(level - 1)}>
              <span className="top"></span>
            </a>
          ) : null}
        </div>
        <div id="b">
          {level !== 0 &&
          ((level !== 3 && choice === 1) || (level !== 4 && choice === 2)) ? (
            <a onClick={() => setLevel(level + 1)}>
              <span className="bottom"></span>
            </a>
          ) : level !== 0 ? (
            <button onClick={handleOk}>SUBMIT</button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
