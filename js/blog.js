let ajaxLoadedBLOG=()=>{
    let itemBlog=""
    $.ajax({
        url:"../api/blog.json",
        method:"GET",
        type:"json",
        data:{},
        success:function (response) {
            response.map(function (elem,index) {
                itemBlog+=`<div class="itemblog">
                        <img src="${elem.image}" alt=""style="">
                        <h5>${elem.description}</h5>
                        <a href="blog-detail.html">Read More</a>
                        <div><h1>23 <br> jul</h1></div>
                        </div>
            `})
            document.getElementById("blog").innerHTML=itemBlog
        }
    })
}
document.addEventListener("DOMContentLoaded",ajaxLoadedBLOG)