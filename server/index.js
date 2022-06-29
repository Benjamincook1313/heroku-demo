const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    resizeBy.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../styles.css'))
})

const port = 4005



app.listen(port, () => console.log(`Server running on port ${port}`))