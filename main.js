var win = window.open("https://l.o3.ru/t/QdKQjM","_tab")
var i = 0;

function showrep(){

	if (i == 0){
	win.location.replace=("https://asc.s.o3.ru/","_tab");

	i++;
	}
	else if (i == 1){
	win.location.replace=("https://l.o3.ru/t/dDBYjE","_tab");
	i++;

	}

	else if (i == 2){
	win.location.replace=("https://l.o3.ru/t/a4JKjo","_tab");
	i++;
	}
	else if (i == 3){
	win.location.replace=("https://l.o3.ru/t/73X1QN","_tab");
	
	i=0;
	}
}
setInterval(showrep, 20000);
