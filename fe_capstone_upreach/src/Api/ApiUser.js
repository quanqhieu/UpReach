import axiosClient from "./AxiosClient"

const ApiUser = {
    registerUser(data){
        const url = '/register';
        return axiosClient.post(url, {Data: data})
    },

    conFirmUser(data){
        const url = '/confirm';
        return axiosClient.post(url, data);
    },

    addInfomationInflunecer(data){
        const url = '/addBasicInfomationInfluencer';
        return axiosClient.post(url, {Data: data})
    }
}

export default ApiUser