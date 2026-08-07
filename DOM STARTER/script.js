// const body = document.body;

// const main = document.querySelector("main")
// console.log(main.childNodes);
// console.log(main.children);

// const h1 = document.querySelector("h1")

// h1.textContent = "(yha pehle ek 'Hey' msg tha )This change is done by the help of DOM";

// const h1 = document.querySelector("h1")
// const isClass = h1.classList.contains("head1")

// // h1.classList.replace("head1", "newHead")
// // h1.classList.toggle("head1")
// const div1 = document.querySelector("#div1");
// div1.classList.add("div2");

// console.log(isClass);

const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
//   bulb.style.backgroundColor = "yellow";
    if(bulb.classList.toggle("lightUp")){
      btn.textContent="Off";
    }else{
        btn.textContent="On";
    }
});