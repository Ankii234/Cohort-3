// const main = document.querySelector("main");

// main.addEventListener("click", (e)=>{
//    console.log(e.target)
// });

// let random = Math.random() * 3;
// Math.floor(random);
// console.log(random);

const main = document.querySelector("main");

const btn = document.querySelector("button");
const timer = document.querySelector("#timer");
const scoore = document.querySelector("#score");
const overlay = document.querySelector("#overlay");

const box = document.createElement('div')
box.classList.add('box')

let time = 0;
let interval;
let score = 0;


const randomColor = () =>{
 let r = Math.floor(Math.random() * 256);
 let g = Math.floor(Math.random() * 256);
 let b = Math.floor(Math.random() * 256);

 return `rgb(${r}, ${b}, ${g})`;
}


const randomBox = () =>{
   box.style.backgroundColor = randomColor();
   main.append(box);

   mainH = main.clientHeight - box.offsetHeight;
   mainW = main.clientWidth - box.offsetWidth;
   
   const rY = Math.random() * mainH;
   const rX = Math.random() * mainW;

   box.style.top = `${rY}px`;
   box.style.left = `${rX}px`;
}


btn.addEventListener('click', () =>{
   main.append(box);
   clearInterval(interval)

   interval = setInterval(() => {
     randomBox();
     time +=1;

   timer.textContent= time;
   }, 1000);

   setTimeout(() => {
      clearInterval(interval);
      overlay.style.display = "flex";
   }, 10000);
})

box.addEventListener('click', ()=>{
   score +=1;
   scoore.textContent = score;
})


