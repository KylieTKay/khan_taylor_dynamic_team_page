console.log('tis done!')

let theButtons = document.querySelectorAll('button'),
theList = document.querySelector('ul');

// rules for working with / creating objects
// 1. needs a name, wrapped in {}
// 2. commas between keys

// let coffeeCup = {
//     // descriptive keys: properties
//     color: "white", // String
//     lidColor: "blue", // String
//     height: 20, //Number
//     contents: "cappucino", // String
//     // functional Keys methods
//     drink : () => { console.log('sippy sip')},
//     mix : () => console.log('add cream, sugar,etc')
// };


// let jemima = {
//     nationality: "Ghanian", // String
//     temperment: "Petty", // String
//     personality: "she's African, what do you think",
//     height: 167, //Number
//     contents: "Plantain Chips", // String

//     eat : () => {console.log('meat')},
//     catchPhrase : () => console.log('im hungry! im tired! why?'),
//     sleep : () => console.log('12hrs if you let her')
// };

// function listProps () {
//     if (theList.childElementCount) {
//         theList.innerHTML = "";
//         return;
//     }

//     for (prop in jemima) {
//         console.log(jemima[prop]);

//         let newProp = document.createElement('li');// <li></li>
//         newProp.textContent = jemima[prop];

//         theList.appendChild(newProp);
//         newProp.classList.add('redList')

//     }
// }

let team = {
        taylor: {
            name: "Taylor Khan",
            headline: "just a sad bitch having a fucking melt-down",
            bio: "wish i were joking literally trying not to cry rn cus my family will just think im dramatic.",
            avatar: "Taylor.jpg",
        },
    
        idfk: {
            name: "i dont fucking know",
            headline: "no one",
            bio: "to be honest everyone already found someone before i could ask, no one was interested.",
            avatar: "blank-icon.jpg",
        }
    }           
function listMember () {
    // if (theList.children.length > 0) {
        theList.innerHTML = "";
    //     return;
    // }

    for (item in team[this.dataset.member]) {
        let newItem = document.createElement ('li');
        newItem.textContent = team[this.dataset.member][item];
        theList.appendChild(newItem);
    }
}

(function(){
	"use strict";
	
	console.log("fired");

	let button = document.querySelector("#hamburger");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	button.addEventListener("click", hamburgerMenu, false);
		
})();

theButtons.forEach(member => member.addEventListener('click', listMember));
