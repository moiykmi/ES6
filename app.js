

//Metodos EMC6


var saludo ="Hola Mundo!";


//Metodo para saber si una palabra empieza con texto señalado.
console.log(saludo.startsWith("Hola"));

//Metodo para saber si una palabra finaliza con texto señalado.
console.log(saludo.endsWith("!"));

//Metodo para saber si la palabra tiene el o los caracteres señalados.
console.log(saludo.includes("u"));

//Metodo para saber si una palabra empieza con texto señalado,
//dando el index donde buscar.
console.log(saludo.startsWith("Mu",5));

//Metodo para saber si una palabra tiene el o los
//caracteres señalados dando el index donde buscar.
console.log(saludo.includes("a",5));




//metodo string para repetir texto.
let texto = "Hola";

console.log(texto.repeat(2));
console.log("adios".repeat(2));

//--Ejemplo del metodo repetir

//---respuesta
//Fernando    |99887766
//Melissa     |33445566
//Juan        |22334455

const ESPACIO = 12;

let nombres =["Fernando", "Melissa","Juan"];
let telefonos =["99887766","33445566","22334455"];

for(i in nombres){
	let dif = ESPACIO - nombres[i].length;
	console.log(nombres[i]+" ".repeat(dif)+"|"+telefonos[i])
}


//Template Literals

//--uso normal
let nombre ="Maria";
let apellido = "Perez";
let nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//--uso del template
let nombreCompleto2=`El nombre completo es ${nombre} ${apellido}`;
console.log(nombreCompleto2);

//--otra forma de usar template desde una funcion
function obtenerNombre(){
	return "Maria Perez";
}

let nombreCompleto3 =`El nombre completo es ${obtenerNombre()} `;
console.log(nombreCompleto3);

//--otra cosa que nos permite es hacer multilineas
//---------- javascript normal
let multilinea ="<h1>Titulo</h1> \n <p>Hola Mundo</p>";
console.log(multilinea);

//----------EMC6
let multilinea2 =`<h1 class="algo">${nombre}</h1>
<p>${apellido}</p>
I'm Fernando`;
console.log(multilinea2);

//--otro ejemplo de template literal con tag

function etiqueta(literales,...subtituciones){

	//console.log(arguments);
	let resultado = "";

	console.log(literales);
	console.log(subtituciones);

	for(let i =0;i<subtituciones.length; i ++){
		resultado += literales[i];
		resultado += subtituciones[i];
	}


	return resultado;

}

let unidades = 5 , costo_unitario = 10;

let mensaje = etiqueta `${unidades} lapices cuestan ${unidades * costo_unitario} pesos.`;
console.log(mensaje);


//--otro ejemplo de template literals usando RAW

let mensajeRaw = `hola \nMundo\\`,
	mensajeRaw2 =String.raw`hola \nMundo\\`;
console.log(mensajeRaw);
console.log(mensajeRaw2);


//Parametros por defectos o opcionales

function saludo2( mensaje = "Hola Mundo", tiempo =1500){
	//mensaje= mensaje||"Hola Mundo";
	//mensaje = (typeof mensaje !== "undefined")? mensaje : "Hola Mundo2!!";
	setTimeout(function(){
		console.log(mensaje);
	},tiempo);
}
saludo2();

//--otro ejemplo
function saludar(fn = fnTemporal, persona = {nombre:"fernando"}){

	console.log(typeof fn);
	if( typeof fn === "undefined"){
		console.error('No es una función');
		return;
	}

	fn();

	console.log(persona);
}

function fnTemporal(){
	console.log("Hola Mundo FN");
}

var persona = {
	nombre : 'Juan Carlos'
}

saludar(fnTemporal,persona);

//Valores por defectos que afectan a arguments
function sumar(a=1,b=2){

	console.log(arguments)
}

sumar();//no se envia argumentos.


//Parametro REST
function agregar_alumno(arr_alumnos,...alumnos){

	console.log(arguments);

	for(let i = 0 ; i< alumnos.length;i++){
		arr_alumnos.push(alumnos[i]);
	}

	return arr_alumnos;

}

let alumnos_arr = ["Fernando"];

let alumnos_arr2 = agregar_alumno(alumnos_arr,"Maria","Pedro","Susana","Juan");

console.log(alumnos_arr2);

//Restricciones del parametro REST
//--solo puede haber uno en la funcion y siempre al ultimo.


/**      ESTO NO FUNCIONA
function juntar_nombre(...nombres , apellidos){

}
function juntar_nombre(...nombres , ...apellidos){

}
**/


//OPERADOR SPREAD
var numeros = [1,5,10,20,100,234];

//EMC5
var max = Math.max.apply(Math , numeros);

//EMC6
let max2 = Math.max(...numeros);

console.log(max);

console.log(max2);


//EJEMPLO DE SPREAD Y REST
function saludarRest(saludo, ...nombres){
	for(i in  nombres){
		console.log(`${saludo} ${nombres[i]}`);
	}
}

function saludarSpread(saludo, ...nombres){
	console.log(`${saludo} ${nombres}.`);
}

saludarRest("Hola", "Fernando","Maria","Susana");

let personas = ["Melisa","Hernado","Juna"];
saludarSpread("Que Tal!",personas);

//----Otro EJemplo
let partes = ["brazos","piernas"];
let cuerpo = ["cabeza","cuello",...partes,"pies","dedos"];

console.log(cuerpo);


//DOBLE funcionamiento de la funciones (NEW)


//EMC5
/**
function Persona(nombre){

	if( this instanceof Persona ){
		this.nombre = nombre ;	
	}else{
		throw new Error('Esta funcion, debe de ser utilizada con el new');
	}
	
	this.nombre =  nombre;
}
var persona = new Persona("Fernando");

var noEsPersona = Persona.call (persona, "Fernando");
**/

//EMC6
function Persona(nombre){

	if( typeof new.target !== "undefined"){
		this.nombre = nombre ;	
	}else{
	//	throw new Error('Esta funcion, debe de ser utilizada con el new');
	}
	
	this.nombre =  nombre;
}
var persona = new Persona("Fernando");

var noEsPersona = Persona.call (persona, "Fernando");



//Funciones de Flecha

var miFuncion2 = function (valor){
	return valor;
}
let miFuncion1 =  valor => valor;

//---otro ejemplo con 2 parametros
var sumar2=function(num1, num2){
	return num1+ num2;
}
let sumar1 = (num1,num2)=> num1 + num2;

//----Otro ejemplo sin parametros
var saludar2 = function(){
	return "Hola Mundo";
}
let saludar1 = () => "Hola Mundo";

//------otro ejemplo
var saludarPersona = function (nombre){
	var salida = "Hola, "+ nombre;

	return salida;
}
let saludarPersona2 = nombre =>{
	let salida = `Hola, ${nombre}`;
	return salida;
}

console.log(saludarPersona("Fernando"));
console.log(saludarPersona2("Melisa"));

//-------otro ejemplo
var obtenerLibro= function(id){
	return{
		id : id,
		nombre : "Harry Potter"
	}
}
let obtenerLibro2 = id => ({ id : id , nombre : "Harry Potter"});


//Funciones Anonimas
//EMC5
var saludo1 = function (nombre){
	return "Hola " + nombre;
}("Fernando");
console.log(saludo1);
//EMC6
var saludo2 = (nombre =>`Hola ${nombre}`)("Meliza")
console.log(saludo2);

//NO HAY CAMBIOS EN EL OBJETO THIS
//EMC5
/**
var manejador = {
	id :"123",
	init : function(){
		document.addEventListener("click", (function(event){
			this.clickEnPagina(event.type);
		}).bind(this), false);
	},// fin del init

	clickEnPagina : function(type){
		console.log("Manejando "+type + " para el id: "+this.id);

	}
};

manejador.init();
**/

//EMC6
var manejador = {
	id :"123",
	init : function(){
		document.addEventListener("click", 
			event => this.clickEnPagina(event.type));
	},// fin del init

	clickEnPagina : function(type){
		console.log("Manejando "+type + " para el id: "+this.id);

	}
};

manejador.init()


//Funciones de flecha en arreglo arreglo
//EMC5
var arreglo = [5,10,11,2,1,9,20];
var ordenado = arreglo.sort(function(a,b){
	return a-b;
});
console.log(ordenado);

//EMC6
let ordenadoES6 = arreglo.sort((a,b)=>a-b);
console.log(ordenadoES6);


//Identificado funciones de flechas
var restar= (a,b) => a-b;

console.log(typeof restar);
console.log(restar instanceof Function);

/**esto no funciona ya que no se puede usar el NEW
	var restar2 = new restar(1,2);
**/


/**esto no funciona ya que las funciones de fechas no tiene arguments
	((a,b)=>{
		console.log(arguments[0])
	})();
**/

//de esta forma si funciona
// ya que busca el argument del padre
function ejemplo (x,y){
	((a,b)=>{
		console.log(arguments[0])
	})();
}
ejemplo(10,20);


//DIFERRENCIA EN LOS OBJETOS

//EMC5
var objeto = {
	nombre : "Melissa"
}

//EMC6
function crearPersona(nombre, apellido, edad){
	return{
		nombre ,
		apellido,
		edad
	}
}
var melissa = crearPersona("Melissa", "Flores", 30);

console.log(melissa);

//METODOS SIMPLE O CONCISOS

//EMC5
var persona = {
	nombre : "Fernando",

	getNombre : function(){
		console.log(this.nombre);
	}
}

persona.getNombre();


//EMC6
var persona = {
	nombre : "Fernando",

	getNombre(){
		console.log(this.nombre);
	}
}

persona.getNombre();


//NOMBRE DE PROPIEDADES COMPUTADAS
//EMC5
var persona = {};

var apellido1 = "apellido1";

persona["primer nombre"] = "Fernando";
persona[apellido1] = "Herrera";

console.log(persona["primer nombre"]);
console.log(persona[apellido1]);


var persona ={
	"primer nombre" : "Melissa"
}

console.log(persona["primer nombre"]);

//EMC6
var apellido2 = "primer apellido";

var persona = {
	"primer nombre":"Fernando",
	[apellido2] : "Herrera"
};

console.log(persona["primer nombre"]);
console.log(persona[apellido2]);

var subFijo= " nombre";
var persona = {
	["primer" + subFijo]: "Melissa",
	["segundo" + subFijo]: "Karen"
}

console.log(persona["primer nombre"]);
console.log(persona["segundo"+ subFijo]);

//NUEVO METODO OBJECT.IS()

console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0 ,-0));
console.log("=====");
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN ,NaN));
console.log("=====");
console.log(5 == 5);
console.log(5 == "5");

console.log(5 === 5);
console.log(5 === "5");

console.log("===== 5 contra 5 =====");

console.log(Object.is(5 ,5));
console.log(Object.is(5 ,"5"));


//NUEVO METODO OBJECT:ASSING()

//EMC5
/**
function mezclar(objReceptor,objDonador){
	Object.keys(objDonador).forEach(function(key){
		objReceptor[key] = objDonador[key];
	});

	return objReceptor;
}

var objReceptor = {};
var objDonador = {
	nombre : "mi-archivo.js"
}

console.log(mezclar(objReceptor,objDonador));
**/

//EMC6
function mezclar(objReceptor,objDonador){
	Object.keys(objDonador).forEach(function(key){
		objReceptor[key] = objDonador[key];
	});

	return objReceptor;
}

var objReceptor = {};
var objDonador = {
	get nombre() {
		return "mi-archivo.js"
	}
}

console.log(mezclar(objReceptor,objDonador));











