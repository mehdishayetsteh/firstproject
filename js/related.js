let ajaxLoadedRelated=()=>{
    let itemRelated=""
    $.ajax({
        url:"../api/related.json",
        method:"GET",
        type:"json",
        data:{},
        success:function (response) {
            response.map(function (elem,index) {
                itemRelated+=`<div class="itemrelated">
                               <a href="grid.html"><img src="${elem.image}" alt="" style=""></a>     
                              </div>
            `})
            document.getElementById("related").innerHTML=itemRelated
        }
    })
}
document.addEventListener("DOMContentLoaded",ajaxLoadedRelated)