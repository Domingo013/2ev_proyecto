/**
	@file Contiene la vista del crud de la aplicación
	@autor Domingo Miño Redondo
**/

import {Vista} from './vista.js'

/**
	Vista del CRUD
	Contiene el formulario de inserción y la tabla de listado.
**/
export class VistaCRUD extends Vista{
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