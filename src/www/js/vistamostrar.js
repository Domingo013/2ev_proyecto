/**
	@file Contiene la vista del juego de la aplicación
	@autor Domingo Miño Redondo
**/

import {Vista} from './vista.js'

export class vistaMostrar extends Vista{
	/**
		Constructor de la clase
		@param div {HTMLDivElement} Div principal de la vista.
		@param controlador {Controlador} Controlador de la vista.
	**/
	constructor(div, controlador){
		super(div)
		this.controlador = controlador
		
	}
}