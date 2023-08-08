import axiosClient from "./AxiosClient"

const ApiListInfluecer = {
    getListMenu(clientID){
        const url = '/getlistbyuserid';
        return axiosClient.post(url, {ClientID: clientID})
    },
    addListClient(clientID,idList, nameList){
        const url = '/addlistclient';
        return axiosClient.post(url, {ClientID: clientID,IdList: idList, NameList: nameList})
    },
    editListName(clientID,idList,nameList){
        const url = '/editnamelist';
        return axiosClient.post(url, {ClientID: clientID,ListID: idList, UpdateNameList: nameList})
    },
    deleteListClient(idList){
        const url = '/deletelistclient';
        return axiosClient.post(url, {IdList: idList})
    },
    getTableKOLs(clientID,idList){
        const url = '/gettablekols';
        return axiosClient.post(url, {ClientID: clientID,IdList: idList})
    },
    deleteTableKOLs(idProfile,idList){
        const url = '/deletetablekols';
        return axiosClient.post(url, {IdProfile: idProfile,IdList: idList})
    },
    deleteAllTable(idList){
        const url = '/deletealltable';
        return axiosClient.post(url, {IdList: idList})
    },

    
}

export default ApiListInfluecer