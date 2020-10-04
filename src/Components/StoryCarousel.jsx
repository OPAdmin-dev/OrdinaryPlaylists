import React from "react";
import { useEffect } from "react";
import { apiStories } from "../services/utilities/API";
import { useState } from "react";

export default function StoryCarousel() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    apiStories.getAll().then((res) => {
      setStories(res.data);
    });
  }, []);

  return (
    <div className="MainCarousel">
      <div style={{ alignSelf: "flex-end", paddingRight: "1vw" }}>
        <div className="leftCon">
          <div className="round">
            <div id="cta">
              <span className="arrow primary next "></span>
              <span className="arrow secondary next "></span>
            </div>
          </div>
        </div>

        <div id="LBlock" />
      </div>
      <div id="card">
        <p id="serial">
          #1 <i className="fas fa-info-circle"></i>
        </p>
        <p id="title">A dollar that costs 53 years of wedded bliss</p>
        <p id="author">by Gilbert Zhuo</p>
        <p id="story">
          Good afternoon, and thank you for joining us on today's conference
          call.
        </p>
        <div>
          <button>
            <i className="fa fa-share-alt" aria-hidden="true"></i> SHARE
          </button>

          <p id="disclaimer">*copied to clipboard</p>
        </div>
      </div>
      <div style={{ alignSelf: "flex-end", paddingLeft: "1vw" }}>
        <div className="rightCon">
          <div className="round">
            <div id="cta">
              <span className="arrow primary next "></span>
              <span className="arrow secondary next "></span>
            </div>
          </div>
        </div>

        <div id="RBlock" />
      </div>
    </div>
  );
}
