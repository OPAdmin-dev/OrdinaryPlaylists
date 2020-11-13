import React, { useEffect, useState } from "react";
import { apiSpotify } from "../services/utilities/API";
import $ from "jquery";

export default function Playlist(props) {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiSpotify.getAll().then((res) => {
      setPlaylists(res.data);
      setLoading(false);
    });
  }, []);
  var instance = $(".hs__wrapper");
  $.each(instance, function (key, value) {
    var arrows = $(instance[key]).find(".arrow"),
      prevArrow = arrows.filter(".arrow-prev"),
      nextArrow = arrows.filter(".arrow-next"),
      box = $(instance[key]).find(".hs"),
      x = 0,
      mx = 0,
      maxScrollWidth =
        box[0].scrollWidth - box[0].clientWidth / 2 - box.width() / 2;

    $(arrows).on("click", function () {
      if ($(this).hasClass("arrow-next")) {
        x = box.width() / 2 + box.scrollLeft() - 10;
        box.animate({
          scrollLeft: x,
        });
      } else {
        x = box.width() / 2 - box.scrollLeft() - 10;
        box.animate({
          scrollLeft: -x,
        });
      }
    });

    $(box).on({
      mousemove: function (e) {
        var mx2 = e.pageX - this.offsetLeft;
        if (mx) this.scrollLeft = this.sx + mx - mx2;
      },
      mousedown: function (e) {
        this.sx = this.scrollLeft;
        mx = e.pageX - this.offsetLeft;
      },
      scroll: function () {
        toggleArrows();
      },
    });

    $(document).on("mouseup", function () {
      mx = 0;
    });

    function toggleArrows() {
      if (box.scrollLeft() > maxScrollWidth - 10) {
        // disable next button when right end has reached
        nextArrow.addClass("disabled");
      } else if (box.scrollLeft() < 10) {
        // disable prev button when left end has reached
        prevArrow.addClass("disabled");
      } else {
        // both are enabled
        nextArrow.removeClass("disabled");
        prevArrow.removeClass("disabled");
      }
    }
  });

  return (
    <div className="carousel">
      <div className="hs__wrapper">
        <div className="hs__header">
          <h2 className="hs__headline">Concept Playlists</h2>
          <div className="hs__arrows">
            <a class="arrow disabled arrow-prev"></a>
            <a class="arrow arrow-next"></a>
          </div>
        </div>
        <ul className="hs">
          {loading ? (
            <span class="loadingSpinner" />
          ) : (
            playlists.map((p, index) =>
              p.name !== "New Releases" && p.name !== "Season Feature" ? (
                <div>
                  <div className="item" key={index}>
                    <a onClick={() => props.selectPlaylist(p)}>
                      <img src={p.cover} />
                    </a>
                    <p id="type">PLAYLIST</p>
                    <p id="title">{p.name}</p>
                    <p id="description">
                      {p.description ? p.description : "Playlist Description"}
                    </p>
                  </div>
                  <div style={{ padding: "10px" }}></div>
                </div>
              ) : null
            )
          )}
        </ul>
      </div>
    </div>
  );
}
