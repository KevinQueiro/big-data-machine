import axios from "axios"
import { parseDate } from '../../auxFunctions/parseDate'
import objOrden from '../../auxFunctions/objOrden'

export const apiData = () => async (dispatch) => {
    try {
        let objApi = {};
        for (let page = 1; page <= 3; page++) {
            const { data } = await axios.get(`https://gorest.co.in/public/v1/todos?page=${page}`)
            for (let each of data.data) {
                let date = parseDate(each.due_on)
                if (!(date in objApi)) {
                    objApi[date] = []
                }
                objApi[date].push(each.status)
            }
        }
        let clearData = objOrden(objApi)
        dispatch({
            type: 'getData',
            payload: clearData
        });
    } catch (error) {
        console.log(error)
    }
}