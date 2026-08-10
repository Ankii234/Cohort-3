const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");

form.addEventListener("submit", (events)=>{
    events.preventDefault();

    let name = inp1.value;
    let email = inp2.value;
    
    users.innerHTML += `<div class="user_card">
    <div class="img_box">
    <img src="https://images.unsplash.com/photo-1786130995704-30b4863426a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" alt="img from unsplash">
    </div>
    <div class="text">
    <h2>Name - ${name} </h2>
    <p>Email - ${email} </p>
    </div>
    </div>`;
    form.reset();
    
});
