const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes')

const app = express()
const port = 3000

const sequelize = require('./src/database')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes)

app.listen(port, async () => {
    await sequelize.sync({ force: true, logging: false })
    console.log(`Servidor está executando na porta ${port}`)
})