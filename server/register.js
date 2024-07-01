const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "username",
    host: "hostname",
    password: "password",
    database: "dbname"
});

// Check if there's an error in connecting to the database
con.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database!");
});

// Handle connection errors
con.on("error", (err) => {
    console.error("Database connection error:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
        // Reconnect in case of a lost connection
        con.connect();
    } else {
        throw err;
    }
});

app.post('/register', (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    con.query("INSERT INTO users (email, username, password) VALUES (?, ?, ?)", [email, username, password],
        (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).send({ message: "Internal Server Error" });
            } else {
                res.send(result);
            }
        }
    );
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password],
        (err, result) => {
            if (err) {
                console.error("Database error:", err);
                res.status(500).send({ message: "Internal Server Error" });
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: "WRONG USERNAME OR PASSWORD!" });
                }
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Running backend server");
});
