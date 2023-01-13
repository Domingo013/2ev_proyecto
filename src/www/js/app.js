/**
	@file Contiene el controlador principal de la aplicación
	@autor Domingo Miño Redondo
**/
import {Modelo} from './modelo.js'

import {VistaNav} from './vistanav.js'
import {VistaInicio} from './vistainicio.js'
import {VistaCRUD} from './vistacrud.js'
import {vistaMostrar} from './vistamostrar.js'
/**
 * Controlador de la aplicación
**/
class Controlador{
	/**
		Constructor de la clase
		Llama al método iniciar al cargarse la página
	**/
	constructor(){
		window.onload = this.iniciar.bind(this)
	}
	/**
		Inicia la aplicación
		Crea el modelo y las vistas.
	**/
	iniciar(){
		this.modelo = new Modelo()

		this.nav = document.getElementsByTagName('nav')[0]
		this.divInicio = document.getElementById('divInicio')
		this.divCRUD = document.getElementById('divCRUD')
		this.divMostrar = document.getElementById('divMostrar')

		this.vistaNav = new VistaNav(this, this.nav)
		this.vistaInicio = new VistaInicio(this.divInicio)
		this.vistaCRUD = new VistaCRUD(this.divCRUD, this)
		this.vistaMostrar = new vistaMostrar(this.divMostrar, this)
	}
	/**
		Oculta todas las vistas.
	**/
	ocultarVistas(){
	    this.vistaInicio.mostrar(false)
	    this.vistaCRUD.mostrar(false)
	    this.vistaMostrar.mostrar(false)
	}
	/**
		Atención a la pulsación del enlace al Inicio en el menú de navegación.
	**/
	pulsarNavInicio(){
		this.ocultarVistas()
		this.vistaInicio.mostrar(true)
	}
	/**
		Atención a la pulsación del enlace al CRUD en el menú de navegación.
	**/
	pulsarNavCRUD(){
		this.ocultarVistas()
		this.vistaCRUD.mostrar(true)
	}
	/**
		Atención a la pulsación del enlace al Juego en el menú de navegación.
	**/
	pulsarNavJuego(){
		this.ocultarVistas()
		this.vistaMostrar.mostrar(true)
	}
	/**
	 * Devuelve el modelo de la aplicación
	 * @return {Modelo} El modelo de la aplicación
	 **/
	getModelo(){
		return this.modelo
	}
}

const app = new Controlador()