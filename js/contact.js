let get=document.getElementById("submit")
let getData=()=>{
    alert("your message has been delivered to our company")
}
get.addEventListener("click",getData)
let office=document.getElementById("office")
let item=""
let nearOffice=()=>{
    axios.get("../api/office.json").then(function (res) {
        res.data.map(function (elem) {
            item+=`<div class="post">
                <h4>${elem.city}</h4>
                <h4>${elem.address}</h4>
                <h4>${elem.email}</h4>
                <h4>${elem.phone}</h4>
            </div>`
        })
        document.getElementById("root").innerHTML=item
    })
}
document.addEventListener("click",nearOffice)