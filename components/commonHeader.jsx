import { PoweroffOutlined } from "@ant-design/icons"
import { Button, Input, Space } from "antd"
import { useRouter } from 'next/router'


const CommonHeader = ({ title, searchBar }) => {
    const router = useRouter()
    return <span className="commontitle">
        <h2 style={{ paddingLeft: "1%", color: "white" }} className=""> {title}</h2>
        {searchBar && <span>  <Input id="searchBar" placeholder="Search here..." onSearch={() => { }} style={{ width: 200 }} /></span>}
        <Space>
            <Button
                type="danger"
                icon={<PoweroffOutlined />}
                loading={false}
                onClick={() => { localStorage.removeItem("user"); router.push("/") }}
            />
        </Space>
    </span>
}

export default CommonHeader