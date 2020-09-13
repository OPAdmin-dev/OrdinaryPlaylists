import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Form, Input } from 'antd';

import Story_1 from './Story_1';
import Story_2 from './Story_2';
import Story_3 from './Story_3';


export default function MasterForm() {

    const { handleSubmit }  = useForm({});

    const [level, setLevel] = useState(0);

    const [name, setName]   = useState();
    const [title, setTitle] = useState();
    const [email, setEmail] = useState();
    const [story, setStory] = useState();

    const handleOk = () => {
        console.log(name);
        console.log(title);
        console.log(email);
        console.log(story);
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit(handleOk)}>
                {level == 0 ? <Story_1
                    name={name}
                    title={title}
                    setName={setName}
                    setTitle={setTitle}
                /> : null}
                {level == 1 ? <Story_2
                    email={email}
                    story={story}
                    setEmail={setEmail}
                    setStory={setStory}
                /> : null} 
               
                {level == 2 ? <Story_3/> : null}
                {level == 2 ? <button>SUBMIT</button>: null}
              
            </form>
            <div id="nav-button">
                <div id="b">
                    <a onClick={() => setLevel(level - 1)}>
                    <span className="bottom"></span>
                    </a>
                </div>
                <div id="b">
                    {level != 2 ? 
                    <a onClick={() => setLevel(level + 1)}>
                    <span className="top"></span>
                    </a>
                    :null}
                </div>
            </div>
        </div>
    )
}

