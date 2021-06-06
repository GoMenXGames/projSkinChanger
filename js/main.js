let app = new Vue ({
  el: "#app",
  data: {

  },
  methods: {

  },
  computed: {

  },
  created() {

  },

  mounted() {

  },
});

console.log('Hello!');

let username = prompt("What is your name adventurer?", 'user');
alert(`You are welcome ${username} !`);
document.querySelector(".nickname").innerText = username;
console.log(`Nickname changed on ${username}`);
let favnickcolor = 'random';

switch (username) {
  case 'GoMenXGames':
    favnickcolor = 'slateblue';
    break;
  case 'Kosmen21':
    favnickcolor = 'orange';
    break;
  case 'BS01':
    favnickcolor = 'green';
    break;
  case 'TerensLH':
    favnickcolor = 'darkblue';
    break;
  case 'UKATAIKA':
    favnickcolor = 'yellow';
    break;
  default:
    favnickcolor = 'random';
}

let itemrare = 'common';

let favcolor = prompt(`What is your favorite color ${username}?`, favnickcolor);
colorswapper(document.querySelector(".nickname"));

let rand_weight = Math.round(Math.random()*200);

document.querySelector(".statwght").innerText = ` ${rand_weight}`

let rand_defence = Math.round(Math.random()*999);

document.querySelector(".statdef").innerText = ` ${rand_defence}`

function colorswapper(elem) {
  if (favcolor == 'random') {
    console.log('Randomizate favcolor');
    let Rc = Math.round(Math.random()*255);
    let Gc = Math.round(Math.random()*255);
    let Bc = Math.round(Math.random()*255);
    console.log (`rgb(${Rc},${Gc},${Bc})`);
    favcolor = `rgb(${Rc},${Gc},${Bc})`
    elem.style.color = `${favcolor}`;
    console.log(`Color changed on ${favcolor}`);
  }
  else {
    elem.style.color = `${favcolor}`;
    console.log(`Color changed on ${favcolor}`);
  }
}


  function choose(e) {
    let ClickedButtonText = e.innerText;
	let imagepath = e.firstElementChild.alt;
  document.querySelector(".menuTitle").innerHTML = `Choose new <img src="images/armor/iron/${imagepath}.png" alt="${imagepath}">	 ${ClickedButtonText}:`;
  }

switch (itemrare) {
  case 'common':
    rarecolor = 'gray';
    break;
  case 'uncommon':
    rarecolor = 'lightblue';
    break;
  case 'rare':
    rarecolor = 'orange';
    break;
  case 'epic':
    rarecolor = 'red';
    break;
  case 'legendary':
    rarecolor = 'yellow';
    break;
  default:
    rarecolor = 'random';
}

  //
  // let armor = s {
	//   iron {
	// 	  helmet{
	// 		  rare: "common",
	// 		  defence: 3,
	// 		  wieght: 3
	// 	  }
	// 	  chestplate{
	// 		  rare: "common",
	// 		  defence: 6,
	// 		  wieght: 5
	// 	  }
	// 	  leggengs{
	// 		  rare: "common",
	// 		  defence: 5,
	// 		  wieght: 4
	// 	  }
	// 	  boots{
	// 		  rare: "common",
	// 		  defence: 2,
	// 		  wieght: 2
	// 	  }
	//   }
	//   dark {
	// 	  helmet{
	// 		  rare: "uncommon",
	// 		  defence: 9,
	// 		  wieght: 8
	// 	  }
	// 	  chestplate{
	// 		  rare: "rare",
	// 		  defence: 14,
	// 		  wieght: 12
	// 	  }
	// 	  leggengs{
	// 		  rare: "epic",
	// 		  defence: 46,
	// 		  wieght: 15
	// 	  }
	// 	  boots{
	// 		  rare: "legendary",
	// 		  defence: 999,
	// 		  wieght: 50
	// 	  }
	//   }
  // };
