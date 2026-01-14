"use client";

import { Button, Form, FormProps, Input } from "antd";

import { appConfig } from "@/src/config/appConfig";
import styles from "./LoginForm.module.scss";

type FieldType = {
  username?: string;
  password?: string;
};

export const LoginForm = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form
      className={styles.container}
      name="login form"
      size={"large"}
      onFinish={onFinish}
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
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

      <Form.Item>
        <Button type="primary" className="w-full">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
