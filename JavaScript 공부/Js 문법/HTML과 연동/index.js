//DOM =각 태그들이 지닌 자바스크립트 정보

const $number = document.querySelector("#numbers");
const $increase = document.querySelector("#increase");
const $decrease = document.querySelector("#decrease");

$increase.onclick=()=>{
    let current= parseInt($number.innerText,10);
    $number.innerText=current+=1;
}
$decrease.onclick=()=>{
    let current= parseInt($number.innerText,10);
    $number.innerText= current-=1;
}
