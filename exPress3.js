const express = require('express')
const app = express()

const reqFilter = (req, res, next) => {
    console.log("reqFilter");
    next();
}

app.use(reqFilter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(3000)