// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var btnSubmit = document.getElementById("submit-button");
var mainContact = document.getElementById("contact-page");

var endWords = document.createElement("p");
endWords.setAttribute("id","endWords");

endWords.innerHTML = "Thank you for your message !";
endWords.style.fontSize = "24px";

function submitResult(){
	console.log(endWords);
	
	mainContact.replaceChildren(endWords);
	
}

btnSubmit.addEventListener("click",submitResult);
	  