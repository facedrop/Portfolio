var cars = [
    "imgs/forester.jpg",
    "imgs/impreza.jpg",
    "imgs/outback.jpg",
    "imgs/xv.jpg",
    "imgs/legacy" 
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if(counter === 4){
        counter = 0;
    }

    img.src = cars[counter]
    counter = counter + 1;
});