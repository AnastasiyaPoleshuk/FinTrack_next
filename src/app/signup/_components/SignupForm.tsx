"use client";

import { useCallback } from "react";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

import { appConfig } from "@config/appConfig";
import { createUser } from "../actions/createUser";
import { SignupFormFieldType, CreateUserResponse } from "./type";
import styles from "./SignupForm.module.scss";

export const SignupForm = () => {
  const router = useRouter();

  const onFinish = useCallback(
    async (values: SignupFormFieldType) => {
      const result = (await createUser(values)) as CreateUserResponse;

      if (result && result.id) {
        router.push("/");
      }
    },
    [router]
  );

  return (
    <Form
      className={styles.container}
      name="sign up form"
      size={"large"}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[appConfig.commonFieldRules]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[appConfig.commonFieldRules]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
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
        <Button type="primary" className="w-full" htmlType={"submit"}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};
