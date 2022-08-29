const hourEl = document.querySelector("#hour");
const minEl = document.querySelector("#min");
const secondEl = document.querySelector("#second");
const ampmEl = document.querySelector("#ampm");

function clock(){
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let ampm = "AM";

    if(hour >12 ){
        hour = hour - 12;
        ampm = "PM";
    }
    hourEl.innerText = hour;
    minEl.innerText = min;
    secondEl.innerText = seconds;
    ampmEl.innerText = ampm;
    setTimeout(()=>{
        clock();
    }),1000
}
clock();