import ChangePassword from "../Pages/ClientProfilePage/ChangePassword";
import axiosClient from "./AxiosClient"

const ApiUser = {
    registerUser(data) {
        const url = '/register';
        return axiosClient.post(url, { Data: data })
    },

    conFirmUser(data) {
        const url = '/confirm';
        return axiosClient.post(url, data);
    },
    addInfomationInflunecer(data) {
        const url = '/addBasicInfomationInfluencer';
        return axiosClient.post(url, { Data: data })
    },
    login(data) {
        const url = '/login';
        return axiosClient.post(url, { email: data.email, password: data.password });
    },

    forgotPassword(data){
        const url = '/send-otp-forgot-pass';
        return  axiosClient.post(url, data);
    },
    confirmForgotPassword(data){
        const url = '/confirm-otp-forgot-pass'
        return  axiosClient.post(url, data);
    },
    ChangePassword(data){
        const url = '/change-password'
        return  axiosClient.post(url, data);
    }
}

export default ApiUser