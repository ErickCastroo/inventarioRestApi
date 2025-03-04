import { Router } from 'express'
import { body, param } from 'express-validator'

import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from 'src/handlers/products.js'
import { HandlerErrors } from 'src/middleware/index.js'



const router = Router()

router.get('/products',
  getProducts
)

router.get('/products/:id',
  param('id', 'El id tienen que ser un numero').notEmpty().isNumeric(),
  HandlerErrors,
  getProductById
)

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

router.put('/products/:id',
  param('id', 'El id tienen que ser un numero').notEmpty().isNumeric(),
  HandlerErrors,
  updateProduct
)

router.delete('/products/:id',
  param('id', 'El id tienen que ser un numero').notEmpty().isNumeric(),
  HandlerErrors,
  deleteProduct)


export { router }
