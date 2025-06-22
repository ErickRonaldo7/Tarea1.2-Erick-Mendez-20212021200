import {Router} from 'express';

import {
    getAllProducts,
    productosDisponibles,
    obtenerPorID,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}from '../controllers/products.controller.js';
const productsRouter = Router();

productsRouter.get('/', getAllProducts);
productsRouter.get('/disponibles', productosDisponibles);
productsRouter.get('/:id', obtenerPorID);
productsRouter.post('/', crearProducto);
productsRouter.put('/:id', actualizarProducto);
productsRouter.delete('/:id', eliminarProducto);

export default productsRouter;