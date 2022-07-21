import { useEffect, useLayoutEffect, useState } from "react"
import DetailsForm from "../components/detailsForm"
import api from "../services/axios"
import { useRouter } from 'next/router'


const AddAllDetails = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const data = localStorage.getItem('user');
        console.log(JSON.parse(data));

        if (!data) {
            setLoading(true)
            router.push("/")
        }
        else setLoading(false)
    }, [])




    // useEffect(() => {
    // const { data } = await api("/admin/bank/create", "POST", {
    //     "bankName": "111",
    //     "address": "kjhlkjhdsf",
    //     "collectionManager": "aaaa1",
    //     "collectionManagerUsername": "aaaa2user",
    //     "collectionManagerPassword": "aaaau1ser",
    //     "legalManager": "bbbb1",
    //     "legalManagerUsername": "bbbb1user",
    //     "legalManagerPassword": "bbbb1user"
    // })


    // console.log(data)
    // }, [])

    return (
        loading ? <h3> Please do login </h3> : <DetailsForm />
    )
}

export default AddAllDetails