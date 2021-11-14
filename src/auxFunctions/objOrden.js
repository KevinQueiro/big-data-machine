const objOrden = (obj) => {
    let keys = Object.keys(obj).sort()
    let orden = {}
    for (let each of keys) {
        orden[each] = obj[each]
    }
    return orden;
}

export default objOrden;