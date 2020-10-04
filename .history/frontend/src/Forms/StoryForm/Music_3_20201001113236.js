import React from 'react';


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
    
    return (
        <div className = "Music_3">
            <p id="question">Q4</p>
            <p id="header">Set the #mood of your song*</p>
            {chunk(props.song_tags, 6).map((category, index) => (
        <div key={index} id="moodCollection">
          {category.map((mood) => (
            <div
              className="mood"
              style={{color: (mood.click===false)?mood.color:"white",
              background: (mood.click===false)?"":mood.color}}
              onClick={() => props.setSongTags(toggleClick(mood.name))}
              key={mood.name}
            >
              {mood.name}
            </div>
            <span style={{padding: "5px"}}></span>
          ))}
        </div>
      ))}
           
           
        </div>
    )
}