/*
 * Import Module
 * ************* */
const router = require("express").Router();
const ArticleControllers= require("../controllers/ArticleControllers");

// Routes
router
.route ("/")
.get(new ArticleControllers().getAll)
.post (new ArticleControllers().create)
.delete (new ArticleControllers().deleteAll);

router
.route("/:id")
.get(new ArticleControllers().getId)
.put(new ArticleControllers().editOne)
.delete(new ArticleControllers().deleteOne);





module.exports = router;