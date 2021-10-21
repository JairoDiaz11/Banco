const express=require('express');
const rutas=express.Router();
const controller=require('../controlador/controller');
rutas.get('/',controller.index);
rutas.post('/login',controller.login);
rutas.get('/F_Usuarios',controller.consultageneral);
rutas.get('/Cliente',controller.consultadatoscli);
rutas.post('/frminsertar',controller.insertar);
rutas.get('/Eclientes',controller.consultageneralcliente);

rutas.get('/Admincli',controller.consultageneralclientea);


rutas.get('/Cuentas',controller.consultageneralcuentas);


rutas.get('/Cuentacli',controller.consultacuentacli);

rutas.post('/frminsertarcuentas',controller.insertarcuentas);

rutas.get('/Creditos',controller.consultageneralcredito);
rutas.get('/Lineas',controller.consultagenerallcredito);
rutas.get('/Credcli',controller.consultarcreditoscli);
rutas.get('/Lineascli',controller.consultalineascli);
rutas.post('/frminsertarc',controller.insertarc);
rutas.post('/frminsertarcre',controller.insertarcre);
rutas.post('/frminsertarlcre',controller.insertarlcre);
rutas.get('/Creditos',controller.creditos);
rutas.get('/Lineas',controller.lineas);
rutas.get('/Admin',controller.consultanombrea)
rutas.get('/Cliente',controller.cliente);
rutas.get('/Actcli',controller.consultadatosusu);
rutas.get('/Lineascli',controller.lineascli);
rutas.get('/Credcli',controller.credcli);
rutas.post('/actualizarcli',controller.actdatoscli);
rutas.post('/actualizar',controller.actualizar);
rutas.post('/eliminar',controller.eliminar);
rutas.get('/cerrar',controller.cerrar);
rutas.get('/Empleado',controller.consultanombre);

rutas.post('/eliminarlineas',controller.eliminarlineasc)



rutas.post('/eliminarc',controller.eliminardcliente);

rutas.post('/eliminarcuenta',controller.eliminarcuentas);

rutas.post('/eliminarcreditos',controller.eliminarcredit);

rutas.post('/actualizarclient',controller.actualizardatoscli);
rutas.post('/actualizarlineascredit',controller.actualizardatoslineas);
rutas.post('/actualizarcredit',controller.actualizarcreditoss);



rutas.post('/retirar',controller.retiroscli);
rutas.post('/consignar',controller.consignarcli);
rutas.post('/transferir',controller.transcli);

rutas.post('/recibir',controller.recibircli);
module.exports=rutas;