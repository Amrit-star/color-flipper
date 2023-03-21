const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNo = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor=colors[randomNo];
    color.innerHTML=colors[randomNo];
    
});