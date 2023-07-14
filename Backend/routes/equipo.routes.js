const { Router } = require('express');
const {getEquipo, postEquipo, deleteEquipo, oneEquipo, putEquipo} = require('../controllers/equipo.controllers.js');

const router = Router();

router.get("/all", getEquipo);

router.post("/add", postEquipo);

router.delete("/del/:id", deleteEquipo);

router.get("/one/:id", oneEquipo);

router.put("/upd/:id", putEquipo);


module.exports = router;