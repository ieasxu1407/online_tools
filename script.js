const btn=

document.getElementById("themeBtn");

btn.onclick=()=>{

document.body.classList.toggle("light");

if(

document.body.classList.contains("light")

){

btn.innerText="☀ 라이트모드";

}else{

btn.innerText="🌙 다크모드";

}

}
