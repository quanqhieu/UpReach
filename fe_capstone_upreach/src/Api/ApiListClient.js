import axiosClient from "./AxiosClient"

const ApiListClient = {
    addProfileClient(data){
        const url = '/client/add-client-profile';
        return axiosClient.post(url, data)
    },
    updateProfileClient(data){
        const url = '/client/update-client-profile';
        return axiosClient.post(url, data)
    },
    checkClientExisted(data){
        const url = '/client/check-existed';
        return axiosClient.post(url, data)
    },
    checkPasswordClient(data){
        const url = '/client/check-passsword';
        return axiosClient.post(url, data)
    },
    updatePasswordClient(data){
        const url = '/client/update-password';
        return axiosClient.post(url, data)
    }
}

export default ApiListClient