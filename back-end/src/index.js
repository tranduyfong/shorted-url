const express = require('express')
const app = express();
const connection = require('./config/database');
const router = require('./routes/url.route')
const port = 3000

app.use(express.json());
app.use("/", router);

connection();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
