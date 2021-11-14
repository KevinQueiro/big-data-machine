const parseDate = (apiDate) => {
    let dataDate = apiDate.split('T')[0]
    let date = dataDate.split('-').join('')
    return date;
}

const dateFormat = (date) => {
    let aux;
    let year = Math.trunc(date / 10000)
    aux = date % 10000;
    let month = Math.trunc(aux / 100)
    let day = date % 100
    let format = (year + '/' + month + '/' + day)
    return format;
}

export { parseDate, dateFormat }