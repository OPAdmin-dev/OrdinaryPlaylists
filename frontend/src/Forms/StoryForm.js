import React from 'react';
import { Button, Form, Input, message} from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { apiStories } from '../services/utilities/API';

const key = 'updatable';

export default function StoryForm(props) {

    const { handleSubmit, errors, control } = useForm({});

    const storyFormSubmitMessage = (status) => {
        if(status){
            message.loading({ content: 'Processing...', key });
            props.updateLoading(!props.loading);
            setTimeout(() => {
                message.success({ content: 'Story created successfully!', key, duration: 2 });
                props.updateLoading(props.loading);
                props.closeModal(!props.add)
            }, 1000);
        } else {
            message.loading({ content: 'Processing...', key });
            setTimeout(() => {
                message.error({ content: 'Oops! An error occured! Please try again!', key, duration: 2 });
            }, 1000);
        }
        
    };

    const handleOk = (data) => {
        if(data.title) {
            apiStories.post({
                name: (data.name.length > 0) ? data.name : "Anonymous",
                story: data.story,
                title: data.title,
                email: data.email,
            }).then(res => {
                console.log(res);
                storyFormSubmitMessage(true);
            }).catch(err => {
                console.log(err);
                storyFormSubmitMessage(false);
            })
        }
    };

    const { TextArea } = Input;

    return (
        <form
            onSubmit={handleSubmit(handleOk)}>
            <Controller
                name="name"
                defaultValue=''
                control={control}
                as={
                    <Form.Item
                        label="Name"
                        name="name"
                        validateStatus={errors.name && "error"}
                        help={errors.name && errors.name.message}
                    >
                        <Input placeholder="Please enter your name (or leave blank to post anonymously)" name="name" />
                    </Form.Item>
                }   
            />
            <Controller
                name="title"
                defaultValue=''
                control={control}
                rules={{ required: "This field is required" }}
                as={
                    <Form.Item
                        label="Title"
                        name="title"
                        validateStatus={errors.title && "error"}
                        help={errors.title && errors.title.message}
                        style={{
                            position: 'relative',
                            marginLeft: 10
                        }}
                    >
                        <Input placeholder="Give your story a title!" name="title"/>
                    </Form.Item>
                }   
            />
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
                            position: 'relative',
                            marginLeft: 1
                        }}
                    >
                        <Input placeholder="Drop your email here so we may contact you!" name="email"/>
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
                                position: 'relative',
                                marginLeft: 2
                            }}
                            >
                            <TextArea placeholder="Write your story here!" label="Story" rows={8} name="story"></TextArea>
                        </Form.Item>
                    </div>
                }  
            />   
            <Button 
                type="primary" 
                htmlType="submit" 
                onClick={handleOk} 
                loading={props.loading}
                style={{ 
                    position: 'relative',
                    left: 215
                }}>Submit
            </Button>
        </form>    
    )
}