import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
} from 'antd';
const { TextArea } = Input;

const FormComponent = ({ data: formData, funct }) => {

    return (
        <div className="wrapper">
            <Form
                key={formData?._id}
                onFinish={funct}
                // onFinishFailed={ }
                initialValues={{
                    bankName: formData?.bankName || "",
                    address: formData?.address || "",
                    collectionManager: formData?.collectionManager?.[0]?.name || "",
                    collectionManagerUsername: formData?.collectionManager?.[0]?.username || "",
                    collectionManagerPassword: formData?.collectionManager?.[0]?.password || "",
                    legalManager: formData?.legalManager?.[0]?.name || "",
                    legalManagerUsername: formData?.legalManager?.[0]?.username || "",
                    legalManagerPassword: formData?.legalManager?.[0]?.password || "",
                }}
            >

                <Form.Item style={{ padding: "1rem" }} label="Bank Name "
                    rules={[{ required: true }]}
                    name="bankName"
                >
                    <Input style={{ float: "right", width: "20rem" }} />
                </Form.Item  >

                <Form.Item style={{ padding: "1rem" }} label="Address"
                    name="address"
                    rules={[{ required: true }]}
                >
                    <TextArea rows={4} style={{ float: "right", width: "20rem" }} />
                </Form.Item  >

                <Form.Item style={{ padding: "1rem" }} label="Collection Manager "
                    rules={[{ required: true }]} name="collectionManager"
                >
                    <Input style={{ float: "right", width: "20rem" }} />
                </Form.Item  >

                <Form.Item style={{ padding: "1rem" }} label="Username"
                    rules={[{ required: true }]} name="collectionManagerUsername"
                >
                    <Input style={{ float: "right", width: "20rem" }} />
                </Form.Item  >

                <Form.Item style={{ padding: "1rem" }} label="Password"
                    rules={[{ required: true }]} name="collectionManagerPassword"
                >
                    <Input style={{ float: "right", width: "20rem" }} />
                </Form.Item  >

                <Form.Item style={{ padding: "1rem" }} label="Legal Manager "
                    rules={[{ required: true }]} name="legalManager">

                    <Input style={{ float: "right", width: "20rem" }} />
                </Form.Item  >

                <Form.Item style={{ padding: "1rem" }} label="Username"
                    rules={[{ required: true }]} name="legalManagerUsername">

                    <Input style={{ float: "right", width: "20rem" }} />
                </Form.Item  >

                <Form.Item style={{ padding: "1rem" }} label="Password"
                    rules={[{ required: true }]} name="legalManagerPassword">
                    <Input style={{ float: "right", width: "20rem" }} />
                </Form.Item  >

                <Form.Item >
                    <Button style={{ float: "right", width: "22rem" }} id='submitButton' htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default FormComponent 