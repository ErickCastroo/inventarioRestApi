import { Router } from 'express'
import { body } from 'express-validator'

import { createProduct } from 'src/handlers/products.js'
import { HandlerErrors } from 'src/middleware/index.js'



const router = Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/products',
  body('nombre', 'El nombre es requerido').notEmpty(),
  body('precio', 'El precio es requerido')
    .isNumeric()
    .notEmpty()
    .custom(value => value > 0),

  body('cantidadDisponible', 'La cantidad es requerida')
    .isNumeric()
    .notEmpty()
    .custom(value => value > 0),
  HandlerErrors,
  createProduct
)


export { router }
