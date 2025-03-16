document.addEventListener("DOMContentLoaded", () => {
    console.log("ready")
    console.log(getCurrentTime())
    fetch("api/v1/items/loadSampleItems", {method: "GET"}).then(() => console.log("ITEMS FETCHED"))

    getThings()



})

async function getThings() {
    await fetch("api/v1/items/getItems", {
        method: "GET"
    }).then(response =>
        //console.log(response.json())
        response.json()
    ).then(data => displayItems(data))
}

async function addItem(item) {
    await fetch("api/v1/items/addItem", {
            method: 'POST',
            body: item
        },
    ).then(res => console.log(res))
}

function getCurrentTime() {
    return Intl.DateTimeFormat("no-NO").format(Date.now())
}

function displayItems(items) {
    console.log(items)
    out = "<table class='table'><tr><th>Name</th><th>No. of items</th><th>Description</th><th>Time created</th></tr>"
    for (let i of items) {
        out += "<tr><td>" + i.itemNumber + "</td><td>" + i.nameOfItem + "</td><td>" + i.description + "</td><td>" + i.timeStamp + "</td> </tr>"
    }
    out += "</table>"

    document.getElementById("show-items").innerHTML = out
}