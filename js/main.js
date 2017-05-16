function validateForm(){
var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
var email = document.getElementById("input-email").value;
var password = document.getElementById("input-password").value;
var opciones = document.getElementById("opciones").selectedIndex;
 
if (nombre.charAt(0) != nombre.charAt(0).toUpperCase() || nombre.length == 0 || nombre == ""){

	var caja = document.createElement('span');
	var contenedor = document.getElementById("name");
	var caja1 = contenedor.parentNode;
	caja1.appendChild(caja);
	var texto = document.createTextNode("Ingresa un nombre válido");	                   
	caja.appendChild(texto);

	return caja;
	}

if (apellido.charAt(0) != apellido.charAt(0).toUpperCase() || apellido.length == 0 || apellido == ""){

	var caja = document.createElement('span');
	var contenedor = document.getElementById("lastname");
	var caja1 = contenedor.parentNode;
	caja1.appendChild(caja);
	var texto = document.createTextNode("Ingresa un apellido válido");	                   
	caja.appendChild(texto);

	return caja;
	}

if ((/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))){

	var caja = document.createElement('span');
	var contenedor = document.getElementById("input-email");
	var caja1 = contenedor.parentNode;
	caja1.appendChild(caja);
	var texto = document.createTextNode("Ingresa un correo válido");	                   
	caja.appendChild(texto);

	return caja;
	}

if (password == "123456" || password == "098765" || password.length <= 6){

	var caja = document.createElement('span');
	var contenedor = document.getElementById("input-password");
	var caja1 = contenedor.parentNode;
	caja1.appendChild(caja);
	var texto = document.createTextNode("Ingresa una contraseña válida");	                   
	caja.appendChild(texto);

	return caja;
	}

if (opciones == 0 || opciones == null) {

	var caja = document.createElement('span');
	var contenedor = document.getElementById("opciones");
	var caja1 = contenedor.parentNode;
	caja1.appendChild(caja);
	var texto = document.createTextNode("Debes seleccionar una opción");	                   
	caja.appendChild(texto);

	return caja;
	}


}
