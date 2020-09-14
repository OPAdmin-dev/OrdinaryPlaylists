import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input } from 'antd';

export default function Music_2(props) {

    const { errors, control } = useForm({});

    const handleTitleChange = (e) => {
        props.setSongTitle(e.target.value);
    }

    const handleLinkChange = (e) => {
        props.setSongLink(e.target.value);
    }

    const handleLyricsChange = (e) => {
        props.setSongLyrics(e.target.value);
    }

    return (
        <div className="Music_2">
            <p id="question">Q3</p>
            <p id="header">Tell us about your song.</p>
            <Controller 
                name="songTitle"
                defaultValue=''
                control={control}
                rules={{ required: "This field is required" }}
                as={
                    <Form.Item
                        name="songTitle"
                        validateStatus={errors.songTitle && "error"}
                        help={errors.songTitle && errors.songTitle.message}
                    >
                        <Input defaultValue={props.song_title} placeholder="Song title*" name="songTitle" onChange={(songTitle) => handleTitleChange(songTitle)}/>
                    </Form.Item>
                }   
            />  
            <Controller 
                name="link"
                defaultValue=''
                control={control}
                rules={{ required: "This field is required" }}
                as={
                    <Form.Item
                        name="v"
                        validateStatus={errors.link && "error"}
                        help={errors.link && errors.link.message}
                    >
                        <Input defaultValue={props.song_link} placeholder="Your song link (Spotify/YouTube/Soundcloud)" name="link" onChange={(link) => handleLinkChange(link)}/>
                    </Form.Item>
                }   
            />  
            <Controller
                name="lyrics"
                defaultValue=''
                control={control}
                as={
                    <Form.Item
                        name="lyrics"
                        validateStatus={errors.lyrics && "error"}
                        help={errors.lyrics && errors.lyrics.message}
                    >
                    <Input.TextArea defaultValue={props.song_lyrics} placeholder="Song lyrics" name="description" onChange={(lyrics) => handleLyricsChange(lyrics)}/>
                    </Form.Item>
                }   
            />
            
            
        </div>
    )
}