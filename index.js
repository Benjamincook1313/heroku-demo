const express = require('express')
const path = require('path')

const app = express()

app.get('/', () => {
    resizeBy.sendFile(path.join(__dirname, '../index.html'))
})

const port = 4005



app.listen(port, () => console.log(`Server running on port ${port}`))