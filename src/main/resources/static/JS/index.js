document.addEventListener("DOMContentLoaded", () => {
    console.log("ready")
    console.log(getCurrentTime())
  if (localStorage.getItem("hasCodeRunBefore") === null ) {
      fetch("api/v1/items/loadSampleItems", {method: "GET"}).then(() => console.log("ITEMS FETCHED"))
      localStorage.setItem("hasCodeRunBefore", true)
  }

    getThings()

    /*let item = {
        nameOfItem: document.getElementById("itemName").val,
        description: document.getElementById("description").val,
        numberOfItems : document.getElementById("numberOfItems").val,
        timestamp: getCurrentTime().val,
        userCreated: document.getElementById("owner").val
    }*/


    //submitting to the form
document.getElementById("btn-submit").addEventListener("click", () => {
    addItems(item)
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

async function addItems(item) {
    console.log(item)
    await fetch("api/v1/items/addItem", {
            method: "POST",
            body: item
        },
    ).then(res => console.log(res.json())).then(data => getThings())
}

function getCurrentTime() {
    return Intl.DateTimeFormat("no-NO").format(Date.now())
}

function displayItems(items) {
    let out =""
    out = "<table class='table'><tr><th>Name</th><th>No. of items</th><th>Description</th><th>Time created</th></tr>"
    for (let i of items) {
        out += "<tr><td>" + i.itemNumber + "</td><td>" + i.nameOfItem + "</td><td>" + i.description + "</td><td>" + i.timeStamp + "</td> </tr>"
    }
    out += "</table>"

    document.getElementById("show-items").innerHTML = out
}