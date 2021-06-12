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

//modeToggleClick
modeToggle.addEventListener("click",changeMode);
function changeMode(){
    document.querySelector("#togbtn").classList.toggle("justify-end");
    document.querySelector("#togbtn").classList.toggle("transition");
    document.querySelector("#togbtn").classList.toggle("ease-in-out");
    document.querySelector("#togbtn").classList.toggle("duration-300");
    document.querySelector(".fa-moon").classList.remove("text-yellow-400");
    document.querySelector(".fa-sun").classList.add("text-yellow-400");

}


/* <div class="flex flex-col items-center bg-gray-900 rounded-lg lg:mx-24 lg:my-10">
                <img class="rounded-full my-10" src="webcvr2.webp" alt="" width="230">
                <div class="bg-gray-800 w-full p-10 rounded-b-lg">
                    <p class="relative w-full text-gray-200 whitespace-pre-line">
                        A web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.Alongside Web design,I also edit photos in a way that viewers love to see.
                        </p>
                        <h1 class="w-full mx-auto mt-5 text-blue-500 font-semibold">Tanzeel Muhammad Siyam</h1>
                        <p class="w-full mx-auto text-gray-600">Web Developer and Photo Editor</p>
                </div>*/