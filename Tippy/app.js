const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberofpeople = document.getElementById('numberofpeople');
const perpersontotal = document.getElementById('perpersontotal');
const totaltip = document.getElementById('tip');
const darkMode=document.getElementById('dark-mode');
const body=document.querySelector("body");

let numberOfPeople = Number(numberofpeople.innerText);

const calculateBill = () => {
	const bill = Number(billTotalInput.value);
	const tipPercentage = Number(tipInput.value) / 100;
	const tip = bill * tipPercentage;
	const total = bill + tip;
	const perPersonBill = Math.floor((total / numberOfPeople)*100)/100;
	perpersontotal.innerText = `$${perPersonBill}`;
	totaltip.innerText = `$${total}`;
};

const increasepeople = () => {
	numberOfPeople++;
	calculateBill();
	numberofpeople.innerText = numberOfPeople;
	new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_79fff979bc.mp3').play();
};
const decreasepeople = () => {
	if (numberOfPeople > 1) {
		numberOfPeople--;
		calculateBill();
		numberofpeople.innerText = numberOfPeople;
		new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_79fff979bc.mp3').play();
	}
};

const preventAlphabets = e => {
	const key = e.keyCode;

	if (key >= 65 && key <= 90) e.preventDefault();
};

const switchDarkMode=()=>{
	if(darkMode.classList.contains("fa-sun-o")){
		darkMode.classList.remove("fa-sun-o");
		darkMode.classList.add("fa-moon-o");
		darkMode.style.color="white";
		document.body.style.backgroundImage = "url('https://infatuation.imgix.net/media/images/guides/dark-chicago-restaurant-power-rankings/Izakaya_sandynoto.jpg')";
	}
else{
	darkMode.classList.remove("fa-moon-o");
	darkMode.classList.add("fa-sun-o");
	document.body.style.backgroundImage = "url('jay-wennington-N_Y88TWmGwA-unsplash.jpg')";
	}
}

billTotalInput.addEventListener('keydown', preventAlphabets);
tipInput.addEventListener('keydown', preventAlphabets);
