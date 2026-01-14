"use client";

import { Button, Form, FormProps, Input } from "antd";

import { appConfig } from "@/src/config/appConfig";
import styles from "./SignupForm.module.scss";

type FieldType = {
  confirmedPassword?: string;
  email?: string;
  password?: string;
};

export const SignupForm = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form
      className={styles.container}
      name="sign up form"
      size={"large"}
      onFinish={onFinish}
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[appConfig.commonFieldRules]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[appConfig.commonFieldRules]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="Confirm password"
        name="confirmedPassword"
        dependencies={["password"]}
        rules={[
          appConfig.commonFieldRules,
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" className="w-full">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};
