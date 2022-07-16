function codevisibility(ele)
	{	
		var id = ele.id;
		document.getElementById("htmlcode").style.display = "none"; 
		document.getElementById("csscode").style.display = "none"; 
		document.getElementById("jscode").style.display = "none"; 
		var elem = document.getElementById(id+"code");
		elem.style.display = "block";
		html.style.color = " rgba(0, 0, 0, 0.54)";
		css.style.color = " rgba(0, 0, 0, 0.54)";
		js.style.color = " rgba(0, 0, 0, 0.54)";
		ele.style.color = " rgb(80, 99, 240)"
	}

function reset()
{
	document.querySelector("#container #htmltext").value = "<!-- Enter HTML code here -->";
	document.querySelector("#container #csstext").value = "/* Cascading Style Sheet code */";
	document.querySelector("#container #jstext").value = "/* JavaScript code */";
	run();
 
}

function run()
{
	htmlrun = document.querySelector("#container #htmltext").value;
	cssrun = "<style>"+document.querySelector("#container #csstext").value+"</style>";
	jsrun = document.querySelector("#container #jstext").value;
	out = document.getElementById("output");
	out.contentDocument.body.innerHTML = htmlrun;
	
	out.contentDocument.head.innerHTML = cssrun ;

	out.contentWindow.eval(jsrun);
	

}

document.getElementById("htmltext").addEventListener("keyup",run);
document.querySelector("#container #csstext").addEventListener("keyup",run);

document.querySelector("#container #jstext").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      run();
    }
});
