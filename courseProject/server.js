const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json({ extended: false }));

//Connect MongoDB
connectDB();

//Setup API Routes
app.use("/api/auth", require("./routes/apis/auth"));
app.use("/api/profile", require("./routes/apis/profile"));
app.use("/api/posts", require("./routes/apis/posts"));
app.use("/api/user", require("./routes/apis/user"));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send(`Node Server running on port ${PORT}`));
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
