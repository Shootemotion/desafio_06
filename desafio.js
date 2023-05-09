class ProductManager{
    #productos
    
    constructor(){
      
        this.#productos = []

    }


    #cumpleRequisitos = (title, description, price, thumbail, code, stock) => {
        const validarDatos = !title || !description || !price || !thumbail || !code || !stock;
        const validarCodigo = this.#productos.find(item => item.code === code);
        return validarDatos ? (console.log("Faltan Datos"), false):
               validarCodigo ? (console.log("El código está duplicado"), false) :
               true;
      }



        getProducts = () => {
            return this.#productos
        }

        #createId = ()=> (this.#productos.length === 0 ? 1 : this.#productos.length +1)


        addProduct = (title, description, price, thumbail, code, stock) => {
            if (!this.#cumpleRequisitos(title, description, price, thumbail, code, stock)) {
              return; 
            }
            
            const elemento = {
              id: this.#createId(),
              title,
              description,
              price,
              thumbail,
              code,
              stock
            }
          
            this.#productos.push(elemento)
          }
          

          

          getProductById = (id) => {
           const isInArray = this.#productos.find (elem => elem.id===id)
           console.log(isInArray || "Not Found");
           return isInArray;

          }


        }
const productsAdmin = new ProductManager()
productsAdmin.addProduct("TV", "TV de 65 pulg", 2323, "ss", 12, 43)
productsAdmin.addProduct("Mesa", "Cuadrada", 231, "ss", 23, 3)
productsAdmin.addProduct("Silla", "Grande", 2311, "ss", 32, 13)
productsAdmin.addProduct("Grande", 2311, "ss", 32, 13)
productsAdmin.addProduct("Mesa", "Cuadrada", 231, "ss", 23, 3)



console.log(productsAdmin.getProducts());
productsAdmin.getProductById(1)
productsAdmin.getProductById(3)
productsAdmin.getProductById(12)
