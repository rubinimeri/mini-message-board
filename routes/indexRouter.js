const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

indexRouter.get("/", (req, res) => res.render("index", { title: "Mini Message Board", messages: messages }));
indexRouter.get("/:user", (req, res) => {
    const { user } = req.params;
    const message = messages.find(message => message.user = user);
    if(!message) {
        throw new Error(404);
    }
    res.render("message", { message: message })
})
indexRouter.get("/new", (req, res) => res.render("form"));
indexRouter.post("/new", (req, res) => {
    const { text, user } = req.body;
    const added = new Date();
    messages.push({ text, user, added })
    res.redirect("/");
})

module.exports = indexRouter;