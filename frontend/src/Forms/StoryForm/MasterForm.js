import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { message } from 'antd';

import Story_1 from './Story_1';
import Story_2 from './Story_2';
import Story_3 from './Story_3';
import Collection from '../../Data/Collection';

import { Button, Form, Input } from 'antd';
import Story_1 from './Story_1';
import Story_2 from './Story_2';
import Story_3 from './Story_3';
import Music_1 from './Music_1';
import Music_2 from './Music_2';
import Music_3 from './Music_3';
import Music_4 from './Music_4';
import notepad from "../../Images/note.svg"
import music from "../../Images/music.svg"


import { apiStories } from '../../services/utilities/API';

const key = 'updatable';

export default function MasterForm() {

    const { handleSubmit }  = useForm({});

    const [level, setLevel] = useState(0);
  
    const [name, setName]   = useState(null);
    const [location, setLocation]= useState(null);
    const [title, setTitle] = useState(null);
    const [email, setEmail] = useState(null);
    const [story, setStory] = useState(null);
    const [tags, setTags] = useState(Collection);
    const [choice, setChoice] = useState(0);

    const storyFormSubmitMessage = (status) => {
        if(status == true){
            message.loading({ content: 'Processing...', key });
            setTimeout(() => {
                message.success({ content: 'Story created successfully!', key, duration: 2 });
            }, 1000);
        } else if(status == false) {
            message.loading({ content: 'Processing...', key });
            setTimeout(() => {
                message.error({ content: 'Oops! An error occured! Please try again!', key, duration: 2 });
            }, 1000);
        } else {
            message.loading({ content: 'Processing...', key });
            setTimeout(() => {
                message.warning({ content: 'Oops! Looks like you haven\'t filled out the form entirely! Please fill in all required fields!', key, duration: 2 });
            }, 1000);
        }
    };

    const handleOk = () => {
        if(name && location && title && email && story && tags) {
            const selected_tags = tags.filter(tag => {
                if(tag.click) {
                    return tag;
                }
            }).map(tag => {
                return tag.name;
            })
            apiStories.post({
                name: (name.length > 0) ? name : "Anonymous",
                story: story,
                tags: selected_tags,
                title: title,
                email: email,
                location: location,
            }).then(res => {
                console.log(res);
                storyFormSubmitMessage(true);
            }).catch(err => {
                console.log(err);
                storyFormSubmitMessage(false);
            })
        } else {
            storyFormSubmitMessage(undefined);
        }
    };

    return (
        <div className="form">
                <form onSubmit={handleSubmit(handleOk)}>
               { (level == 0)?
                (<div className="mainForm">
                
                    <p id="question">Q1</p>
                    <p id="header">What would you like to contribute?</p>
                    <div id="options">

                    <div id="Story" onClick={() => {
                        setLevel(level + 1)
                        setChoice(1)}
                    }>
                    <img src={notepad}/>story 
                    </div>
                    <div id="Music" onClick={() => {
                        setLevel(level+1)
                        setChoice(2)}}>
                    <img src={music}/>Music
                    </div>
                </div>
                </div>):null
               }
               {(level == 1  && choice == 2)? <Music_1/>:null}

                {(level == 1 && choice == 1)? <Story_1
                    name={name}
                    title={title}
                    story={story}
                    setTitle={setTitle}
                    setStory={setStory}
                /> : null}
                {(level == 2  && choice == 2)? <Music_2/>:null}
                {(level == 2  && choice == 1) ? <Story_2
                    email={email}
                    setEmail={setEmail}
                    setStory={setStory}
                /> : null} 
                {(level == 3 && choice == 2) ? <Music_3/> : null}
                {(level == 3  && choice == 1)? <Story_3/> : null}
                {(level == 4 && choice == 2)? <Music_4/> : null}
            </form>
            <div id="nav-button">
                <div id="b">
                    {level != 0 ?
                    <a onClick={() => setLevel(level - 1)}>
                    <span className="bottom"></span>
                    </a>
                     :null}
                </div>
                <div id="b">
                    {(level !=0 && ((level != 3 && choice == 1)
                    || (level != 4 && choice == 2)))? 
                    <a onClick={() => setLevel(level + 1)}>
                    <span className="top"></span>
                    </a>
                    :(level !=0)?<button>SUBMIT</button>:null}
                </div>
            </div>
        </div>
    )
}

