import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input } from 'antd';

export default function Story_3(props) {

    const { errors, control } = useForm({});

    const handleNameChange = (e) => {
        props.setName(e.target.value);
    }

    const handleTitleChange = (e) => {
        props.setTitle(e.target.value);
    }

    return (
        <div className="Story_3">
            <p id="question">Q4</p>
            <p id="header">Conclude your story</p>
            <Controller 
                name="pen"
                defaultValue=''
                control={control}
                rules={{ required: "This field is required" }}
                as={
                    <Form.Item
                        name="pen"
                        validateStatus={errors.pen && "error"}
                        help={errors.pen && errors.pen.message}
                    >
                        <Input defaultValue={props.pen} placeholder="Pen name" name="pen" onChange={(pen) => handleTitleChange(pen)}/>
                    </Form.Item>
                }   
            />  
            <Controller 
                name="location"
                defaultValue=''
                control={control}
                rules={{ required: "This field is required" }}
                as={
                    <Form.Item
                        name="location"
                        validateStatus={errors.location && "error"}
                        help={errors.location && errors.location.message}
                    >
                        <Input defaultValue={props.location} placeholder="Time or location" name="location" onChange={(location) => handleTitleChange(location)}/>
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
                        name="email"
                        validateStatus={errors.email && "error"}
                        help={errors.email && errors.email.message}
                    >
                        <Input defaultValue={props.email} placeholder="Your email, for verification purposes*" name="email" onChange={(email) => handleTitleChange(email)}/>
                    </Form.Item>
                }   
            />  
            <p>All stories submitted will be subjected to our curation. Should you have any doubt or question, kindly visit our FAQ section or contact us at <span style={{color: "#8A80D3"}}>ordinaryplaylists@gmail.com</span>.</p>
            
        </div>
    )
}