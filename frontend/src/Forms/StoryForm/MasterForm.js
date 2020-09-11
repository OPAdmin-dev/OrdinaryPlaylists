import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Form, Input } from 'antd';

import ChildFormA from './ChildFormA';
import ChildFormB from './ChildFormB';


export default function MasterForm() {

    const { handleSubmit }  = useForm({});

    const [level, setLevel] = useState(0);

    const [name, setName]   = useState();
    const [title, setTitle] = useState();
    const [email, setEmail] = useState();
    const [story, setStory] = useState();

    const handleOk = () => {

        // Use need to post data to API from here and we gucci

        console.log(name);
        console.log(title);
        console.log(email);
        console.log(story);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleOk)}>
                {level == 0 ? <ChildFormA 
                    name={name}
                    title={title}
                    setName={setName}
                    setTitle={setTitle}
                /> : null}
                {level == 1 ? <ChildFormB 
                    email={email}
                    story={story}
                    setEmail={setEmail}
                    setStory={setStory}
                /> : null} 
                {level == 1 ? <Button 
                    type="primary" 
                    htmlType="submit" 
                    onClick={handleOk}>Submit
                </Button> : null}
            </form>
            {level != 1 ? <Button type="primary" onClick={() => setLevel(level + 1)}>Next</Button> : null}
            <Button type="primary" onClick={() => setLevel(level - 1)}>Previous</Button>   
            <p>Level: {level}</p>
        </div>
    )
}

