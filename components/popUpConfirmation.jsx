import { Button, Popconfirm } from 'antd';
import React, { useState } from 'react';

const PopUpConfirmation = ({ actionName, type }) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showPopconfirm = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <Popconfirm
            title="Title"
            visible={visible}
            onConfirm={handleOk}
            okButtonProps={{
                loading: confirmLoading,
            }}
            onCancel={handleCancel}
        >
            <Button type={type} onClick={showPopconfirm}>
                {actionName}
            </Button>
        </Popconfirm>
    );
};

export default PopUpConfirmation;