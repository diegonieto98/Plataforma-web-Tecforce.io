const express = require('express');
const router = express.Router();

const indexControles = require('./controles.js');

router.get('/', indexControles.login);

router.get('/home', indexControles.home);

router.get('/index', indexControles.index);

//rutas del cotizador
router.get('/cotizador', indexControles.cotizador);
router.post('/cotizador/findproduct', indexControles.findproduct);


router.get('/inventario', indexControles.inventario);

// Tableros en power BI
router.get('/tablero-comercial', indexControles.tablerocomercial);
router.get('/tablero-financiero', indexControles.tablerofinanciero);
router.get('/tablero-compras', indexControles.tablerocompras);
router.get('/tablero-inventario', indexControles.tableroinventario);


module.exports = router;