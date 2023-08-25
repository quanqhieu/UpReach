import axiosClient from "./AxiosClient"

const ApiAudienceAndJobInfluencer = {
    getDataForChart(IdInflu, influInfoEmail) {
        const url = '/influ/data-chart';
        return axiosClient.post(url, { influencerId: IdInflu, influInfoEmail: influInfoEmail })
    },
}

export default ApiAudienceAndJobInfluencer