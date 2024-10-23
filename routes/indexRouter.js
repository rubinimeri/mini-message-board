const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.getAllMessages);
indexRouter.get("/new", indexController.getForm);
indexRouter.get("/:messageId", indexController.getUser);
indexRouter.post("/new", indexController.insertUserPost)

module.exports = indexRouter;