'use strict';

var RESERVASController = require("../controllers/RESERVAS-controller"),
    express = require("express"),
    router = express.Router();

// Rutas para las reservas
router
  // Obtener todas las reservas
  .get("/RESERVA/TodaslasReservas", RESERVASController.getAll)
  
  // Insertar una nueva reserva
  .post("/RESERVA/InsertarReserva", RESERVASController.post)
  
  // Eliminar una reserva
  .delete("/RESERVA/EliminarReserva", RESERVASController.delete)
  
  // Ruta para obtener una reserva por su ID (POST)
  .post("/RESERVA/buscarporId", RESERVASController.getById)
  
  // Ruta para actualizar una reserva por su ID (PUT)
  .put("/RESERVA/actualizarReserva", RESERVASController.update)
  
  // Manejo de error 404 para rutas no encontradas
  .use(RESERVASController.error404);

module.exports = router;