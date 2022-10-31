import {product} from "../models/product.js";

export class ProductService{
    private products:product[]=[];

	add(product: product) {
		this.products.push(product);
	}

	getProduct(): product[] {
		return this.products;
	}
    getByID(id:number): {}{
        let filteredProduct= this.products.find(product=> {
            return product.id ==id;
        })
        return filteredProduct;
    }
    deleteById(id:number) :product[]{
        this.products= this.products.filter(product=> {
            return product.id !==id;
        })
        return this.products;
    }
    updateById(id:number) :product[]{
        let filteredProduct= this.products.filter(product=> {
            return product.id !==id;
        })
        return filteredProduct;
    }
    showUpdatedItem(id:number,isim:string) :product[]{
        let yeniPro= this.products.map(product=>{
            return product.id==id ? {...product, name:isim} : product;
        })
        return yeniPro;
      }
    }