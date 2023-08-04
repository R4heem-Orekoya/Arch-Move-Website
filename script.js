import clients from "./clients.js";

const searchBtn = document.querySelector('.search');
const searchInput = document.querySelector('.search-area form');
const searchInputValue = document.querySelector('.search-area form input')
const cancelSearchText = document.querySelector('.clear');
const harmburger = document.querySelector('.harmburger');
const navBar = document.querySelector('header .wrapper nav ul');
const modeToggle = document.querySelector('.mode-toggle');

const clientName = document.querySelector('.client-name');
const clientTestimony = document.querySelector('.client-testimony');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.arrow.right');
let index = 0; 


let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark"){
    document.body.classList.add("dark");
    modeToggle.classList.add("active");
}

const updateTestimony = () =>{
    clientName.textContent = `${clients[index].name}`;
    clientTestimony.textContent = `${clients[index].testimony}`;
}

searchBtn.addEventListener('click', ()=>{
    searchInput.classList.toggle('active');
    searchBtn.classList.toggle('active')
})

cancelSearchText.addEventListener('click', ()=>{
    searchInputValue.value = '';
})

harmburger.addEventListener('click', ()=>{
    harmburger.classList.toggle('active');
    navBar.classList.toggle('active');
});

modeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    modeToggle.classList.toggle('active');

    if(!document.body.classList.contains("dark")){
        return localStorage.setItem("mode", "light"); 
    }

    localStorage.setItem("mode", "dark");
})

leftBtn.addEventListener('click', ()=>{
    if(index == 0){
        index = clients.length - 1;
        updateTestimony()
    }
    else{
        index = index - 1;
        updateTestimony();
    }
});

rightBtn.addEventListener('click', ()=>{
    if(index == clients.length - 1){
        index = 0;
    updateTestimony();
    }
    else{
        index = index + 1;
        updateTestimony();
    }
})

window.addEventListener('load', updateTestimony());