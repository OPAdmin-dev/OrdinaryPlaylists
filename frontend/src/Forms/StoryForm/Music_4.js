import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input } from 'antd';

export default function Music_4(props) {

    const { errors, control } = useForm({});

    const handleNameChange = (e) => {
        props.setName(e.target.value);
    }

    const handleTitleChange = (e) => {
        props.setTitle(e.target.value);
    }

    return (
        <div className="Music_4">
            <p id="question">Q5</p>
            <p id="header">Credit your song</p>
            <Controller 
                name="stageName"
                defaultValue=''
                control={control}
                rules={{ required: "This field is required" }}
                as={
                    <Form.Item
                        name="stageName"
                        validateStatus={errors.stageName && "error"}
                        help={errors.songTitle && errors.stageName.message}
                    >
                        <Input defaultValue={props.stageName} placeholder="Your stage name*" name="stageName" onChange={(stageName) => handleTitleChange(stageName)}/>
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
            <Controller 
                name="instagram"
                defaultValue=''
                control={control}
                rules={{ required: "This field is required" }}
                as={
                    <Form.Item
                        name="instagram"
                        validateStatus={errors.instagram && "error"}
                        help={errors.instagram && errors.instagram.message}
                    >
                        <Input defaultValue={props.instagram} placeholder="Your Instagram handle" name="instagram" onChange={(instagram) => handleTitleChange(instagram)}/>
                    </Form.Item>
                }   
            />  
            <Controller
                name="notes"
                defaultValue=''
                control={control}
                as={
                    <Form.Item
                        name="notes"
                        validateStatus={errors.notes && "error"}
                        help={errors.notes && errors.notes.message}
                    >
                    <Input.TextArea defaultValue={props.notes} placeholder="Any additional note to your listeners" name="notes" onChange={(notes) => handleNameChange(notes)}/>
                    </Form.Item>
                }   
            />
            
            
        </div>
    )
}