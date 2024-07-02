/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var dayCost = 0;
var dayRate = 0;
var btnSelect = null;
var days = 0; 


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var btn_mon = document.getElementById("monday");
var btn_tue =document.getElementById("tuesday");
var btn_wed =document.getElementById("wednesday");
var btn_thu =document.getElementById("thursday");
var btn_fri =document.getElementById("friday");

	

function changeDaysColor(){
	if(this.style.backgroundColor != ""){
		cleanColor(this);
		days--;
		recalculate();
	}
	else{
		this.style.backgroundColor = "#E5AF42";
		days++;
		recalculate();
	}
}




var btn_full = document.getElementById("full");
var btn_half = document.getElementById("half");

function changeLengthColor(){
	
	if( btnSelect == null || btnSelect.innerHTML != this.innerHTML )
	{
		this.style.backgroundColor = "#E5AF42";
		cleanColor(btnSelect);
		btnSelect = this;
		changeRate(this);
	}
}

function cleanColor(btn){
		if(btn != null){
			btn.style.backgroundColor = "";	
		}		
}


btn_half.addEventListener("click",changeLengthColor);
btn_full.addEventListener("click",changeLengthColor);

btn_mon.addEventListener("click",changeDaysColor);
btn_tue.addEventListener("click",changeDaysColor);
btn_wed.addEventListener("click",changeDaysColor);
btn_mon.addEventListener("click",changeDaysColor);
btn_thu.addEventListener("click",changeDaysColor);
btn_fri.addEventListener("click",changeDaysColor);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const btnList = [btn_mon, btn_tue,btn_wed,btn_thu,btn_fri,btn_full,btn_half];

function clearDays(){
	days =0;
	btnSelect = null;
	dayRate = 0;
	for(let i=0; i < btnList.length ; i++ ){
		cleanColor(btnList[i]);
	}
	recalculate();
}

var btn_clear = document.getElementById("clear-button");
btn_clear.addEventListener("click",clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeRate(btn){
	if(btn.innerHTML == "half"){
		dayRate = 20;
		recalculate();
	}
	else if (btn.innerHTML == "full"){
		dayRate = 35;
		recalculate();
	}
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


function recalculate(){
	dayCost = dayRate*days;
	var totleCose = document.getElementById("calculated-cost");
	totleCose.innerHTML = dayCost;
}