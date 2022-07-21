import axios from "axios";



export default function api(route, method, data = null) {

    const token = window.localStorage.getItem("token");

    const Axios = axios.create({
        baseURL: 'http://52.66.45.128:4000',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return Axios({
        method,
        url: route,
        data: data || undefined
    });
}



