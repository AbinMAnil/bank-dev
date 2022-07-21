import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import api from "../services/axios"
import CommonHeader from "./commonHeader"
import FormComponent from "./form"




const DetailsForm = () => {

    const [data, setData] = useState();
    const router = useRouter()

    const editBank = async (data) => {
        try {

            console.log(data)
            const { data: allData } = await api("/admin/bank/update", "PUT", { ...data, id: router.query.bankId });

            console.log(allData)
        } catch (e) {
            console.log(e)
        }

    }


    const getData = async () => {
        try {
            const { data } = await api(`/admin/bank?id=${router.query.bankId}`, "GET");
            setData(data[0])

            console.log(data, 'current user')
        } catch (e) {
            console.log("____________", e)
        }
    }


    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            <div className="wrapper">
                <CommonHeader title={"Add Bank Details"} searchBar={false} />
                <span style={{ alignSelf: "flex-start", width: "45%" }}> <FormComponent data={data} funct={editBank} /></span>
            </div>

        </>
    )
}
export default DetailsForm