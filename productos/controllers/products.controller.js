import products from '../local_db/productos.json' with { type: 'json' };


export const getAllProducts = (req,res)=>{
    res.send(products);
}

export const productosDisponibles = (req,res)=>{

    const ProductosDisponibles = products.filter(producto => producto.disponible === true);
    res.json(ProductosDisponibles);

}
export const obtenerPorID =(req,res)=>{
const {id} = req.params;
    const productId = Number(id)

    if (isNaN(productId)){
        return res.status(400).json({message: 'El ID debe ser un número'});
    }

    const verificarID = products.findIndex(producto =>producto.id === productId)

    if (verificarID === -1) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }

const productoEspecifico = products.find(({id}) => {return id === productId});
res.json(productoEspecifico);
}



export const crearProducto = (req, res) => {
    //Se verifica si todos los campos de la solicitud estan vacios.
        const valores = Object.values(req.body);
        const campoVacio = valores.every(valor => valor === '' || valor === null || valor === undefined);
    
        
        if(campoVacio) {
            //si todos los campos estan vacios:
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
        else if (!req.body.nombre) {
            return res.status(400).json({ message: 'El campo nombre es obligatorio' });
        }else if (!req.body.precio || req.body.precio<=0){
            return res.status(400).json({ message: 'El campo precio es obligatorio y debe ser un numero mayor que cero' });
        }else if(req.body.descripcion.length < 10){
            return res.status(400).json({ message: 'El campo descripcion debe tener al menos 10 caracteres' });
            
        }

        products.push(req.body)
        res.status(201).json(req.body)

}

export const actualizarProducto = (req, res) => {
const {id} = req.params;
        const productIdObtenido = Number(id)

        //ya tengo el id del arreglo que voy a cambiar 
        if (isNaN(productIdObtenido)){
            return res.status(400).json({message: 'El ID debe ser un número'});
        }

         //Se verifica si todos los campos de la solicitud estan vacios.
    const valores = Object.values(req.body);
    const campoVacio = valores.every(valor => valor === '' || valor === null || valor === undefined);
  
    
        //verifica si todos los campos estan vacios cuando se actualiza un producto.
        if(campoVacio) {
        //si todos los campos estan vacios:
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
         }
        //validar nombre, precio mayor que cero y descripcion mayor a 10 caracteres
        else if (!req.body.nombre) {
            return res.status(400).json({ message: 'El campo nombre es obligatorio' });
        }else if (!req.body.precio || req.body.precio<=0){
            return res.status(400).json({ message: 'El campo precio es obligatorio y debe ser un numero mayor que cero' });
        }else if(req.body.descripcion.length < 10){
            return res.status(400).json({ message: 'El campo descripcion debe tener al menos 10 caracteres' });             
        }

        //encontrar el ndice en el arreglo del indice que envio en el request
        const indexProduct = products.findIndex(producto => producto.id ===productIdObtenido)
        const data = req.body
        const productUpdate = {id:productIdObtenido, ...data}
        products[indexProduct] = productUpdate;


        if(indexProduct === -1){
           return res.status(404).json({message: 'Producto no encontrado'});
        }

        res.json({message:"producto actualizada correctamente"})
        
}
 

export const eliminarProducto = (req, res) => {

    
    const {id} = req.params;
    const productId = Number(id)

    if (isNaN(productId)){
        return res.status(400).json({message: 'El ID debe ser un número oh si'});
    }

    const indexProduct = products.findIndex(producto => producto.id === productId)

    if(indexProduct === -1){
        return res.status(404).json({message: 'Producto no encontrado'});
    }

    products.splice(indexProduct, 1);
    res.json({message: 'Producto eliminado correctamente'});

}
