const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/views/home-page.html`)
})

app.get('/popino-is-love', (request, response) => {
    response.sendFile(`${__dirname}/views/popino-page.html`)
})

app.listen(5005, () => console.log('SERVIDOR LEVANTADO EN EL 5005'))