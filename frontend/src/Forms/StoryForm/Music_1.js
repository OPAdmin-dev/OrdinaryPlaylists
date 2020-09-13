import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input } from 'antd';
import Card from '../../Images/Card.png'
export default function Music_1(props) {

    const { errors, control } = useForm({});

    const handleNameChange = (e) => {
        props.setName(e.target.value);
    }

    const handleTitleChange = (e) => {
        props.setTitle(e.target.value);
    }

    return (
        <div className="Music_1">
            <p id="question">Q2</p>
            <p id="header">Which story is this song inspired by? </p>
            <Controller 
                name="serial"
                defaultValue=''
                control={control}
                rules={{ required: "This field is required" }}
                as={
                    <Form.Item
                        name="serial"
                        validateStatus={errors.serial && "error"}
                        help={errors.serial && errors.serial.message}
                    >
                        <Input defaultValue={props.serial} placeholder="Enter serial code or hyperlink of the story" name="serial" onChange={(serial) => handleTitleChange(serial)}/>
                    </Form.Item>
                }   
            />  
            <div id="info">
            <img src={Card} 
            height="252.79px"
            width="152.85px"
            style={{paddingRight:"10px"}}
            />
            <span>
            <p>Serial code can be found on the top left hand corner of each story. <br/>Forgot yours?</p> <a href="#">Go to My Bookmarks.</a>
            </span>
            </div>
            
            
        </div>
    )
}