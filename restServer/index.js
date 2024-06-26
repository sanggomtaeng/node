const express = require("express");
const productRoute = require("./routes/product");
const customerRoute = require("./routes/customer");
const todoRoute = require("./routes/todo");
const boardRoute = require("./routes/boardRouter");
const movieRoute = require("./routes/movie");
const reviewRoute = require("./routes/review");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/product", productRoute);
app.use("/customer", customerRoute);
app.use("/todo", todoRoute);
app.use("/board", boardRoute);
app.use("/movie", movieRoute);
app.use("/review", reviewRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
});