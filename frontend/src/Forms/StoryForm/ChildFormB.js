import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input } from 'antd';

const { TextArea } = Input;

export default function ChildFormB(props) {

    const { errors, control } = useForm({});

    const handleEmailChange = (e) => {
        props.setEmail(e.target.value);
    }

    const handleStoryChange = (e) => {
        props.setStory(e.target.value);
    }

    return (
        <div>
            <Controller
                name="email"
                defaultValue=''
                control={control}
                rules={{ required: "This field is required" }}
                as={
                    <Form.Item
                        label="Email"
                        name="email"
                        validateStatus={errors.email && "error"}
                        help={errors.email && errors.email.message}
                        style={{
                            width: 500,
                            margin: 'auto'
                        }}
                    >
                        <Input defaultValue={props.email} placeholder="Drop your email here so we may contact you!" name="email" onChange={(email) => handleEmailChange(email)}/>
                    </Form.Item>
                }   
            />
            <Controller
                name="story"
                defaultValue=''
                control={control}
                rules={{ required: "This field is required" }}
                as={
                    <div>
                        <Form.Item
                            label="Story"
                            name="story"
                            validateStatus={errors.story && "error"}
                            help={errors.story && errors.story.message}
                            style={{
                                width: 500,
                                margin: 'auto'
                            }}
                            >
                            <TextArea defaultValue={props.story} placeholder="Write your story here!" label="Story" rows={8} name="story" onChange={(story) => handleStoryChange(story)}></TextArea>
                        </Form.Item>
                    </div>
                }  
            />      
        </div>
    )
}