//api
let ajaxLoadedGrid=()=>{
    let itemGrid=""
    $.ajax({
        url:"../api/grid.json",
        method:"GET",
        type:"json",
        data:{},
        success:function (response) {
            response.map(function (elem,index) {
                itemGrid+=`<div class="filterDiv ${elem.filter} show">
                           <div class="flip-card2">
                           <div class="flip-card-inner2">
                           <div class="flip-card-front2">
                           <img src="${elem.image}" alt="">
                           </div>
                           <div class="flip-card-back2">
                           <a href="Portfolio-Single.html">&#10150</a>
                           <h4>${elem.filter}</h4>
                           <h1>${elem.title}</h1>
                           </div>
                           </div>
                           </div>
                </div>
            `})
            console.log(itemGrid)
            document.getElementById("filter").innerHTML=itemGrid
        }
    })
}
document.addEventListener("DOMContentLoaded",ajaxLoadedGrid)






//filtering
filterSelection('all')
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == 'all') c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
    console.log(x)
}


function AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


