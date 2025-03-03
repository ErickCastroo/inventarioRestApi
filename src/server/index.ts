import colors from 'colors'
import express from 'express'

import { router } from '../router/index.js'
import  db from '../config/db.js'


//conectar a DB
async function connectDb(){
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.green.bold('Base de datos conectada'))
      }
      catch (error) {
        console.error(colors.red('Error en conectar la base de datos'))

      }
}

connectDb()
const app = express()

app.use('/api/productos',router)



export default app
