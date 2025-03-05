"use strict";

var VehiculoController = require("../controllers/vehiculo-controller"),
    express = require("express"),
    router = express.Router();

router
    // Obtener todos los vehículos
    .get("/vehiculo/TodoslosVehiculos", VehiculoController.getAll)
    // Insertar un nuevo vehículo
    .post("/vehiculo/InsertarVehiculo", VehiculoController.post)
    // Eliminar un vehículo por su ID
    .delete("/vehiculo/EliminarVehiculo", VehiculoController.delete)
    // Obtener un vehículo por su ID (POST)
    .post("/vehiculo/buscarporId", VehiculoController.getById)
    // Actualizar un vehículo por su ID (PUT)
    .put("/vehiculo/actualizarVehiculo", VehiculoController.update)
    // Manejo de errores 404
    .use(VehiculoController.error404);

module.exports = router;