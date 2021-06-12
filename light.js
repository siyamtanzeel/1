let line1 = document.querySelector("#line-1");
let line2 = document.querySelector("#line-2");
let line3 = document.querySelector("#line-3");
let modeToggle = document.querySelector("#mode-toggle");

//menuClick
document.querySelector("#menubtn").addEventListener("click",function(){

    document.querySelector("#menu").classList.toggle("left-full");
    document.querySelector("#menu").classList.toggle("pb-10");
    document.querySelector("#menu").classList.toggle("bg-black");
    document.querySelector("#menu").classList.toggle("bg-opacity-70");
    document.querySelector("#menu").classList.toggle("backdrop-filter");
    document.querySelector("#menu").classList.toggle("backdrop-blur-md");
    line1.classList.toggle("transform");
    line1.classList.toggle("rotate-45");
    line1.classList.toggle("relative");
    line1.classList.toggle("top-1.5");
    line2.classList.toggle("hidden");
    line3.classList.toggle("transform");
    line3.classList.toggle("-rotate-45");
},false);

modeToggle.addEventListener("click",function(){
    document.querySelector("#togbtn").classList.remove("justify-end");
    document.querySelector("#togbtncircle").classList.toggle("justify-start");
    document.querySelector(".fa-moon").classList.add("text-yellow-400");
    document.querySelector(".fa-sun").classList.remove("text-yellow-400");
})