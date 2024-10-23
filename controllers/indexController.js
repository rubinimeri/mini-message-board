const db = require("../db/queries");

async function getAllMessages(req, res) {
    const messages = await db.getAllMessages();
    if(!messages) {
        throw new Error(404);
    }
    res.render("index", { title: "Mini Message Board", messages: messages })
}

async function getForm(req, res) {
    res.render("form")
}

async function getUser(req, res) {
    const { messageId } = req.params;
    const message = await db.getUser(messageId);
    if(!message) {
        throw new Error(404);
    }
    res.render("message", { message: message })
}

async function insertUserPost(req, res) {
    const { message, username } = req.body;
    db.insertUser(message, username);
    res.redirect("/");
}

module.exports = {
    getAllMessages,
    getUser,
    getForm,
    insertUserPost
}