import Axios from "axios";

const BaseApi = Axios.create();

export const getChartDataApi = () =>
    BaseApi({
        method: 'get',
        url: `dummy-data.json`
    })