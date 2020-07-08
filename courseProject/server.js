const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send(`Node Server running on port ${PORT}`));
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
