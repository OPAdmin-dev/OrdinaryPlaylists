import React from 'react';
import collection from '../../Data/Collection'


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
    
    return (
        <div className = "Story_2">
            <p id="question">Q3</p>
            <p id="header">Set the #mood of your story*</p>
            {chunk(props.tags, 6).map((category, index) => (
        <div key={index} id="moodCollection">
          {category.map((mood) => (
            <div
              className="mood"
              style={{color: (mood.click==false)?mood.color:"white",
              background: (mood.click==false)?"":mood.color}}
              onClick={() => props.setTags(toggleClick(mood.name))}
              key={mood.name}
            >
              {mood.name}
            </div>
          ))}
        </div>
      ))}
      </div>
    )
}