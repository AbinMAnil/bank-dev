import ViewDetails from "../components/viewDetails"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import api from "../services/axios"


const ViewAllDetail = () => {
    const [data, setData] = useState();
    const router = useRouter()

    // const editBank = async (data) => {
    //     try {

    //         console.log(data)
    //         const { data: allData } = await api("/admin/bank/update", "PUT", { ...data, id: router.query.bankId });

    //         console.log(allData)
    //     } catch (e) {
    //         console.log(e)
    //     }

    // }


    const getData = async () => {
        try {
            console.log(router.query.bankId)
            const { data } = await api(`/admin/bank?id=${router.query.bankId || ""}`, "GET");
            setData(data[0])

            console.log(data, 'current user')
        } catch (e) {
            console.log("____________", e)
        }
    }


    useEffect(() => {
        getData()
    }, [])


    return <ViewDetails data={data} />
}
export default ViewAllDetail