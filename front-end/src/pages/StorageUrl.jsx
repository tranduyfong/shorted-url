import React, { useEffect, useState } from "react";
import { message } from "antd";
import UrlTable from "../components/UrlTable";
import { getHistoryUrl } from "../services/url.service";

const StorageUrl = () => {
    const [urlList, setUrlList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadData = async () => {
        setIsLoading(true);
        try {
            const result = await getHistoryUrl();
            setUrlList(result.data || result);
        } catch (error) {
            message.error(error.message || 'Có lỗi xảy ra khi lấy dữ liệu!');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="max-w-4xl mx-auto py-10">
            <UrlTable data={urlList} loading={isLoading} />
        </div>
    );
}

export default StorageUrl;