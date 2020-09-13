import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { message } from 'antd';

import Story_1 from './Story_1';
import Story_2 from './Story_2';
import Story_3 from './Story_3';
import Collection from '../../Data/Collection';

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
                {level == 0 ? <Story_1
                    title={title}
                    story={story}
                    setTitle={setTitle}
                    setStory={setStory}
                /> : null}
                {level == 1 ? <Story_2
                    tags={tags}
                    setTags={setTags}
                /> : null} 
                {level == 2 ? <Story_3 
                    name={name}
                    setName={setName}
                    location={location}
                    setLocation={setLocation}
                    email={email}
                    setEmail={setEmail}
                /> : null}
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

