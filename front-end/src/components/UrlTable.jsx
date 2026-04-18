import React from 'react';
import { Table, Button, Tooltip, message, Typography } from 'antd';
import { CopyOutlined, SelectOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

const BASE_DOMAIN = 'https://shorted-url-g5gz.onrender.com/';

const UrlTable = ({ data, loading }) => {

    const getFullUrl = (shortUrl) => {
        if (!shortUrl) return '';
        return shortUrl.startsWith('http') ? shortUrl : BASE_DOMAIN + shortUrl;
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(getFullUrl(text));
        message.success('Đã copy link rút gọn!');
    };

    const columns = [
        {
            title: 'STT',
            key: 'index',
            width: 60,
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Link gốc (urlBefore)',
            dataIndex: 'urlBefore',
            key: 'urlBefore',
            render: (text) => (
                <Paragraph ellipsis={{ rows: 1, tooltip: text }} className="mb-0 max-w-[200px] md:max-w-[400px]">
                    <a href={text} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-500">
                        {text}
                    </a>
                </Paragraph>
            ),
        },
        {
            title: 'Link rút gọn (urlAfter)',
            dataIndex: 'urlAfter',
            key: 'urlAfter',
            render: (text) => {
                const fullLink = getFullUrl(text);
                return (
                    <a href={fullLink} target="_blank" rel="noreferrer" className="text-blue-600 font-medium">
                        {fullLink}
                    </a>
                )
            },
        },
        {
            title: 'Thao tác',
            key: 'action',
            width: 150,
            render: (_, record) => (
                <div className="flex gap-2">
                    <Tooltip title="Copy link">
                        <Button
                            icon={<CopyOutlined />}
                            onClick={() => copyToClipboard(record.urlAfter)}
                        />
                    </Tooltip>
                    <Tooltip title="Truy cập">
                        <Button
                            type="dashed"
                            icon={<SelectOutlined />}
                            href={getFullUrl(record.urlAfter)}
                            target="_blank"
                        />
                    </Tooltip>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white p-4 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Danh sách Link</h3>
            <Table
                columns={columns}
                dataSource={data}
                loading={loading}
                pagination={{ pageSize: 5 }}
                scroll={{ x: 'max-content' }}
                rowKey={(record) => record._id || record.id}
            />
        </div>
    );
};

export default UrlTable;