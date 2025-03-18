document.addEventListener("DOMContentLoaded", () => {
    console.log("ready")
    console.log(getCurrentTime())
 /*   if (localStorage.getItem("hasCodeRunBefore") === null) {
        fetch("api/v1/items/loadSampleItems", {method: "GET"}).then(() => console.log("ITEMS FETCHED"))
        localStorage.setItem("hasCodeRunBefore", true)
    }*/

    getThings()


    //submitting to the form
    document.getElementById("btn-submit").addEventListener("click", event => {
        console.log("hellwo")
        addItems()
    })
})

async function getThings() {
    await fetch("api/v1/items/getItems", {
        method: "GET"
    }).then(response =>
        //console.log(response.json())
        response.json()
    ).then(data => displayItems(data))
}

let items;

async function addItems() {
    items = {
        nameOfItem: document.getElementById("itemName").value,
        numberOfitems: document.getElementById("numberOfItems").value,
        description: document.getElementById("description").value,
        userCreated: document.getElementById("owner").value
    }
    console.log(items)

    await fetch('api/v1/items/addItems', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nameOfItem: items.nameOfItem,
                numberOfItems: items.numberOfitems,
                description: items.description,
                userCreated: items.userCreated
            })
        },
    ).then(res => console.log(res.json())).then(data => {
        console.log("data")
        getThings()
    }).catch(error => console.log(error))
}

function getCurrentTime() {
    return Intl.DateTimeFormat("no-NO").format(Date.now())
}

function displayItems(items) {
    let out = ""
    out = "<table class='table table-striped'><tr><th>Item Number</th><th>Name</th><th>No. of items</th><th>Description</th><th>Author</th>><th>Time created</th></tr>"
    for (let i of items) {
        out += "<tr><td>" +i.itemNumber+"</td><td>"+ i.nameOfItem+ "</td><td>" + i.numberOfItems + "</td><td>" + i.description + "</td><td>" +i.userCreated+"</td><td>"+ i.timeStamp + "</td> </tr>"
    }
    out += "</table>"

    document.getElementById("show-items").innerHTML = out
}