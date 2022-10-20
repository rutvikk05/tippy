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
};
const decreasepeople = () => {
	if (numberOfPeople > 1) {
		numberOfPeople--;
		calculateBill();
		numberofpeople.innerText = numberOfPeople;
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
		document.body.style.backgroundImage = "none";
		document.body.style.background="#000000";
	}
else{
	darkMode.classList.remove("fa-moon-o");
	darkMode.classList.add("fa-sun-o");
	darkMode.style.color="black";
	document.body.style.background="#ffffff";
	}
}

billTotalInput.addEventListener('keydown', preventAlphabets);
tipInput.addEventListener('keydown', preventAlphabets);
