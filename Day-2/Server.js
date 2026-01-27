const express = require("express")

const app = express();//server instance create karana

app.get('/', (req, res) => {
    res.send("Hello from backend")
})

app.get('/about', (req, res) => {
    res.send("This is about page")
})


app.listen(3000)/// server start karana