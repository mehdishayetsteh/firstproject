let ajaxLoadedPricing=()=>{
    let itemPricing=""
    $.ajax({
        url:"../api/pricing.json",
        method:"GET",
        type:"json",
        data:{},
        success:function (response) {
            response.map(function (elem,index) {
                itemPricing+=`<div class="itempricing">
                        <div>    
                            <i>${elem.level}</i>
                            <div>
                                <h1>${elem.price}</h1>
                                <h4>${elem.price1}</h4>
                            </div>
                        </div>    
                        <h5>${elem.description}</h5>
                        <h5>${elem.description1}</h5>
                        <h5>${elem.description2}</h5>
                        <h5>${elem.description3}</h5>
                        <h5>${elem.description4}</h5>
                        <section>    
                            <a href="">${elem.plan}</a>
                        </section>    
                        </div>
            `})
            document.getElementById("pricing").innerHTML=itemPricing
        }
    })
}
document.addEventListener("DOMContentLoaded",ajaxLoadedPricing)