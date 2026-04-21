import React from 'react';
import { Button, Card, Col, Form, Input, notification, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { loginAccount } from '../services/url.service';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        const res = await loginAccount(values.email, values.password)
        if (!res.data) {
            notification.error({
                message: "Đăng nhập thất bại!",
                description: res.message
            });
            return;
        }

        // Lưu vào custom hook
        login(res.data);

        notification.success({
            message: "Đăng nhập thành công"
        });
        form.resetFields();
        setLoading(false)
        window.location.href = "/";
    };

    return (
        <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8'>
            <div className="mb-8 text-3xl md:text-4xl font-extrabold text-blue-900 tracking-tight">
                Đăng Nhập Hệ Thống
            </div>

            <Row gutter={[24, 24]} className="w-full max-w-4xl items-stretch">
                <Col xs={24} md={12}>
                    <Card
                        title={<span className="text-xl font-bold text-gray-800">ĐĂNG NHẬP</span>}
                        className='h-full shadow-xl rounded-2xl border-none'
                        headStyle={{ borderBottom: 'none', paddingBottom: 0, paddingTop: '24px' }}
                        bodyStyle={{ paddingTop: '12px' }}
                    >
                        <Form
                            name="loginForm"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            style={{ width: '100%' }}
                        >
                            <Form.Item
                                label={<span className="font-medium text-gray-700">Tên đăng nhập</span>}
                                name="email"
                                rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}
                            >
                                <Input size="large" placeholder="Nhập email của bạn" className="rounded-lg" />
                            </Form.Item>

                            <Form.Item
                                label={<span className="font-medium text-gray-700">Mật khẩu</span>}
                                name="password"
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                            >
                                <Input.Password size="large" placeholder="Nhập mật khẩu" className="rounded-lg" />
                            </Form.Item>

                            <div className="flex justify-end mb-6">
                                <Link to="/forgetPassword" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                                    Quên mật khẩu?
                                </Link>
                            </div>

                            <Form.Item style={{ marginBottom: 0 }} className="w-full">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    size="large"
                                    loading={loading}
                                    className="bg-blue-600 hover:bg-blue-700 border-none rounded-lg font-bold h-12 text-base shadow-md transition-all"
                                >
                                    Đăng nhập
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>

                <Col xs={24} md={12}>
                    <Card
                        title={<span className="text-xl font-bold text-gray-800">KHÁCH HÀNG MỚI</span>}
                        className='h-full shadow-xl rounded-2xl border-none'
                        headStyle={{ borderBottom: 'none', paddingBottom: 0, paddingTop: '24px' }}
                    >
                        <div className="flex flex-col h-full justify-between pb-2">
                            <div className="text-gray-600 text-base mb-6 leading-relaxed">
                                Bằng cách tạo một tài khoản với cửa hàng của chúng tôi, bạn sẽ có thể
                                thực hiện những quy trình mua hàng nhanh hơn, lưu trữ nhiều địa chỉ
                                gửi hàng, xem và theo dõi đơn đặt hàng của bạn một cách dễ dàng.
                            </div>
                            <div className="w-full mt-auto">
                                <Button
                                    block
                                    size="large"
                                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 rounded-lg font-bold h-12 text-base transition-all"
                                    onClick={() => navigate('/register')}
                                >
                                    Tạo tài khoản mới
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;