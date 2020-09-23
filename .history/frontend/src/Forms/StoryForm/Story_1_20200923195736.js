import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, AutoComplete } from "antd";
import { apiPrompts } from "../../services/utilities/API";

export default function Story_1(props) {
  const { errors, control } = useForm({});
  const [prompts, setPrompts] = useState();

  useEffect(() => {
    apiPrompts.getAll().then((res) => {
      setPrompts(
        res.data.map((prompt) => {
          return { value: `${prompt.id}. ${prompt.prompt}` };
        })
      );
    });
  }, []);

  const handleStoryChange = (e) => {
    props.setStory(e.target.value);
  };

  const handleTitleChange = (e) => {
    props.setTitle(e.target.value);
  };

  const onSelect = (data) => {
    var slug = data.substring(0, data.indexOf("."));
    slug = parseInt(slug.trim());
    props.setPrompt(slug);
  };

  return (
    <div className="Story_1">
      <p id="question">Q2</p>
      <p id="header">Pick one prompt you feel for most.</p>
      <Controller
        name="title"
        defaultValue=""
        control={control}
        rules={{ required: "This field is required" }}
        as={
          <AutoComplete
            style={{
              width: "80vw",
              height: "55px",
              border: "1px solid #747474",
              boxSizing: "border-box",
              color: "white",
            }}
            options={prompts}
            placeholder="Select prompt or search by keyword..."
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
            value={props.prompt}
            onSelect={onSelect}
          />
        }
      />
      <p id="header">Tell us that story in 100 words or less.</p>
      <Controller
        name="description"
        defaultValue=""
        control={control}
        as={
          <Form.Item
            name="story"
            validateStatus={errors.story && "error"}
            help={errors.story && errors.story.message}
          >
            <Input.TextArea
              defaultValue={props.story}
              placeholder="Tell us your story here."
              name="description"
              onChange={(description) => handleStoryChange(description)}
            />
          </Form.Item>
        }
      />
      <Controller
        name="title"
        defaultValue=""
        control={control}
        rules={{ required: "This field is required" }}
        as={
          <Form.Item
            name="title"
            validateStatus={errors.title && "error"}
            help={errors.title && errors.title.message}
          >
            <Input
              defaultValue={props.title}
              placeholder="If you had to name this chapter in your life..."
              name="title"
              onChange={(title) => handleTitleChange(title)}
            />
          </Form.Item>
        }
      />
    </div>
  );
}
