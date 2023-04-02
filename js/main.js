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
            Roles: "Product Design | Web Design/Development | Content Management | Editing",
            break: "____",
            Description: "Taylor is a creative at heart, who focused her primary education in design and visual arts which developed a love for Visual Media and Communications. Now a Student of Interactive Media Design at Fanshawe College, Taylor is the Creative Director / Team Lead for Quatro's rebranding.",
        },
    
        doggo: {
            Roles: "A Very Good Girl | Emotional Aide",
            break:"____",
            Description: "This loveable Floof carried the team through thick and thin with her can-do attitude and irresistable charm. Whenever moral was low, she was there to help her team-mates recharge with cuddles and a nap.",
            break2:"-",
            whatIsShe: "Chorkie (Chihuahua/Yorkie)",
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
