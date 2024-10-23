const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.getAllMessages);
indexRouter.get("/new", indexController.getForm);
indexRouter.post("/new", indexController.insertUserPost);
indexRouter.get("/:messageId", indexController.getUser);

module.exports = indexRouter;