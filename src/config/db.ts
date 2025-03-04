import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'

import Product from '../models/Product.model.js'

dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', 
  models: [Product]
})

export default db
