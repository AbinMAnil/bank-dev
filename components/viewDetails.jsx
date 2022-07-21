import { Space } from "antd";
import CommonHeader from "./commonHeader";




const ViewDetails = ({ data: d = {} }) => {

    const data = {
        "Customer ID": d?.bankName,
        "Address": d?.address,
        "Collection Manager": d?.collectionManager?.[0]?.name,
        "Username": d?.collectionManager?.[0]?.username,
        "Password": d?.collectionManager?.[0]?.password,
        "Legal Manager": d?.legalManager?.[0]?.name,
        "Username": d?.legalManager?.[0]?.username,
        "Password": d?.legalManager?.[0]?.password,
    }


    console.log(d)
    const dataArray = Object.entries(data);





    return (<>
        <div className="wrapper">

            <CommonHeader title="View Customer" searchBar={false} />

            <span style={{ alignSelf: "self-start", padding: "2rem" }} >
                {
                    Object.keys(data).map((key, i) => (
                        <>
                            <span style={{ fontWeight: "bolder", marginRight: "3rem" }} >  {key + " : "}  </span>
                            <span style={{ float: "right" }} > {"  "} {data[key]} </span>
                            <br />
                            <br />
                        </>
                    ))


                }
            </span>

        </div>


    </>)



}

export default ViewDetails;