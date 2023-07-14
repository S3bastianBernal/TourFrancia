const { Router } = require('express');
const {getPremio, postPremio, deletePremio, onePremio, putPremio} = require('../controllers/premio.controllers.js');

const router = Router();

router.get("/all", getPremio);

router.post("/add", postPremio);

router.delete("/del/:id", deletePremio);

router.get("/one/:id", onePremio);

router.put("/upd/:id", putPremio);


module.exports = router;