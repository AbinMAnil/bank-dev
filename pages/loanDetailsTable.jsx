import React, { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import CommonHeader from "../components/commonHeader";
import api from "../services/axios";
import { useRouter } from "next/router";
import { Button, Divider, Table } from "antd";
import PopUpConfirmation from "../components/popUpConfirmation";

const columns = [
  {
    title: "#",
    dataIndex: "index",
  },
  {
    title: "Loan Account No",
    dataIndex: "loanACNo",
  },
  {
    title: "customer ID",
    dataIndex: "customerId",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Mobile No",
    dataIndex: "mobileNo",
  },
  {
    title: "Amount Payable",
    dataIndex: "amountPayable",
  },
  {
    title: "Notice Type",
    dataIndex: "noticeType",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const data = [];


const LoanDetails = () => {
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [data, setData] = useState();
  const router = useRouter()

  const redirectToPage = (id, path) => {
    router.push(
      {
        pathname: path,
        query: { id: id },
      },
    )
  }

  const createActionComponent = (data) => {
    return <span style={{ display: "flex", justifyContent: "space-evenly" }}>
      {/* <a href={data.filePath} target="_blank" download='new' >  <Button type="danger"  > {<CloudDownloadOutlined />} </Button></a> */}
      <Button type="default" onClick={() => redirectToPage(data._id, "/addDetails")} > {<EditOutlined />} </Button>
      <Button type="primary" onClick={() => redirectToPage(data._id, "/viewDetails")} > {<EyeOutlined />} </Button>
      <PopUpConfirmation actionName={<DeleteOutlined />} type="danger" />
    </span>
  }


  const getData = async () => {

    const { data: resData } = await api(`admin/customer?bankId=${router.query.bankId || ""}`, "GET");

    // {
    //   "_id": "62d872dbde403fed42a662c8",
    //     "customerId": "545454",
    //       "loanACNo": "kgjkhgh",
    //         "name": "jhgjhg",
    //           "mobileN o": "kgjhghjghj",
    //             "barcode": "jhgjhg",
    //               "amountPayable": "hfhgfgh",
    //                 "noticeType": "jhgjhgjh",
    //                   "filePath": "public/uploads/1658352347123_AlarmReport (1).pdf",
    //                     "bank": "62d862caa587085d2a080c2f",
    //                       "__v": 0
    // }


    setData(resData.map((item, i) => {
      return {
        ...item, legalManager: item?.legalManager?.[0]?.name, collectionManager: item?.collectionManager?.[0]?.name, index: i + 1,
        action: createActionComponent(item),
        loadDetails: <Button type="primary" onClick={() => redirectToPage(item._id, "/loanDetailsTable")} > {<EyeOutlined />} </Button>
      }
    }))

  }

  useEffect(() => {
    getData();
  }, [router.query])




  return (
    <div className="wrapper">

      <span style={{ width: "100%" }}>
        <Divider>  <Button>Add Costumer</Button> </Divider>
        <CommonHeader title=" Customer Loan Details" searchBar={true} />
        <Table columns={columns} dataSource={data} />
      </span>
    </div>
  );
};

export default LoanDetails;
