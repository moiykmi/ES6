

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

//console.log(mezclar(objReceptor,objDonador));
console.log(Object.assign(objReceptor,objDonador));

console.log(objDonador);


//ORDEN DE LA PROPIEDAD DE LOS OBJETOS
var objeto = {
	c:1,
	0:1,
	x:1,
	15:1,
	r:1,
	3:1,
	b:1
};

objeto.d=1;
objeto["2"]=1;
objeto ["a"]=1;

console.log( Object.getOwnPropertyNames(objeto).join(","));

console.log(Object.keys(objeto));

console.log(JSON.stringify(objeto));

for(i in Object.keys(objeto)){
	console.log(Object.keys(objeto)[i]);
}

//Cambiar el prototipo de un OBJETO
let gato = {
	sonido(){
		console.log("Miau!");
	},
	chillido(){
		console.log("MIAU!!!!!");
	}
};

let perro ={
	sonido(){
		console.log("Guau!!");
	}
};

let angora = Object.create(gato);
console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.chillido();

//Esto transforma el objeto en otro objeto (cambia las cracteristicas).
Object.setPrototypeOf( angora, perro);

console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();


//Acceso al prototipo con la referencia super
let persona3 = {
	saludar(){
		return "Hola";
	}
};

//EMC5
/**
let amigo ={
	saludar(){
		return Object.getPrototypeOf(this).saludar(this)+", saludos!!!";
	}
};

Object.setPrototypeOf(amigo , persona3);
console.log(amigo.saludar());
**/

//EMC6
let amigo ={
	saludar(){
		return super.saludar() + ", saludos !!!";
	}
};

Object.setPrototypeOf(amigo , persona3);
console.log(amigo.saludar());

//DESTRUCTURACIÓN DE OBJETOS 
let ajustes = {
	nombre1 : "Fernando Herrera",
	email : "fernando.herrera85@gmail.com",
	facebook : "fernando.herrera.777",
	google : "fernando.her.123",
	premium : true
};

let { premium:dePago , nombre1 ,google,twitter = "fernando_her85" } = ajustes;

console.log(twitter);


//DESTRUCTURACIÓN DE OBBJETOS ANIDADOS
let autoGuardado = {
	archivo:"app.js",
	cursor :{
		linea :7,
		columna :16
	},
	ultimoArchivo:{
		archivo : "index.html",
		cursor : {
			linea :8,
			columna :20
		}
	},
	otroNodo:{
		subNodo : {
			cursor : {
				linea :11,
				columna :11
			}
		}
	}

};

let {cursor:cursorActivo} = autoGuardado;
console.log(cursorActivo);

let {ultimoArchivo:{ cursor:ultimoArchivo } } = autoGuardado;
console.log(ultimoArchivo);


let { otroNodo : { subNodo:{cursor :otroSuperNodo }}} = autoGuardado;
console.log(otroSuperNodo);

let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log(otroSuperNodo2);


//DESTRUCTURACIÓN DE ARREGLOS
let frutas = ["banano","pera","uva"];

let [ fruta1, fruta2] = frutas;
console.log(fruta1);
console.log(fruta2);

let[,,fruta3]=frutas;
console.log(fruta3);

let otraFruta="manzana";
[ otraFruta ] = frutas;

console.log( otraFruta );

//EMC5 --- ejemplo
let a =1;
let b =2;
let temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

//EMC6
[a,b] = [b,a];

console.log(a);
console.log(b);

//DESTRUCTURACIÓN DE AREEGLOS ANIDADOS
let colores1 = ["rojo",["verde","amarillo"],"morado","naranja"];

let [ color1 , [ color2 ]] =colores1;

console.log(color1);
console.log(color2);

let colores2 = ["rojo","verde","amarillo","morado","naranja"];

//La destructuración con el objeto rest solo sirve en los AREEGLOS
let[ colorPrincipal,colorSecundario, ...demasColores ] = colores2;
console.log(colorPrincipal);
console.log(colorSecundario);
console.log(demasColores);

//VAlORES POR DEFECTOS DE LA DESTRUCTURACIÓN
let frutas2 = ["banano","pera"];

let [ frut1 , frut2 ="manzana" ] = frutas2;

console.log( frut1 );
console.log( frut2 );

let opciones = {
	nombreOp :"Fernando"
};

let { nombreOp , apellidoOp = "Herrera" } = opciones;
console.log(nombreOp , apellidoOp);

//DESTRUCTURACIÓN DE PARAMETROS

/** ---EJEMPLO EMC5
function crearJugador( nickname , opciones ){

	opciones = opciones || {};

	let hp = opciones.hp,
		sp = opciones.sp,
		clase = opciones.clase;

	console.log( nickname , hp , sp , clase );

	//CODIGO PARA CREAR EL JUGADOR.....

}

crearJugador("Strider",{
	hp : 100,
	sp : 50,
	clase : "Mago"
});

**/

function crearJugador( nickname , 
	{ hp , sp , clase } = { hp : 100 , sp : 50 , clase : "Mago"} 
){

	console.log( nickname , hp , sp , clase );

	//CODIGO PARA CREAR EL JUGADOR.....

}

crearJugador("Strider",{
	hp : 200,
	sp : 40,
	clase : "Guerrero"
});

//INTRODUCCIÓN A LOS SÍMBOLOS
let primerNombre = Symbol('primer nombre');
let segundoNombre = Symbol();


let personaS = {
	[segundoNombre] : 'Herrera'
};

personaS [primerNombre] = 'Fernando';

console.log(personaS[primerNombre]);
console.log(personaS[segundoNombre]);
console.log(primerNombre);
console.log(segundoNombre);

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log( Object.is(simbolo1, simbolo2));

console.log(typeof primerNombre);

//esto no se puede
//console.log("Mi simbolo: " +primerNombre);
//console.log(`Mi simbolo es: ${primerNombre}`);

console.log( 'primer nombre' in personaS);
console.log( personaS[primerNombre]);


//COMPARTIENDO SIMBOLOS
let userID = Symbol.for("userID");
let objeto2 = {};

objeto2[userID] = "12345";

console.log(objeto2[userID]);
console.log(userID);


let userID2 = Symbol.for("userID");

console.log(userID == userID2);
console.log(userID === userID2);
console.log(Object.is(userID ,userID2));

console.log(objeto2[userID]);
console.log(userID2);

let id = Symbol.for("id unico");
console.log(Symbol.keyFor(id));

let id2 = Symbol.for("id unico");
console.log(Symbol.keyFor(id2));

console.log(id === id2);

let id3 = Symbol("id unico");
console.log(Symbol.keyFor(id3));//undefined


//COERCIÓN DE SIMBOLOS
let ids= Symbol.for("ids");
let numero =10;
let texto1 = "10";
let bool = true;
let NotAN =NaN;

console.log( "Mi simbolo es: " +String(ids));

//RECUPERANDO LAS PROPIEDADES SIMBOLO
let id5 = Symbol.for("id");
let activo = Symbol.for("activo");

let persona4 = {
	[id5] : "123",
	[activo]:true,
	["codigo"] : "XY123",
	nombre : "Fernando",
	apellido : "Herrera",
	edad : 31
};

console.log(Object.keys(persona4));

for( key in persona4){
	console.log(key , persona4[key]);
}

let simbolos = Object.getOwnPropertySymbols(persona4);
console.log(simbolos);

for(i in simbolos){
	console.log( Symbol.keyFor(simbolos[i]));
}

//SET  (Lista ordenada de valores sin duplicados 
//		lo cual permite un acceso rapido a la data)

//CREANDO SET AGREGANDO ITEM Y BUSCANDO
let items = new Set();
items.add(10);
items.add(11);
items.add(15);
items.add(17);
items.add(17);
items.add(17);
items.add("17");
items.add(17);
//no ingrsa los mismo valores ya que antes de agregar
//Ocupa el Object.is para saber si el valor ya existe 

console.log(typeof items );
console.log(items.size);
console.log(items);


let items2 = new Set([1,2,3,4,5,7,7,7,7,7,7,7]);

console.log(items2.size);
console.log(items2);

//para buscar se puede usar el has
console.log (items2.has(7));

//REMOVIENDO VALORES DE UN SET
let items3 = new Set([1,2,3,4,5]);

console.log(items3.size);
console.log(items3);

items3.delete(3);//Borrar uno

console.log(items3.size);
console.log(items3);

items3.clear();//Borrar todo

console.log(items3.size);
console.log(items3);

//FOREACH EN LOS SET
let personasSet = new Set(["Fernando","Maria","Susana"]);

personasSet.forEach( function (valor, llave, setOriginal){
	console.log(valor, llave , setOriginal);

	console.log(personasSet === setOriginal);
});


//CONVERTIR UN SET EN ARRAY
let numerosA = [1,2,3,4,5,9,7,7,8,3,2,1];

let arrayNumeros = eliminaDuplicados(numerosA);

console.log(arrayNumeros);

//esto sirve para sacar los duplicados
function eliminaDuplicados (items){

	return [...new Set(items)];
}

//WEEKSET
let set = new WeakSet();

let person1={
	nombre : "Juan Carlos"
};

let person2={
	nombre2 : "Maria Perez"
};

set.add(person1);
set.add(person2);

set.delete(person1);

console.log(set);

//LOS MAPAS EN JAVASCRIPT
let mapa = new Map();

mapa.set("nombre", "Fernando" );
mapa.set("edad", 31 );
mapa.set("apellido");

console.log(mapa.size);
console.log(mapa);

console.log(mapa.get("nombre"));
console.log(mapa.get("edad"));
console.log(mapa.has("nombre"));
console.log(mapa.has("apellido"));


mapa.delete("nombre");
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));


mapa.set("edad");
console.log(mapa);


mapa.clear();
console.log(mapa);

//INICIALIZACION DE LOS MAPAS
let mapa1 = new Map([ ["nombre" ,"Fernando"],[null , 1235]]);

console.log(mapa1);

console.log(mapa1.get(null));

//FOREACH EN LOS MAPAS
let mapa2 = new Map([ ["nombre" ,"Fernando"],["edad" , 31]]);

mapa2.forEach(function(valor , llave , mapaOrigen){

	console.log(`llave: ${llave}, valor: ${valor}`);

	console.log(mapaOrigen);
})


mapa2.forEach((valor,llave)=> console.log(`${valor}`));

//NUEVO CICLO FOR-OF
let varionumeros = [100,20,30,50,200];

for(let i = 0;i< varionumeros.length;i++){
	console.log(varionumeros[i]);
}

for(let i in varionumeros){
	console.log( varionumeros[i]);
}

//nueva manera de hacerlo

for (let i of varionumeros){
	console.log(i);
}

let arregloPersonas = [
	{nombre : "fernando", edad:30},
	{nombre : "maria", edad:10},
	{nombre : "Susana", edad:18},
	{nombre : "victor", edad:25},
	{nombre : "juan", edad:40}
]; 


for (let i of arregloPersonas){
	console.log(i.nombre,i.edad);
}

let arregloPersonas2 = new Set();

arregloPersonas2.add({nombre:"fernando", edad : 31});
arregloPersonas2.add({nombre:"ana", edad : 32});
arregloPersonas2.add({nombre:"luis", edad : 12});

for (let i of arregloPersonas2){
	console.log(i.nombre,i.edad);
}


let arregloPersonas3 = new Map ([["nombre","Fernando"],["apellido","Lorca"]]);

for (let i of arregloPersonas3){
	console.log(i);
}

//








