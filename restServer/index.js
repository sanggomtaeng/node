const express = require("express");
const productRoute = require("./routes/product");
const customerRoute = require("./routes/customer");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/product", productRoute);
app.use("/customer", customerRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
});