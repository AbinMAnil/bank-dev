
import { Button, Checkbox, Form, Input } from 'antd';
import Image from 'next/image';
import Router from 'next/router';
import React from 'react';
import Api from '../services/axios';


const UserLogin = () => {
  const onFinish = async (values) => {

    const { data: { data: { accessToken, user } } } = await Api('/auth/login', 'POST', values);

    console.log(user)
    console.log(accessToken)

    localStorage.setItem("token", accessToken)
    localStorage.setItem("user", JSON.stringify(user))

    if (user.role === "admin") Router.push("/allBankTable")


  };

  const onFinishFailed = (errorInfo) => {
    alert('Failed:', errorInfo);
  };

  return (
    <div className="loginWraper">
      <div className="form">
        <div className="imageWarper"><Image id='loginPageImage' src="/../public/bank.jpg" alt="me" width="270" height="350" /></div>

        <div className="rightItems">

          <span>
            <h2> Welcome to Acuity Law !</h2>
            <p>login your account</p>
          </span>
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              style={{ display: "block" }}
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              style={{ display: "block" }}
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              style={{ marginTop: "1rem" }}
              wrapperCol={{
                span: 16,
              }}
            >
              <Button id='submitButton' htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;