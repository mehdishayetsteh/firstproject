// api
let ajaxLoadedCircle=()=>{
    let itemCircle=""
    $.ajax({
        url:"../api/Circle.json",
        method:"GET",
        type:"json",
        data:{},
        success:function (response) {
            response.map(function (elem,index) {
                itemCircle+=`<div class="skill">
                                <div id="percent">
                                    <h1>${elem.percent}</h1>
                                    <h4>${elem.title}</h4>
                                </div>
                                <div class="circleM">
                                    <div class="circleR"></div>
                                </div>
                              </div>
            `})
            console.log(itemCircle)
            document.getElementById("skills").innerHTML=itemCircle
        }
    })
}
document.addEventListener("DOMContentLoaded",ajaxLoadedCircle)

$(document).ready(function (e) {
    let startAngle = 0;
    let unit = 70;

    let animate = function () {
        let rad = startAngle * (Math.PI / 180);
        $('.circleR').css({
            left: 55 + Math.cos(rad) * unit + 'px',
            top:  -15 + unit * (1 - Math.sin(rad)) + 'px'
        });
        if (startAngle === 5){
            $('.circleR').css.stop()
        }
        startAngle--;
    }
    let timer = setInterval(animate, 10);
});


