const { Router } = require('express');
const {getCiclista, postCiclista, deleteCiclista, oneCiclista, putCiclista} = require('../controllers/ciclista.controllers.js');

const router = Router();

router.get("/all", getCiclista);

router.post("/add", postCiclista);

router.delete("/del/:id", deleteCiclista);

router.get("/one/:id", oneCiclista);

router.put("/upd/:id", putCiclista);


module.exports = router;