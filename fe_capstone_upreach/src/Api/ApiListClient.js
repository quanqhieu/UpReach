import axiosClient from "./AxiosClient"

const ApiListClient = {
    updateProfileClient(data){
        const url = '/updateClientProfile';
        return axiosClient.post(url, data)
    },

}

export default ApiListClient