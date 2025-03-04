import { Request, Response } from 'express'

import Product from '../models/Product.model.js'

const createProduct = async (req: Request, res: Response) => {
  

  //crear el producto
  const producto = await Product.create(req.body)
  res.json({ data: producto })
}

export { createProduct }