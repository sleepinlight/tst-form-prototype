import React from "react";
import "./FormComponent.css";
import { Card, Button, Checkbox, Form, Input, notification } from "antd";

const FormComponent = () => {
  const onSubmitFormSuccess = () => {
    notification.open({
      message: "Success!",
      description: "You've successfully signed up. Thanks for joining!",
      onClick: () => {
        console.log("account created!");
      },
    });
  };

  return (
    <Card
      title="Sign Up Now!"
      bordered={false}
      style={{ width: 300 }}
      className="card-form-container"
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onSubmitFormSuccess}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Username is required" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormComponent;
