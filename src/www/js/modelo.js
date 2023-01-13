/**
	@file Contiene el modelo de la aplicación
	@autor Domingo Miño Redondo
**/

/**
	Clase Modelo
	Gestiona los datos de la aplicación.
**/
export class Modelo{
	/**
		Constructor de la clase
	**/
	constructor(){
		this.lista = [] //Array de datos
		this.callbacks = [] //Array de callbacks para implementar el observador
	}
	/**
	 * Devuelve los datos del modelo.
	 * En este modelo tan simple, es fácil. En proyectos más complejos, será más elaborado
	 * #return {Array} Datos del modelo
	 **/
	getDatos(){
	    return this.lista
	}
}