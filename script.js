const img = document.querySelector("div");
const like = document.querySelector("i");

img.addEventListener("dblclick", ()=>{
    like.style.opacity=0.8;
    like.style.transform="scale(1)";

    setTimeout(() => {
        
        like.style.opacity=0;
        like.style.transform="scale(0)";
    },500);
});