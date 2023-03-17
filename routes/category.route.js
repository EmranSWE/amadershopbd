const express = require('express');
const category = require('../controllers/category.controller');
const router = express.Router();

router.route("/")
.get(category.getCategory)
.post(category.createCategory)

router.route("/:id")
.get(category.getCategoryById)
.patch(category.patchCategoryById)

module.exports = router;