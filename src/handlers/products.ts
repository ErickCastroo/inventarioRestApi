import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import Product from '../models/Product.model.js'

export const createProduct = async (req: Request, res: Response) => {
  
  //checar si hay errores en la validacion y regresarlos
  let errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  } 
  
  //crear el producto
  const producto = await Product.create(req.body)
  res.json({ data: producto })
}