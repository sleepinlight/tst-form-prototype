import React, { useState } from "react";
import "./FormComponent.css";
import { Card, Button, Checkbox, Form, Input, notification, Modal } from "antd";

const FormComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const onSubmitFormSuccess = () => {
    notification.open({
      message: "Success!",
      description: "You've successfully signed up. Thanks for joining!",
      onClick: () => {
        console.log("account created!");
      },
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const onShowTermsAndConditions = () => {
    setModalOpen(true);
  };

  return (
    <Card
      title="Sign Up Now!"
      bordered={false}
      style={{ width: 400 }}
      className="card-form-container"
    >
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onSubmitFormSuccess}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="first_name"
          rules={[{ required: true, message: "First name is required" }]}
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="last_name"
          rules={[{ required: true, message: "Last name is required" }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input />
        </Form.Item>
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
          label="Confirm Password"
          name="password_confirm"
          rules={[
            { required: true, message: "Password is required" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agree_tc"
          valuePropName="checked"
          rules={[
            { required: true, message: "Must agree to Terms & Conditions" },
          ]}
        >
          <Checkbox>
            I have agreed to the{" "}
            <Button
              type="link"
              onClick={() => onShowTermsAndConditions()}
              style={{ paddingLeft: "0px" }}
            >
              Terms & Conditions
            </Button>
          </Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 13, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title="Terms & Conditions"
        open={isModalOpen}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
      >
        <div className="terms-and-conditions-ipsum-container">
          <div>
            <h4 className="terms-and-conditions-header">
              1. Acceptance The Use of Lorem Ipsum Conditions
            </h4>
            <p>
              Your access to and use of Lorem Ipsum (the app) is subject
              exclusively to these Terms and Conditions. You will not use the
              app for any purpose that is unlawful or prohibited by these Terms
              and Conditions. By using the app you are fully accepting the
              terms, conditions and disclaimers contained in this notice. If you
              do not accept these Terms and Conditions you must immediately stop
              using the app.
            </p>
          </div>

          <div>
            <h4 className="terms-and-conditions-header">
              2. Links to Third Party Apps and Websites
            </h4>
            <p>
              Your access to and use of Lorem Ipsum (the app) is subject
              exclusively to these Terms and Conditions. You will not use the
              app for any purpose that is unlawful or prohibited by these Terms
              and Conditions. By using the app you are fully accepting the
              terms, conditions and disclaimers contained in this notice. If you
              do not accept these Terms and Conditions you must immediately stop
              using the app.
            </p>
          </div>

          <div>
            <h4 className="terms-and-conditions-header">3. Copyright</h4>
            <p>
              All copyright, trade marks and all other intellectual property
              rights in the app and its content (including without limitation
              the app design, text, graphics and all software and source codes
              connected with the app) are owned by or licensed to Lorem Ipsum or
              otherwise used by Lorem Ipsum as permitted by law. 3.1 In
              accessing the app you agree that you will access the content
              solely for your personal, non-commercial use. None of the content
              may be downloaded, copied, reproduced, transmitted, stored, sold
              or distributed without the prior written consent of the copyright
              holder. This excludes the downloading, copying and/or printing of
              pages of the app for personal, non-commercial home use only.
            </p>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default FormComponent;
