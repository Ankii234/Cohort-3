const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");


let usersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    dob: "2002-05-14",
    email: "aarav.sharma@example.com",
    dp: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Verma",
    dob: "2003-09-21",
    email: "priya.verma@example.com",
    dp: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Rohan Singh",
    dob: "2001-12-03",
    email: "rohan.singh@example.com",
    dp: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 4,
    name: "Ananya Gupta",
    dob: "2004-02-18",
    email: "ananya.gupta@example.com",
    dp: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 5,
    name: "Kabir Malhotra",
    dob: "2002-07-30",
    email: "kabir.malhotra@example.com",
    dp: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

usersData.forEach((elem) => {
   users.innerHTML += `<div class="user_card">
    <div class="img_box">
    <img src="${elem.dp} " alt="img from unsplash">
    </div>
    <div class="text">
    <h2>Name - ${elem.name} </h2>
    <p>Email - ${elem.email} </p>
    </div>
    </div>`;
});

form.addEventListener("submit", (events)=>{
    events.preventDefault();

    let name = inp1.value;
    let email = inp2.value;
    if (name.trim() === "" && email.trim() === "") return;
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
