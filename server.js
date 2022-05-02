const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static("public"))

app.get('/get-data', (req, res) => {
    try {
        res.send(`Hello Gal`)
        console.log('hello from server')
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})