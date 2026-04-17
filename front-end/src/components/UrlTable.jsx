import React from 'react';
import { Table, Button, Tooltip, message, Typography } from 'antd';
import { CopyOutlined, SelectOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

const UrlTable = ({ data }) => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
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
            render: (text) => (
                <a href={text} target="_blank" rel="noreferrer" className="text-blue-600 font-medium">
                    {text}
                </a>
            ),
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
                            href={record.urlAfter}
                            target="_blank"
                        />
                    </Tooltip>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white p-4 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Danh sách Link đã tạo</h3>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5 }}
                scroll={{ x: 'max-content' }}
                rowKey="id"
            />
        </div>
    );
};

export default UrlTable;