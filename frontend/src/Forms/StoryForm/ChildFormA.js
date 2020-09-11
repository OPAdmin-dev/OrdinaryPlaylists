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
        <div>
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
                        style={{
                            width: 500,
                            margin: 'auto'
                        }}
                    >
                        <Input defaultValue={props.name} placeholder="Please enter your name (or leave blank to post anonymously)" name="name" onChange={(name) => handleNameChange(name)}/>
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
                            width: 500,
                            margin: 'auto',
                            paddingLeft: 10,
                        }}
                    >
                        <Input defaultValue={props.title} placeholder="Give your story a title!" name="title" onChange={(title) => handleTitleChange(title)}/>
                    </Form.Item>
                }   
            />   
        </div>
    )
}