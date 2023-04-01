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

	function taylor() {
	console.log("fired");

        let taylorButtonText = document.getElementById('taylorButtonText');

		taylorInfo.classList.toggle("open");
  
        taylorList.innerHTML = "";

        if (taylorButtonText.innerText.match('Learn More')) {
            taylorButtonText.innerText = 'See Less';
            for (item in team[this.dataset.member]) {
                let newItem = document.createElement ('li');
                newItem.textContent = team[this.dataset.member][item];
                taylorList.appendChild(newItem);
            }
        } else {
                taylorButtonText.innerText = 'Learn More';}
    };

	function doggo() {
	console.log("fired");

        let doggoButtonText = document.getElementById('doggoButtonText');


		doggoInfo.classList.toggle("open");

        doggoList.innerHTML = "";

            if (doggoButtonText.innerText.match('Learn More')) {
            doggoButtonText.innerText = 'See Less';
        for (item in team[this.dataset.member]) {
            let newItem = document.createElement ('li');
            newItem.textContent = team[this.dataset.member][item];
            doggoList.appendChild(newItem);
        }
    } else {
        doggoButtonText.innerText = 'Learn More';}

	};

    taylorButton.forEach(button => button.addEventListener("click", taylor));

	doggoButton.forEach(button => button.addEventListener("click", doggo));
