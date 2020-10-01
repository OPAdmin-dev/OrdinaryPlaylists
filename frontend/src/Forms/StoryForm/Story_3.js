import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input } from "antd";

export default function Story_3(props) {
  const { errors, control } = useForm({});

  const handleEmailChange = (e) => {
    props.setEmail(e.target.value);
  };

  const handleLocationChange = (e) => {
    props.setLocation(e.target.value);
  };

  const handleNameChange = (e) => {
    props.setName(e.target.value);
  };

  return (
    <div className="Story_3">
      <p id="question">Q4</p>
      <p id="header">Conclude your story</p>
      <Controller
        name="pen"
        defaultValue=""
        control={control}
        as={
          <Form.Item
            name="pen"
            validateStatus={errors.name && "error"}
            help={errors.name && errors.name.message}
          >
            <Input
              defaultValue={props.name}
              placeholder="Pen name (leave blank to submit anonymously)"
              name="pen"
              onChange={(pen) => handleNameChange(pen)}
            />
          </Form.Item>
        }
      />
      <Controller
        name="location"
        defaultValue=""
        control={control}
        rules={{ required: "This field is required" }}
        as={
          <Form.Item
            name="location"
            validateStatus={errors.location && "error"}
            help={errors.location && errors.location.message}
          >
            <Input
              defaultValue={props.location}
              placeholder="When did this story unfold? (leave blank if you dont remember or do not wish to disclose)"
              name="location"
              onChange={(location) => handleLocationChange(location)}
            />
          </Form.Item>
        }
      />
      <Controller
        name="email"
        defaultValue=""
        control={control}
        rules={{ required: "This field is required" }}
        as={
          <Form.Item
            name="email"
            validateStatus={errors.email && "error"}
            help={errors.email && errors.email.message}
          >
            <Input
              defaultValue={props.email}
              placeholder="Your email, for verification purposes*"
              name="email"
              onChange={(email) => handleEmailChange(email)}
            />
          </Form.Item>
        }
      />
      <p>
        All stories submitted will be subjected to our curation. Should you have
        any doubt or question, kindly visit our FAQ section or contact us at{" "}
        <span style={{ color: "#8A80D3" }}>ordinaryplaylists@gmail.com</span>.
      </p>
    </div>
  );
}
