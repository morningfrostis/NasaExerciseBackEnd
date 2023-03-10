const express = require('express');
const bodyParser = require('body-parser');
const routerUser = require('./src/routes/users');
const routerNasa = require('./src/routes/syncApiNasa');
const routerAuth = require('./src/routes/auth');
const { controlAuthentication } = require('./src/middelware/auth')
const connectToDb = require('./src/services/db');
const dotenv = require('dotenv')

dotenv.config()

const startApp = () => {
    const app = express();
    const port = process.env.PORT

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(controlAuthentication)
    app.use('/users', routerUser)
    app.use('/syncApiNasa', routerNasa)
    app.use('/auth', routerAuth)

    try {
        connectToDb()
        app.listen(port, () => {
            console.log('NASA APP running on port ' + port)
        })
    } catch (error) {
        process.exit(1)
    }
}

startApp()