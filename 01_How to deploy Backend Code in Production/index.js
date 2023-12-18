// console.log("Backend COde Deployment in Production")

const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('How to Deploy Backend code in Production')
})

app.get('/facebook', (req, res) => {
    res.send("sandeepatel.com")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})