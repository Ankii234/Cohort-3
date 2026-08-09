const form = document.querySelector("form");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");

form.addEventListener("submit", (events)=>{
    events.preventDefault();

    let naam = name.value;
    let surnaam = surname.value;

    console.log(naam, surnaam);
    
    form.reset();
});
