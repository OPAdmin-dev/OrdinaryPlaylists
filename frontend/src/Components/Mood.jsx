import React from "react";
import collection from "../Data/Collection";

export default function Mood() {
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  return (
    <div id="Mood">
      <h1>Browse By #Mood</h1>
      {/* <div id="collection">
        {chunk(collection, 6).map((category, index) => (
          <div key={index} id="moodCollection">
            {category.map((mood) => (
              <div
                className="mood"
                style={{
                  color: mood.click == false ? mood.color : "white",
                  background: mood.click == false ? "" : mood.color,
                }}
                key={mood.name}
              >
                {mood.name}
              </div>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
}
