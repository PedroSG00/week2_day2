const express = require('express')

const app = express()

app.use(express.static('public'))
app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

app.get('/', (req, res) => {
    res.render('index-page')
})

app.get('/tu-reserva', (req, res) => {

    const studentInfo = {
        name: 'Xia',
        address: {
            street: 'Calle whatever',
            number: '22',
            postalCode: '28002'
        },
        campus: 'Madrid',
        subjects: ['HTML', 'CSS', 'EXPRESS', 'NODE', 'REACT'],
        debt: 2000,
        cohort: 'Web development',
        date: 'October 22',
        teacher: 'Germán'
    }

    res.render('booking-page', studentInfo)
})

app.listen(5005, () => console.log('servidor levantado en 5005'))