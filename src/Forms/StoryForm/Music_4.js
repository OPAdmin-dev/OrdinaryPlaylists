import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input } from 'antd';

export default function Music_4(props) {

    const { errors, control } = useForm({});

    const handleArtistNameChange = (e) => {
        props.setArtistName(e.target.value);
    }

    const handleArtistEmailChange = (e) => {
        props.setArtistEmail(e.target.value);
    }

    const handleSocialHandleChange = (e) => {
        props.setSocialHandle(e.target.value);
    }

    const handleTrackDescChange = (e) => {
        props.setTrackDesc(e.target.value);
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
                        <Input defaultValue={props.artist_name} placeholder="Your stage name*" name="stageName" onChange={(stageName) => handleArtistNameChange(stageName)}/>
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
                        <Input defaultValue={props.artist_email} placeholder="Your email, for verification purposes*" name="email" onChange={(email) => handleArtistEmailChange(email)}/>
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
                        <Input defaultValue={props.social_handle} placeholder="Your Instagram handle" name="instagram" onChange={(instagram) => handleSocialHandleChange(instagram)}/>
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
                        <Input.TextArea defaultValue={props.track_desc} placeholder="Any additional note to your listeners" name="notes" onChange={(notes) => handleTrackDescChange(notes)}/>
                    </Form.Item>
                }   
            />
            
            
        </div>
    )
}