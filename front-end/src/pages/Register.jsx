import React, { useState } from 'react';
import { Button, Card, Form, Input, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { registerAccount } from '../services/url.service';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await registerAccount(values.name, values.email, values.password)
            notification.success({
                message: "Đăng ký thành công!",
                description: "Tài khoản của bạn đã được tạo. Vui lòng đăng nhập."
            });
            navigate('/login');

        } catch (error) {
            notification.error({
                message: "Đăng ký thất bại",
                description: error.message || "Có lỗi xảy ra, vui lòng thử lại!"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8'>

            <div className="w-full max-w-md">
                <div className="mb-8 text-center text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
                    Tạo Tài Khoản Mới
                </div>

                <Card
                    className='shadow-xl rounded-2xl border-none'
                    bodyStyle={{ padding: '32px' }}
                >
                    <Form
                        name="registerForm"
                        layout="vertical"
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label={<span className="font-medium text-gray-700">Họ và tên</span>}
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập họ và tên của bạn!' }]}
                        >
                            <Input size="large" placeholder="Nhập họ và tên" className="rounded-lg" />
                        </Form.Item>

                        <Form.Item
                            label={<span className="font-medium text-gray-700">Email</span>}
                            name="email"
                            rules={[
                                { required: true, message: 'Vui lòng nhập email!' },
                                { type: 'email', message: 'Email không đúng định dạng!' }
                            ]}
                        >
                            <Input size="large" placeholder="Nhập email của bạn" className="rounded-lg" />
                        </Form.Item>

                        <Form.Item
                            label={<span className="font-medium text-gray-700">Mật khẩu</span>}
                            name="password"
                            rules={[
                                { required: true, message: 'Vui lòng tạo mật khẩu!' },
                                { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' }
                            ]}
                        >
                            <Input.Password size="large" placeholder="Tạo mật khẩu (ít nhất 6 ký tự)" className="rounded-lg" />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: '16px' }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                size="large"
                                loading={loading}
                                className="bg-blue-600 hover:bg-blue-700 border-none rounded-lg font-bold h-12 text-base shadow-md transition-all mt-2"
                            >
                                Đăng ký ngay
                            </Button>
                        </Form.Item>

                        <div className="text-center text-gray-600 mt-4">
                            Đã có tài khoản?{' '}
                            <Link to="/login" className="text-blue-600 hover:text-blue-800 font-bold transition-colors">
                                Đăng nhập tại đây
                            </Link>
                        </div>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default RegisterPage;