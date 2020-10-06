import React, { useState, useEffect } from "react";

export default function Story_2(props) {
  //const [list, setList] = React.useState(collection);
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const toggleClick = (name) => {
    let updatedList = props.tags.map((i) =>
      i.name === name ? { ...i, click: !i.click } : i
    );
    let count = updatedList.reduce((a, c) => (c.click ? a + 1 : a), 0);
    return count <= 5 ? updatedList : props.tags;
  };
  const size = useWindowSize();
  var num = 6;
  if (size.width < 770) {
    num = 3;
  }

  return (
    <div className="Story_2">
      <p id="question">Q3</p>
      <p id="header">Set the #mood of your story*</p>
      {chunk(props.tags, num).map((category, index) => (
        <div key={index} id="moodCollection">
          {category.map((mood) => (
            <div
              className="mood"
              style={{
                color: mood.click === false ? mood.color : "white",
                background: mood.click === false ? "" : mood.color,
              }}
              onClick={() => props.setTags(toggleClick(mood.name))}
              key={mood.name}
            >
              {mood.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
