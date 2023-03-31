console.log('tis done!')

let theButtons = document.querySelectorAll('button');


let taylorButton = document.querySelectorAll(".taylorInfo");
let taylorInfo = document.querySelector("#partner1Hero");
let taylorList = document.querySelector('#taylorList');


let doggoButton = document.querySelectorAll(".doggoInfo");
let doggoInfo = document.querySelector("#partner2Hero");
let doggoList = document.querySelector('#doggoList');



let menuButton = document.querySelector("#hamburger");
let burgerCon = document.querySelector("#burger-con");



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
            headline: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus, quia, corporis alias ipsum praesentium maxime minus necessitatibus doloremque, repellendus iste optio. Nulla earum nisi alias reiciendis ipsam quos ab.",
            avatar: "Taylor.jpg",
        },
    
        doggo: {
            name: "Millie-Ann Bean",
            headline: "no one",
            bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusamus, quia, corporis alias ipsum praesentium maxime minus necessitatibus doloremque, repellendus iste optio. Nulla earum nisi alias reiciendis ipsam quos ab.",
            avatar: "blank-icon.jpg",
        }
    };        
// function listMember () {
//     // if (theList.children.length > 0) {
//         theList.innerHTML = "";
//     //     return;
//     // }

//     for (item in team[this.dataset.member]) {
//         let newItem = document.createElement ('li');
//         newItem.textContent = team[this.dataset.member][item];
//         theList.appendChild(newItem);
//     }
// }



	function hamburgerMenu() {
        console.log("fired");
		burgerCon.classList.toggle("slide-toggle");
		menuButton.classList.toggle("expanded");
	};



	function taylor() {
	console.log("fired");

		taylorInfo.classList.toggle("open");
		// taylorInfo.classList.toggle("m-col-start-1","m-col-end-8");
		// taylorButton.classList.toggle("expanded");

           // if (theList.children.length > 0) {
        taylorList.innerHTML = "";
        //     return;
        // }
    
        for (item in team[this.dataset.member]) {
            let newItem = document.createElement ('li');
            newItem.textContent = team[this.dataset.member][item];
            taylorList.appendChild(newItem);
        }
	};

	function doggo() {
	console.log("fired");

		doggoInfo.classList.toggle("open");
        // doggoInfo.classList.toggle("m-col-start-6","m-col-end-12");

		// doggoButton.classList.toggle("expanded");

        // if (theList.children.length > 0) {
        doggoList.innerHTML = "";
        //     return;
        // }
    
        for (item in team[this.dataset.member]) {
            let newItem = document.createElement ('li');
            newItem.textContent = team[this.dataset.member][item];
            doggoList.appendChild(newItem);
        }
	};
	taylorButton.forEach(button => button.addEventListener("click", taylor));

	doggoButton.forEach(button => button.addEventListener("click", doggo));

	menuButton.addEventListener("click", hamburgerMenu, false);

// theButtons.forEach(member => member.addEventListener('click', listMember));
