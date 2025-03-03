import { Router } from 'express'

import { createProduct } from 'src/handlers/products.js'


const router = Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/products', createProduct)







export { router }
