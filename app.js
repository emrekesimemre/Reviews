const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job:"Web Deweloper",
        img:"./img/istockphoto-1296058958-612x612.jpg",
        text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        name: "Anna Johson",
        job:"Web Desinger",
        img:"./img/istockphoto-954864066-612x612.jpg",
        text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id: 3,
        name: "Peter Jones",
        job:"Intern",
        img:"./img/istockphoto-1253022667-612x612.jpg",
        
        text:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 4,
        name: "Bill Anderson",
        job:"The Boss",
        img:"./img/istockphoto-1253022685-612x612.jpg",
        
        text:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
];

// const img = document.getElementById("person-img");
// const fName = document.querySelector(".fName");

// const job = document.querySelector(".job");
// const info = document.querySelector(".info");

// const backBtn = document.querySelector(".back-btn")
// const nextBtn = document.querySelector(".next-btn")
// const randomBtn = document.querySelector(".random-btn")

// let currentItem = 0;

// window.addEventListener("DOMContentLoaded", ()=>{
//     showPerson();
// });
// function showPerson() {
//     const item = reviews[currentItem];
//     img.src = item.img;
//     fName.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
// };
// nextBtn.addEventListener("click",()=>{
//     currentItem++;
//     if (currentItem > reviews.length - 1) {
//         currentItem = 0;
//     }
//     showPerson();
// })
// backBtn.addEventListener("click",()=>{
//     currentItem--;
//     if (currentItem < 0) {
//         currentItem = reviews.length-1;
//     }
//     showPerson();
// })

// randomBtn.addEventListener("click",() =>{
//     currentItem = Math.floor(Math.random() * reviews.length);
//     showPerson();
// })




let img = document.getElementById("person-img");
let fName = document.querySelector(".fName");
let job = document.querySelector(".job");
let info = document.querySelector(".info");

let backBtn = document.querySelector(".back-btn");
console.log(backBtn);
let nextBtn = document.querySelector(".next-btn");
let randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", ()=>{
    showPerson();
})

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img
    fName.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", ()=>{
    currentItem++;
    if (currentItem > reviews.length-1) {
        currentItem = 0;
    }
    showPerson()
})

backBtn.addEventListener("click", ()=>{
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length-1
    }
    showPerson();
})

randomBtn.addEventListener("click", ()=>{
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
})