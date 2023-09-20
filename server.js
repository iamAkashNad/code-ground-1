const app = require("express")();

app.use((req, res) => res.send("Hello World!"));

app.listen(3001);
