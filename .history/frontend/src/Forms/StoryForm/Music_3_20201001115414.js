import React from "react";

export default function Music_3(props) {
  //const [list, setList] = React.useState(collection);
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const toggleClick = (name) => {
    let updatedList = props.song_tags.map((i) =>
      i.name === name ? { ...i, click: !i.click } : i
    );
    let count = updatedList.reduce((a, c) => (c.click ? a + 1 : a), 0);
    return count <= 5 ? updatedList : props.song_tags;
  };
  const size = useWindowSize();
  var Console = undefined;
  if (size.width < 768) {
    Console = Mobile;
  } else {
    Console = Desktop;
  }


  return (
    <div className="Music_3">
      <p id="question">Q4</p>
      <p id="header">Set the #mood of your song*</p>
      {chunk(props.song_tags, {(Desktop)?6:3}).map((category, index) => (
        <div key={index} id="moodCollection">
          {category.map((mood) => (
            <div>
              <div
                className="mood"
                style={{
                  color: mood.click === false ? mood.color : "white",
                  background: mood.click === false ? "" : mood.color,
                }}
                onClick={() => props.setSongTags(toggleClick(mood.name))}
                key={mood.name}
              >
                {mood.name}
              </div>
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
