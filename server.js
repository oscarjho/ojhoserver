const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`),
    console.log("Server is running in ", process.env.NODE_ENV);
});

app.get("/", (req, res) => {
    console.log("Received GET request to the server");
    res.json({msg: "Server Working"});
});