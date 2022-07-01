$(document).ready(function(){
    $('#birth-date').mask('00/00/0000');
    $('#phone-number').mask('000-000-0000');
   })

   const registerTab = document.getElementsByClassName("register");
   const regTabEl1 = registerTab[0];
   const regTabEl2 = registerTab[1];

   const userTabs = document.getElementsByClassName("users");
   const userTabEl1 = userTabs[0];
   const userTabE12 = userTabs[1];

   let users = [];
   let itemNameInput;
   let amountInput;

   function newUser(itemParam, amountParam) {
    this._item = itemParam;
    this._amount =amountParam;
   }

   let ulEl = document.getElementById("user-list");

   function createUser(){
    itemNameInput = document.getElementById("item").value;
    amountInput = document.getElementById("item").value;
    const theNewUser = new newUser(itemNameInput,amountInput);
    users.push(theNewUser);
    createUserElement(theNewUser);

   }

   function displayUserInfo(userParam){
   
   let ourlistEl = document.createElement("li");
   ourlistEl.classList.add("entry");

    let ourSpans = 
        `
        <span> ${userParam._item} </span>
        <span> ${userParam._amount} </span>
    `;
    ourlistEl.innerHTML = ourSpans;
    ulEl.appendChild(ourlistEl);

   }
