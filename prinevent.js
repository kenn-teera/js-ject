//Primitive ค่าดังเดิมคือ ค่าที่ไม่มี property or method

// string
// number 
// boolean 
// null 
// undefined
// symbol 
// bigint 

//Event 

// onclick
// onchange
// onload
// onkeydown
// onmouseover
// onmouseout

const button = document.getElementById("myBtn");
const changeColor = document.getElementById("changeColor")

button.addEventListener("click",function(){
    const myText = document.getElementById("myText");
    myText.textContent = "This text is gone"
})

changeColor.addEventListener("mouseover",function(){
    const myBody = document.getElementById("myBody");
    myBody.style.backgroundColor = "red";
})

changeColor.addEventListener("mouseout",function(){
    const myBody = document.getElementById("myBody");
    myBody.style.backgroundColor = "white";
})