const express = require('express');
const router = express.Router();
const { getRoute, signupRoute,loginRoute, putRoute, deleteRoute,getRouteById } = require('../Controllers/egController');

router.get('/get', getRoute);
router.put('/put/:id', putRoute);
router.post('/signup', signupRoute);
router.post('/login', loginRoute);
router.delete('/delete/:id', deleteRoute);
router.get('/get/:id', getRouteById);

module.exports = router;
