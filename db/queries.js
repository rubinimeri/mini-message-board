const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getUser(id) {
    const { rows } = await pool.query(`SELECT * FROM messages WHERE id = ${parseInt(id)}`);
    return rows[0];
}

async function insertUser(message, username) {
    await 
      pool
      .query(
        `INSERT INTO messages 
        (message, username, date_added) 
        VALUES ('${message}', '${username}', NOW()::DATE)`)
}

module.exports = {
    getAllMessages,
    getUser,
    insertUser
}