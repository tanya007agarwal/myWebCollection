
function resetPage()
{
	document.getElementById("inputArea").style.display = "block";
}

function myfun() {
	var choosedValue = Math.floor((Math.random() * 10) + 1);
	var value = true;
	while(value) {
		var retVal = prompt("Select a number between (0-10)");
		if( retVal == null)
		{
			alert("Game Ends! :/");
			myfun();
		}
		else if( retVal == choosedValue)
		{
			alert("You won!:)");
			value = false;
			myfun();
		}
		else
		{
			if( retVal< choosedValue ) {
			    alert("Choosed Number is less than the actual value :P");
			}
			else {
				alert("Choosed Number is more than the actual value :P");
			}
		}
	}
}

window.onload = function() {
	myfun();
}