
let count=1;


function fill(control)
{
	if(count<=9)
	{
	
	if(count%2!=0)
	{
	putData(control.id,"X");
	}
	else
	{
		putData(control.id,"O");
	}
	count++;
	if(checkWin())
	{
		alert("winner");
		reset();
	
	}
	
   }
	
   else
	{
		alert("Match Draw");
		reset();
	}

}
function reset()
{
	for(let i=1;i<=9;i++)
	{
		putData("div"+i,"");
	}
	count=1;
}

function checkWin()
{
	if(checkCondition("div1","div2","div3")||checkCondition("div1","div5","div9")||checkCondition("div1","div4","div7")||checkCondition("div3","div5","div7")||checkCondition("div4","div5","div6")
	||checkCondition("div7","div8","div9")||checkCondition("div2","div5","div8")||checkCondition("div3","div6","div9"))
	{
		return true;
	}
	
}
function putData(div,data)
{
	document.getElementById(div).innerHTML=data;
}

function checkCondition(div1,div2,div3)
{
	if(getData(div1)!=""&& getData(div2)!=""&&getData(div3)!=""
	&&getData(div2)==getData(div1)&&getData(div2)==getData(div3))
	{
		return true;
	}
	
}
function getData(div)
{
	return document.getElementById(div).innerHTML;
}