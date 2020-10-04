import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import Card from "../../Images/Card.png";

import { apiStories } from "../../services/utilities/API";

export default function Music_1(props) {
  const [stories, setStories] = useState();

  useEffect(() => {
    apiStories.getAll().then((res) => {
      setStories(
        res.data.map((story) => {
          return { value: `Story ID: ${story.id}` };
        })
      );
    });
  }, []);

  const onSelect = (data) => {
    var slug = data.substring(data.indexOf(":") + 1);
    slug = parseInt(slug.trim());
    props.setStoryID(slug);
  };

  return (
    <div className="Music_1">
      <p id="question">Q2</p>
      <p id="header">Which story is this song inspired by? </p>
      <AutoComplete
        style={{
          width: 500,
        }}
        options={stories}
        placeholder="Search for story by title..."
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onSelect={onSelect}
      />
      <div id="info">
        <img
          src={Card}
          height="252.79px"
          width="152.85px"
          style={{ paddingRight: "10px" }}
        />
        <span>
          <p>
            Serial code can be found on the top left hand corner of each story.{" "}
            <br />
            Forgot yours?
          </p>{" "}
          <a href="#">Go to My Bookmarks.</a>
        </span>
      </div>
    </div>
  );
}
