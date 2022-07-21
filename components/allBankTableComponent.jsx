import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Divider, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import api from "../services/axios";
import CommonHeader from "./commonHeader";
import PopUpConfirmation from "./popUpConfirmation";
import { useRouter } from "next/router";


const columns = [
    {
        title: "#",
        dataIndex: "index",
    },
    {
        title: "Bank Name",
        dataIndex: "bankName",
    },
    {
        title: "Address",
        dataIndex: "address",
    },
    {
        title: "Legal Manager",
        dataIndex: "legalManager",
    },
    {
        title: "Collection Manager",
        dataIndex: "collectionManager",
    },
    {
        title: "Customer loan details",
        dataIndex: "loadDetails"
    },
    {
        title: "Action",
        dataIndex: "action",
    },

];






const AllBankTableComponent = () => {

    const router = useRouter()

    const redirectToPage = (id, path) => {
        router.push(
            {
                pathname: path,
                query: { bankId: id },
            },
        )
    }




    const createActionComponent = (data) => {
        return <span style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button type="default" onClick={() => redirectToPage(data._id, "/addDetails")} > {<EditOutlined />} </Button>
            <Button type="primary" onClick={() => redirectToPage(data._id, "/viewDetails")} > {<EyeOutlined />} </Button>
            <PopUpConfirmation actionName={<DeleteOutlined />} type="danger" />
        </span>
    }



    const [data, setData] = useState([]);

    const getData = async () => {

        const { data } = await api('/admin/bank', "GET");

        setData(data.map((item, i) => {
            return {
                ...item, legalManager: item?.legalManager?.[0]?.name, collectionManager: item?.collectionManager?.[0]?.name, index: i + 1,
                action: createActionComponent(item),
                loadDetails: <Button type="primary" onClick={() => redirectToPage(item._id, "/loanDetailsTable")} > {<EyeOutlined />} </Button>
            }
        }))

    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="wrapper">

            <Divider>  <Button>Add User</Button> </Divider>
            <span style={{ width: "100%" }}>
                <CommonHeader title=" Bank Details" searchBar={true} />
                <Table columns={columns} dataSource={data} />
            </span>
        </div>
    )
}

export default AllBankTableComponent     