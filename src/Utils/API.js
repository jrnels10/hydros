import axios from 'axios';

export async function POUData() {
    try {
        return axios.post(`http://testintranet/Hydros/Adjudications/GetPlaceOfUsePolygons`, {
            withCredentials: true
        }).catch(function (error) {
            console.log(error)
        })
    }
    catch (error) {
        console.log(error)
    }
}