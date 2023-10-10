//const conexion = require("conexion.js");
const databaseProductos = require('./database/productos.json');
var productosCarnes = databaseProductos;


const login = (req,res,next) => {
	res.render('login',{
	});
};

const home = (req,res,next) => {
	res.render('home',{
	});
};

const cotizador = (req,res,next) => {
	
	var newSince = new Date()
	var newUntil = sumarDias(newSince, +15).toLocaleDateString();
	newSince = new Date().toLocaleDateString();
	

	res.render('cotizador',{

		title:"Cotizador",
		estilo:"css/cotizador.css",
		productoscarnes : productosCarnes,
		newSince: newSince,
		newUntil: newUntil,
	});
};

const findproduct = (req,res) => {
	
	idseleccion = Number(req.body.productoselect);
	console.log(idseleccion);
	//res.redirect('/cotizador');

};

const inventario = (req,res,next) => {
	res.render('inventario',{
		title:"inventario",
		estilo:"css/inventario.css",
	});
};

const tablerocomercial = (req,res,next) => {
	res.render('tablerocomercial',{
		title:"Tablero Comercial",
		estilo:"css/tableros.css",
	});
};

const tablerofinanciero = (req,res,next) => {
	res.render('tablerofinanciero',{
		title:"Tablero Financiero",
		estilo:"css/tableros.css",
	});
};

const tablerocompras = (req,res,next) => {
	res.render('tablerocompras',{
		title:"Tablero Compras",
		estilo:"css/tableros.css",
	});
};

const tableroinventario = (req,res,next) => {
	res.render('tableroinventario',{
		title:"Tablero Inventario",
		estilo:"css/tableros.css",
	});
};

const index = (req,res,next) => {
	res.render('index',{
	});
};

function sumarDias(fecha, dias){
	fecha.setDate(fecha.getDate() + dias);
	return fecha;
}

module.exports = {
	login,
	home,
	cotizador,
	findproduct,
	inventario,
	tablerocomercial,
	tablerofinanciero,
	tablerocompras,
	tableroinventario,
  	index,
};
