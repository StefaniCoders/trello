window.addEventListener('load',load);
function load()
{
 
}

var clicked = false;

//FUNCION INICIAL PARA CREAR LA PRIMERA LISTA 
function init(elem)
{
	var parent = elem.parentNode;
	var grandparent = parent.parentNode;
	elem.value = " ";

	if(!clicked)
	{
		var btn1 = create_button("Guardar lista");
		parent.appendChild(btn1);

		var add_link = create_link("Agregar tarea");

		btn1.onclick = function()
		{

		//VERIFICANDO QUE EL VALOR INGRESADO SEA DIFERENTE DE LA CADENA VACIA
		if(elem.value != " ")
		{
			elem.setAttribute("readonly","readonly");
			elem.setAttribute("onclick","");
			parent.removeChild(btn1);
			parent.appendChild(add_link);
			create_list(grandparent);

			clicked = !clicked;

		}
		
		};

		clicked = !clicked;
	}


}

// FUNCIÓN PARA CREAR UNA NUEVA LISTA 
function create_list(parent)
{
	var my_container = document.createElement("div");
	my_container.setAttribute("class","containers");
	
	var my_input = document.createElement("input");
	my_input.setAttribute("type", "text");
	my_input.setAttribute("placeholder", "Agregar lista");
	my_input.setAttribute("onclick","init(this)");
	my_input.setAttribute("class","form-control");

	my_container.appendChild(my_input);
	parent.appendChild(my_container);
}


//FUNCION PARA CREAR UN NUEVO ELEMENTO BOTON E INSERTARLO EN LA PAGINA WEB
function create_button(btn_content)
{
	var my_button = document.createElement("button");

	var my_content = document.createTextNode(btn_content);
	my_button.appendChild(my_content);

	my_button.setAttribute("type","button");
	my_button.setAttribute("class","btn btn-success");
	
	var p_elem = document.createElement("p");
	p_elem.appendChild(my_button);

	return p_elem;
}

//FUNCION PARA CREAR UN NUEVO ELEMENTO LINK E INSERTARLO EN LA PAGINA WEB
function create_link(link_content)
{
	var my_link = document.createElement("a");
	var my_content = document.createTextNode(link_content);
	my_link.appendChild(my_content);
	my_link.href="#";

	var p_elem = document.createElement("p");
	p_elem.appendChild(my_link);

	my_link.onclick = function()
	{
		var parent = my_link.parentNode;
		
		var my_tarea = create_textarea();
		var add_button = create_button("Guardar Tarea");
		
		parent.removeChild(my_link);
		parent.appendChild(my_tarea);
		parent.appendChild(add_button);

		add_button.onclick = function()
		{
			my_tarea.setAttribute("readonly","readonly");
			parent.removeChild(add_button);

			var new_link = create_link("Agregar tarea");
			parent.appendChild(new_link);

		};

	};

	return p_elem;

}

// FUNCION PARA CREAR UN NUEVO ELEMENTO TEXTAREA
function create_textarea()
{
	var my_textarea = document.createElement("textarea");
	my_textarea.setAttribute("class","form-control");
	return my_textarea;
}