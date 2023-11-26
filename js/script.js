/*
Copyright amir javanmir
Released on: october 12, 2023
*/
const progress = document.querySelector(".progress-bar");
window.addEventListener("scroll", ()=>{
    const scrollPoint = window.scrollY;
    const htmlHeight = document.documentElement.getClientRects()[0].height;
    const winInner = window.innerHeight;
    const res = Math.floor(100/((htmlHeight-winInner)/scrollPoint));
    progress.style.width = `${res}%`
})
