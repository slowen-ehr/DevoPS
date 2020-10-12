$.ajaxSetup({
    async: false
});

let data_dictionary = []
let pie_dictionary = {}
getDataFromUrls()

function getDataFromUrls() {
    let url = 'http://s3.amazonaws.com/logtrust-static/test/test/data1.json'
    $.getJSON(url, function (data) {
        processDataSerie1(data); // JSON result in `data` variable
    })

    let proxy = 'https://cors-anywhere.herokuapp.com/' // proxy to bypass CORS 
    url = 'http://s3.amazonaws.com/logtrust-static/test/test/data2.json'
    $.getJSON(proxy + url, function (data) {
        processDataSerie2(data); // JSON result in `data` variable
    })

    url = 'http://s3.amazonaws.com/logtrust-static/test/test/data3.json'
    $.getJSON(proxy + url, function (data) {
        processDataSerie3(data); // JSON result in `data` variable
    })
}

function processDataSerie1(data) {
    let normaliced_key
    let normaliced_date
    let normaliced_value
    for (i in data) {
        element = data[i]
        normaliced_key = normaliceKey(element.cat)
        normaliced_date = element.d
        normaliced_value = element.value
        fillLine(normaliced_key, normaliced_date, normaliced_value)
        fillPie(normaliced_key, normaliced_value)
    }
}

function processDataSerie2(data) {
    let normaliced_key
    let normaliced_date
    let normaliced_value
    for (i in data) {
        element = data[i]
        normaliced_key = normaliceKey(element.categ)
        normaliced_date = new Date(element.myDate).getTime()
        normaliced_value = element.val
        fillLine(normaliced_key, normaliced_date, normaliced_value)
        fillPie(normaliced_key, normaliced_value)
    }
}

function processDataSerie3(data) {
    let normaliced_key
    let normaliced_date
    let normaliced_value
    const dateRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/
    for (i in data) {
        element = data[i]
        normaliced_key = normaliceKey(element.raw.split('#')[1])
        normaliced_date = new Date(dateRegex.exec(element.raw)[0]).getTime()
        normaliced_value = element.val
        date_dictionary = {}
        old_value = 0
        fillLine(normaliced_key, normaliced_date, normaliced_value)
        fillPie(normaliced_key, normaliced_value)
    }
}

function fillLine(key, date, value) {
    let date_dictionary = {}
    let old_value = 0
    if (key in data_dictionary) {
        date_dictionary = data_dictionary[key]
        if (date in date_dictionary) {
            old_value = date_dictionary[date]
        }
    }
    date_dictionary[date] = old_value + value
    data_dictionary[key] = date_dictionary
}

function fillPie(key, value) {
    if (key in pie_dictionary) {
        pie_dictionary[key] += value
    } else {
        pie_dictionary[key] = value
    }
}

function normaliceKey(key) {
    return key.toUpperCase()
}

function toXY(obj) {
    return Object.keys(obj).map(key => ({
        x: new Date(parseInt(key)),
        y: obj[key]
    }));
}

function convertLine(obj) {
    data_list = []
    return Object.keys(obj).map(key => ({
        name: key,
        data: toXY(obj[key])
    }));
}

function getDataLine() {
    return convertLine(data_dictionary)
}

function convertPie(obj) {
    data_list = []
    return Object.keys(obj).map(key => ({
        name: key,
        y: obj[key]
    }));
}

function getDataPie() {
    return convertPie(pie_dictionary)
}

exports = { getDataLine, getDataPie }

