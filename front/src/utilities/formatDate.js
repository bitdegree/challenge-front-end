const formatDate = date => {
    let year = String(date.getFullYear())
    let month = String(date.getMonth())
    let day = String(date.getDate())
    month = month.length === 1 ? '0' + month : month
    day = day.length === 1 ? '0' + day : day
    return `${year}-${month}-${day}`
}

export default formatDate