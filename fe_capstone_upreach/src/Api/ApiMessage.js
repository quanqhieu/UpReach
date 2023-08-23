import axiosClient from "./AxiosClient";

const ApiMessage = {
    getAllInflueOfClientBooking(_idClient) {
        const url = '/client/getAllInflueOfClient';
        return axiosClient.post(url, { _idClient: _idClient })
    },
    getAllClientHaveInflue(_idInflue) {
        const url = '/influ/getAllClientHaveInflue';
        return axiosClient.post(url, { _idInflue: _idInflue })
    },
    getAllMessage(data) {
        const url = '/message/getmess';
        return axiosClient.post(url, { from: data._idUser, to: data._idChat })
    },
    addMessage(data) {
        const url = '/message/addmess';
        return axiosClient.post(url, { from: data._idUser, to: data._idChat, message: data.message })
    }
}

export default ApiMessage