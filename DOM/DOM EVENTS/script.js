const form = document.querySelector("form");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");

form.addEventListener("submit", (events)=>{
    events.preventDefault();
//    console.log(name.value);
//    console.log(surname.value);
      console.log(events.target[0].value);
      console.log(events.target[1].value);
   
})
