const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get("/animales", cors(), controller.readAnimales);   // Read All
router.get("/animales/:id", cors(), controller.readAnimal);    // Read
router.delete("/animales/:id", cors(), controller.deleteAnimal);  // Delete
router.put("/animales/:id", cors(), controller.updateAnimal);  // Update
router.post("/animales", cors(), controller.createAnimal);  // Create

router.get("/cuidadores", cors(), controller.readCuidadores);  // Read All
router.get("/cuidadores/:id", cors(), controller.readCuidador);   // Read
router.delete("/cuidadores/:id", cors(), controller.deleteCuidador); // Delete
router.put("/cuidadores/:id", cors(), controller.updateCuidador); // Update
router.post("/cuidadores", cors(), controller.createCuidador); // Create


module.exports = router;