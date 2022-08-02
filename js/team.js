let ajaxLoadedTeam=()=>{
    let itemTeam=""
    $.ajax({
        url:"../api/team.json",
        method:"GET",
        type:"json",
        data:{},
        success:function (response) {
            response.map(function (elem,index) {
                itemTeam+=`<div class="itemteam">
                        <img src="${elem.image}" alt=""style="">
                        <h4>${elem.member}</h4>
                        <h5>${elem.description}</h5>
                        <div class="hover">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-twitter-square"></i></a>
                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                        </div>
                        <div class="hover1">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-twitter-square"></i></a>
                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                        </div>
                        <div class="hover2">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-twitter-square"></i></a>
                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                        </div>
                        <div class="hover3">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-twitter-square"></i></a>
                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                        </div>
                        </div>
            `})
            document.getElementById("team").innerHTML=itemTeam
        }
    })
}
document.addEventListener("DOMContentLoaded",ajaxLoadedTeam)