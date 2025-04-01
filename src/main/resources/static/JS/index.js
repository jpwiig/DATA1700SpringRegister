document.addEventListener("DOMContentLoaded", () => {
    console.log("ready")
    console.log(getCurrentTime())
    getThings()


    //submitting to the form
    document.getElementById("btn-submit").addEventListener("click", event => {
        console.log("hello")
        addItems()
    })
    document.getElementById("btn-delete-all").addEventListener("click", () => {
        deleteAll()
    })

})

async function getThings() {
    await fetch("api/v1/items/getItems", {method: "GET"}).then(respons =>
        //console.log(respons.json())
        respons.json()
    ).then(data => displayItems(data))
    //displayItems()
}

let items;

async function addItems() {
    items = {
        nameOfItem: document.getElementById("itemName").value,
        numberOfitems: document.getElementById("numberOfItems").value,
        description: document.getElementById("description").value,
        userCreated: document.getElementById("owner").value
    }
    await fetch("api/v1/items/addItems", {
        method: "POST", headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nameOfItem: items.nameOfItem,
            numberOfItems: items.numberOfitems,
            description: items.description,
            userCreated: items.userCreated
        })
    }).then (res => console.log(res.json())).then(data => {
        console.log(data)
        getThings()
    })
    console.log(items)

}

function getCurrentTime() {
    return Intl.DateTimeFormat("no-NO").format(Date.now())
}

async function deleteAll() {
await fetch("api/v1/items/deleteAll", {method: "DELETE"}).then(()=>{alert("ALT ER SLETTET!")
getThings()
})
}

/*async function deleteOneItem(itemNumber) {
    await fetch("api/v1/items/deleteOneItem", {
            method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
        }
    ).then(() => { <- not part of inital demo, but might fixed in the furture
        alert(`item number ${itemNumber} deleted!`)
        getThings()
    })
}*/

function displayItems(items) {
    let out = ""
    out = "<table class='table table-striped'><tr><th>Item Number</th><th>Name</th><th>No. of items</th><th>Description</th><th>Author</th><th>Time created</th><th>action</th></tr>"
    for (let i of items) {
        out += "<tr><td>" + i.itemNumber + "</td><td>" + i.nameOfItem + "</td><td>" + i.numberOfItems + "</td><td>" + i.description + "</td><td>" + i.userCreated + "</td><td>" + i.timeStamp + "</td>" + `<td><input type='button' id=delete-${i.itemNumber} value='delete item' class='btn btn-danger' onclick='deleteOneItem(${i.itemNumber})'> </td> </td>` + "</tr>"
    }
    out += "</table>"

    document.getElementById("show-items").innerHTML = out
}