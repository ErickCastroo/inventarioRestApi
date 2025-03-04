import { Request, Response } from 'express'

import Product from '../models/Product.model.js'


//Obtener productos -GET  http://localhost:3000/api/products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const productos = await Product.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
    res.json({ data: productos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Hubo un error' });
  }
};

//Obtener productos -GET by ID  http://localhost:3000/api/products/1
export const getProductById = async (req: Request, res: Response) => {
  try {
    const producto = await Product.findByPk(req.params.id)
    res.json({ data: producto })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Producto no encontrado' })
  }
}

//crear el producto -POST  http://localhost:3000/api/products
export const createProduct = async (req: Request, res: Response) => {
  try {
    const producto = await Product.create(req.body)
    res.json({ data: producto })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Hubo un error' })
  }
}

//actualizar el producto -PUT  http://localhost:3000/api/products/1
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const producto = await Product.findByPk(req.params.id)
    if (producto) {
      await producto.update(req.body)
      res.json({ data: producto })
    } else {
      res.status(400).json({ message: 'Producto no encontrado' })
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Hubo un error' })
  }
}

//eliminar el producto -DELETE  http://localhost:3000/api/products/1
export const  deleteProduct = async (req: Request, res: Response) => {
  try {
    const producto = await Product.findByPk(req.params.id)
    if (producto) {
      await producto.destroy()
      res.json({ message: 'Producto eliminado' })
    } else {
      res.status(400).json({ message: 'Producto no encontrado' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Hubo un error' })
  }
}