//type-safe

import { User } from "./user";

console.log("Typescript")

function sayHello(name:string){
    console.log(`hello ${name}`);
}
sayHello("halit");

let sumFunction = (a1:number,a2:number):number=>{
    return a1+a2;
};

let sumOfNumbers:number = sumFunction(5,6);
console.log(sumOfNumbers);

class Greeter{
    private name:string;
    constructor(name:string){
        this.name=name;
    }
    sayHi(){
        console.log(`Hello ${this.name}`);
        this.sayWhatsUp();
    }
    private sayWhatsUp(){
        console.log("whats up");
    }
}

let greeter = new Greeter("Halit");
greeter.sayHi();

class UserService{
    private users:User[]=[];  //undefined hatası için boş array e atadık
 
    add(user:User){
        this.users.push(user);
    }
    getUsers():User[]{
        return this.users;
    }
}

let userService = new UserService();
userService.add({age:15,name:"Engin",surname:"Demiroğ"});
console.log(userService.getUsers());
