import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key: 'AIzaSyBiF62PW8LrOLsq-ili_sqqyfcDZFCXhqA',
    cx: '671ca8971896245ea'
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
