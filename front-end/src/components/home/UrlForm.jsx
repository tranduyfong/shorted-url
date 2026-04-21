import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

const UrlForm = ({ onUrlCreated }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        await onUrlCreated(values.link);
        form.resetFields();
        setLoading(false);
    };

    return (
        <Card className="shadow-lg rounded-2xl border-none mb-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Hệ Thống Rút Gọn Link
            </h2>
            <Form
                form={form}
                name="url_form"
                layout="vertical"
                onFinish={onFinish}
                className="flex flex-col md:flex-row gap-4"
            >
                <Form.Item
                    name="link"
                    className="flex-grow mb-0"
                    rules={[
                        { required: true, message: 'Vui lòng nhập đường link!' },
                        { type: 'url', message: 'Đường link không đúng định dạng!' }
                    ]}
                >
                    <Input
                        size="large"
                        prefix={<LinkOutlined className="text-gray-400" />}
                        placeholder="Nhập đường link dài của bạn vào đây (vd: https://google.com)..."
                        className="rounded-lg"
                    />
                </Form.Item>
                <Form.Item className="mb-0">
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        loading={loading}
                        className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold"
                    >
                        Rút gọn ngay
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default UrlForm;