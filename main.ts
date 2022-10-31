import {CategoryService} from "./services/categoryService.js";
import {ProductService} from "./services/productService.js";

let categoryService = new CategoryService();
categoryService.add({id:12,name:"categori 1"});
categoryService.add({id:10,name:"categori 2"});
console.log("12 numaralı id");
console.log(categoryService.getByID(12));
console.log("12 numaralı idli itemi update et");
console.log(categoryService.showUpdatedItem(12,"Yeni categ"));
console.log("10 numaralı idli itemi delete et");
console.log(categoryService.deleteById(10));



let productService = new ProductService();
productService.add({id:1263,name:"Product 1", price:1111, categoryId:12});
productService.add({id:1025,name:"Product 2", price:5555, categoryId:10});
productService.add({id:1234,name:"Product 3", price:12345, categoryId:10});
productService.add({id:1235,name:"Product 4", price:100000, categoryId:10});
productService.add({id:1236,name:"Product 5", price:4524, categoryId:12});
console.log("1025 numaralı id");
console.log(productService.getByID(1025));
console.log("1263 numaralı idli itemi update et");
console.log(productService.showUpdatedItem(1263,"Yeni Demsdlfknlskd"));
console.log("1236 numaralı idli itemi delete et");
productService.deleteById(1236);
console.log(productService.getProduct());