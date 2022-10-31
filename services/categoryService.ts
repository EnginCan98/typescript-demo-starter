//GetAll, GetById, Add, Delete, Update

import {category} from "../models/category.js";

export class CategoryService{
    private categories:category[]=[];

	add(category: category) {
		this.categories.push(category);
	}

	getCategory(): category[] {
		return this.categories;
	}
    getByID(id:number): {}{
        let filteredCateg= this.categories.find(category=> {
            return category.id ==id;
        })
        return filteredCateg;
    }
    deleteById(id:number) :category[]{
        this.categories= this.categories.filter(category=> {
            return category.id !==id;
        })
        return this.categories;
    }
    updateById(id:number) :category[]{
        let filteredCateg= this.categories.filter(category=> {
            return category.id !==id;
        })
        return filteredCateg;
    }
    showUpdatedItem(id:number,isim:string) :category[]{
        let yeniCateg= this.categories.map(category=>{
            return category.id==id ? {...category, name:isim} : category;
        })
        return yeniCateg;
      }
}