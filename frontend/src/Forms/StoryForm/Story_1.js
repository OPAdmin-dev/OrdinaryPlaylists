import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input } from 'antd';

export default function ChildFormA(props) {

    const { errors, control } = useForm({});

    const handleNameChange = (e) => {
        props.setName(e.target.value);
    }

    const handleTitleChange = (e) => {
        props.setTitle(e.target.value);
    }

    return (
        <div className="Story_1">
            <p id="question">Q2</p>
            <p id="header">Tell us your story in 100 words or less</p>
            <Controller 
                name="title"
                defaultValue=''
                control={control}
                rules={{ required: "This field is required" }}
                as={
                    <Form.Item
                        name="title"
                        validateStatus={errors.title && "error"}
                        help={errors.title && errors.title.message}
                    >
                        <Input defaultValue={props.title} placeholder="If you had to name this chapter in your life..." name="title" onChange={(title) => handleTitleChange(title)}/>
                    </Form.Item>
                }   
            />  
            <Controller
                name="description"
                defaultValue=''
                control={control}
                as={
                    <Form.Item
                        name="description"
                        validateStatus={errors.name && "error"}
                        help={errors.name && errors.name.message}
                    >
                    <Input.TextArea defaultValue={props.name} placeholder="Tell us anything — on depression, on losing family members, on eating disorders, on love found and love lost. We are all ears." name="description" onChange={(description) => handleNameChange(description)}/>
                    </Form.Item>
                }   
            />
            
            
        </div>
    )
}