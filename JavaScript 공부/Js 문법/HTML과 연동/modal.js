const $modalwrap =document.querySelector(".modal-wrap");

const $modal =document.querySelector(".modal");

const $close =document.querySelector("#close");

const $open =document.querySelector("#open");

$open.onclick=(e)=>{
    console.log(e.target.innerText);//모달열기
    $modalwrap.style.display= "flex";
}

$close.onclick=(e)=>{
    console.log(e.target.innerText);//close
    $modalwrap.style.display= "none";
}
