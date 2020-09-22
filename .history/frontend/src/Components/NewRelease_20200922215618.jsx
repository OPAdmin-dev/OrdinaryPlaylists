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
  ];
  return (
    <div id="carousel">
      <h1>New Releases</h1>
      <div className="playlist">
        <div className="item">
          <img src="http://tana.themeton.com/music/wp-content/uploads/sites/4/2016/09/music-album-06.jpg" />
          <p id="type">PLAYLIST</p>
          <p id="title">We don’t talk anymore</p>
          <p id="description">
            Reminiscence of what used to be our sdasdas asdasd saasd
            Reminiscence of what used to be our Reminiscence of what used to be
            our
          </p>
        </div>
        {music.map((index) => (
          <div className="item">
            <img src="http://tana.themeton.com/music/wp-content/uploads/sites/4/2016/09/music-album-06.jpg" />
            <p id="type">PLAYLIST</p>
            <p id="title">We don’t talk anymore</p>
            <p id="description">
              Reminiscence of what used to be our sdasdas asdasd saasd
              Reminiscence of what used to be our Reminiscence of what used to
              be our
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
