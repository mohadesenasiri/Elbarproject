/* */

document.querySelector('.login').addEventListener("click", function () {
    document.querySelector('.popup').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});

document.querySelector('.createuser').addEventListener("click", function () {
    document.querySelector('.password-input').style.display = "none";
    document.querySelector('.btn-login').innerHTML = "دریافت کد فعالسازی";
    document.getElementById("creatlink").style.display="none";
    document.getElementById("loginORcreat").innerHTML="ثبت نام کاربران";
    document.getElementById("loginUser").style.display="flex";
    document.querySelector('.checkbox1').style.display="flex";

});