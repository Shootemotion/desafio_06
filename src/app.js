import express, { json } from 'express'
import ProductManager from "../productManager.js" 


const app = express()
app.use(express.json())

const productsBase = new ProductManager('products.json')



app.get('/',async (req, res) => {

        const products = await productsBase.getProducts();
        console.log('products:' ,products)
     res.json(products)
   
  });
  

  app.get('/products',async (req, res) => {
    const limit = req.query.limit
    let products = await productsBase.getProducts()

    if(!limit){
        res.send({productos:products})
    }else{
    products = products.slice(0, limit)
    res.send({productos:products} )
    }
})


app.get('/products/:pid',async (req, res) => {
    const pid = req.params.pid
    const product = await productsBase.getProductById(pid);
    res.send({productos:product} )
    
})
  
  app.listen(8080, () => {
    console.log(`Server running on port ${8080}`)
  })



