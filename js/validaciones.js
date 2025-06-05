//Nombramos la función
function valida_envia()
{
	//Definimos los caracteres permitidos en una dirección de correo electrónico
	var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

	//Validamos un campo o área de texto, por ejemplo el campo nombre
	if (document.form.nombre.value.length==0)
	{
		alert("Tiene que escribir su nombre")
		document.form.nombre.focus()
		return 0;
	}

	//Validamos un campo o área de texto, por ejemplo el campo apellidos
	if (document.form.apellidos.value.length==0)
	{
		alert("Tiene que escribir sus apellidos")
		document.form.apellidos.focus()
		return 0;
	}

	//Validamos un campo o área de texto, por ejemplo el campo dirección
	if (document.form.direccion.value.length==0)
	{
		alert("Tiene que escribir su direccion")
		document.form.direccion.focus()
		return 0;
	}

	//Validamos un campo o área de texto, por ejemplo el campo localidad
	if (document.form.localidad.value.length==0)
	{
		alert("Tiene que escribir su localidad")
		document.form.localidad.focus()
		return 0;
	}

	//Validamos un campo de lista/menú, por ejemplo el campo provincia
	if (document.form.provincia.selectedIndex==0)
	{
		alert("Tiene que seleccionar su provincia")
		document.form.provincia.focus()
		return 0;
	}

	//Validamos un campo de texto como numérico, por ejemplo el campo código postal de 5 dígitos
	valor = document.form.cp.value;
	if( !(/^\d{5}$/.test(valor)) ) 
	{
		alert("Tiene que escribir su codigo postal (5 digitos)");
		document.form.cp.focus();
		return 0;
	}

	//Validamos un campo de texto como numérico, por ejemplo el campo teléfono de 9 dígitos
	valor = document.form.telefono.value;
	if( !(/^\d{9}$/.test(valor)) ) 
	{
		alert("Tiene que escribir un telefono de 9 digitos");
		document.form.telefono.focus();
		return 0;
	}

	//Validamos un campo de texto como email
	if ((regexp.test(document.form.email.value) == 0) || (document.form.email.value.length = 0))
	{
		alert("Introduzca una direccion de email valida");
		document.form.email.focus();
		return 0;
	} 
	else 
	{
		var c_email=true;
	}
	//Si todos los campos han validado correctamente, se envía el formulario
	document.form.submit();
}
