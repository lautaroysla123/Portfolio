


//Estoy por usar la libreria MUURI
const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'bienvenidos/a' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	// Agregamos el listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});

	// Agregamos listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	// Eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
});


//boton WHATSAPPS





popupWhatsApp = () => {
  
	let cerrar = document.querySelector('.closePopup');
	let abrir = document.querySelector('.whatsapp-button');
	let popup = document.querySelector('.popup-whatsapp');
	let enviar = document.getElementById('send-btn');
  
	cerrar.addEventListener("click",  () => {
	  popup.classList.toggle('is-active-whatsapp-popup')
	})
	
	abrir.addEventListener("click",  () => {
	  popup.classList.toggle('is-active-whatsapp-popup')
	   popup.style.animation = "fadeIn .6s 0.0s both";
	})
	
	enviar.addEventListener("click", () => {
	let msg = document.getElementById('whats-in').value;
	let relmsg = msg.replace(/ /g,"%20");
	
	   //Es mi numero real, pueden mandarme un mensajito <3 jaja
	 window.open('https://wa.me/+541164326764?text='+relmsg, '_blank'); 
	
	});
  
	tiempo(() => {
	  popup.classList.toggle('is-active-whatsapp-popup');
	}, 3000);
  }
  
  popupWhatsApp();