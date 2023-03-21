const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = '#';
    for(var i=0; i<6; i++)
    {
        const randomNo=Math.floor(Math.random()*hex.length);
        hexColor += hex[randomNo];
    }
    document.body.style.backgroundColor=hexColor;
    color.textContent=hexColor;

});
