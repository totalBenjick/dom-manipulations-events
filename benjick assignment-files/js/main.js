// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */
var btnShow = document.querySelector(".btn-toggle-menu")
var barraNav = document.querySelector(".nav-menu")
/*var lasAs= document.getElementsByTagName("a")
//console.log(barraNav.style)
var estilosPorDefecto = window.getComputedStyle(lasAs)
console.log(estilosPorDefecto.display);*/

btnShow.addEventListener("click", function (){
	if (barraNav.classList.contains("nav-menu")) {
		barraNav.classList.remove("nav-menu")
		barraNav.classList.add("nav-menu-hidden")
		
	}else if (barraNav.classList.contains("nav-menu-hidden")) {
		barraNav.classList.remove("nav-menu-hidden")
		barraNav.classList.add("nav-menu")
		//lasAs.style.display ="none"
	}

	//rraNav.classList.toggle("nav-menu");

})

/* TASK 2 -- Select/Deslect an Icon */
var btnsCambioColor = document.querySelectorAll(".option")

//console.log(btnsCambioColor);

btnsCambioColor.forEach(function(boton){
	boton.addEventListener("click", function(event){
	var contenido = event.currentTarget;
	var claseActual = contenido.className //option & option selected

	if (claseActual==="option") {
		//boton.classList.remove("option")
		boton.classList.add("selected")
	 } else if (claseActual==="option selected"){
	 	boton.classList.remove("selected")
	 }
	})
})
/* TASK 3 -- Increase total number*/
var btnsSuma = document.querySelectorAll(".point")
var sumaFinal = document.querySelector(".total-points")
//console.log(parseInt(sumaFinal.textContent))

btnsSuma.forEach(function(boton){
	boton.addEventListener("click", function(event){
	var contenido = event.currentTarget;
	var textoSuma = contenido.textContent //option & option selected
	var numba = parseInt(textoSuma);
	var numbaSuma = parseInt(sumaFinal.textContent);
	var sumatoria = numbaSuma + numba
	console.log(sumatoria);
	sumaFinal.textContent = sumatoria
	})
})



/* TASK 4 (Adventure Mode)-- Move Item List to List */

var buenos	 = document.querySelector(".good-standing-list")
var malos = document.querySelector(".probation-list")
var todosLi = document.querySelectorAll(".answer-box li")


todosLi.forEach(function(boton){
	boton.addEventListener("click", function(event){	
	var cadaLi= event.target;
	var estilosPorDefecto = window.getComputedStyle(buenos)
	console.log(cadaLi.className);
	var listaActual = cadaLi.parentNode.className;

	  if(listaActual === "good-standing-list"){
            buenos.removeChild(cadaLi);
            malos.appendChild(cadaLi);
            /*barraNav.classList.remove("nav-menu")
			barraNav.classList.add("nav-menu-hidden")*/

        }else if(listaActual === "probation-list"){
            malos.removeChild(cadaLi);
            buenos.appendChild(cadaLi);
		}

	})
})



/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */















