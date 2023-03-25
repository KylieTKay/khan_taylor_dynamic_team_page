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

let profs = {
    marco: {
        name: 'Marco',
        role: 'Coordinator',
        nickname: 'marco',
        bio: 'something interesting about Marco',
        avatar: 'marco.jpg'
        },
    trevor: {
        name: 'Trevor',
        role: 'Coordinator',
        nickname: 'trevor',
        bio: 'something interesting about Trevor',
        avatar: 'trevor.jpg'
        },
    jarrod: {
        name: 'Jarrod',
        role: 'Coordinator',
        nickname: 'jarrod',
        bio: 'something interesting about Jarrod',
        avatar: 'jarrod.jpg'
        },
    }
            
function listProf () {
    // if (theList.children.length > 0) {
        theList.innerHTML = "";
    //     return;
    // }

    for (item in profs[this.dataset.prof]) {
        let newItem = document.createElement ('li');
        newItem.textContent = profs[this.dataset.prof][item];
        theList.appendChild(newItem);
    }
}
theButtons.forEach(prof => prof.addEventListener('click', listProf));
