const express = require('express');
const router = express.Router();
const { getRoute, postRoute, putRoute, deleteRoute } = require('../Controllers/egController');

router.get('/get', getRoute);
router.post('/post', postRoute);
router.put('/put/:id', putRoute);
router.delete('/delete/:id', deleteRoute);

module.exports = router;
