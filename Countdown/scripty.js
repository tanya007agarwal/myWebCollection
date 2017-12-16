
var secRem=0,intHan;

function resetPage()
{
	document.getElementById("inputArea").style.display = "block";
}

function tick()
{
	if(secRem === 0)
	{
		alert("Done!");
		clearInterval(intHan);
		resetPage();
	}
	var M,S;
	M=Math.floor(secRem/60);
	S=secRem - M*60;
	if(S<10)
	S = "0" + S;
	document.getElementById("time").innerHTML = M.toString() + ":" + S;
	secRem--;
}


function startclock()
{
    var inpMin = document.getElementById("min").value;
	if(isNaN(inpMin)||inpMin>=10)
	{
	    alert("Please Enter a number<10");
		return;
	}
	secRem=60*inpMin;
	intHan = setInterval(tick,1200);
	
}


window.onload = function() {

    var inputMin = document.createElement("input");
	inputMin.setAttribute("id","min");
	inputMin.setAttribute("type","text");

    var myButton = document.createElement("input");
	myButton.setAttribute("id","Button");
	myButton.setAttribute("type","button");
	myButton.setAttribute("value","Start Coundown");
	myButton.onclick = function()
	{
	      startclock();
    }
	
	document.getElementById("inputArea").appendChild(inputMin);
	document.getElementById("inputArea").appendChild(myButton);
}