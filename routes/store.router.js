const express = require('express');
const store = require('../controllers/store.controller')
const router = express.Router();

router.route("/")
.get(store.getStore)
.post(store.createStore)

router.route("/:id")
.get(store.getStoreById)
.patch(store.patchStoreById)

module.exports = router;