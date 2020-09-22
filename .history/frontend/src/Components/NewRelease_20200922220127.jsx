import React from "react";

export default function NewRelease() {
  const music = [
    {
      image:
        "http://tana.themeton.com/music/wp-content/uploads/sites/4/2016/09/music-album-06.jpg",
      title: "We don’t talk anymore",
      description: "Reminiscence of what used to be our daily conversations",
      clicked: false,
    },
    {
      image:
        "http://tana.themeton.com/music/wp-content/uploads/sites/4/2016/09/music-album-06.jpg",
      title: "We don’t talk anymore",
      description: "Reminiscence of what used to be our daily conversations",
      clicked: false,
    },
    {
      image:
        "http://tana.themeton.com/music/wp-content/uploads/sites/4/2016/09/music-album-06.jpg",
      title: "We don’t talk anymore",
      description: "Reminiscence of what used to be our daily conversations",
      clicked: false,
    },
    {
      image:
        "http://tana.themeton.com/music/wp-content/uploads/sites/4/2016/09/music-album-06.jpg",
      title: "We don’t talk anymore",
      description: "Reminiscence of what used to be our daily conversations",
      clicked: false,
    },
    {
      image:
        "http://tana.themeton.com/music/wp-content/uploads/sites/4/2016/09/music-album-06.jpg",
      title: "We don’t talk anymore",
      description: "Reminiscence of what used to be our daily conversations",
      clicked: false,
    },
    {
      image:
        "http://tana.themeton.com/music/wp-content/uploads/sites/4/2016/09/music-album-06.jpg",
      title: "We don’t talk anymore",
      description: "Reminiscence of what used to be our daily conversations",
      clicked: false,
    },
  ];
  return (
    <div id="carousel">
      <h1>New Releases</h1>
      <div className="playlist">
        {music.map((m, index) => (
          <div>
            <div className="item" key={index}>
              <img src={m.image} />
              <p id="type">PLAYLIST</p>
              <p id="title">{m.title}</p>
              <p id="description">{m.description}</p>
            </div>
            <div style={{ padding: 10 }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
