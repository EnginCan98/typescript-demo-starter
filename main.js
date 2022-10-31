"use strict";
//type-safe
exports.__esModule = true;
console.log("Typescript");
function sayHello(name) {
    console.log("hello ".concat(name));
}
sayHello("halit");
var sumFunction = function (a1, a2) {
    return a1 + a2;
};
var sumOfNumbers = sumFunction(5, 6);
console.log(sumOfNumbers);
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.sayHi = function () {
        console.log("Hello ".concat(this.name));
        this.sayWhatsUp();
    };
    Greeter.prototype.sayWhatsUp = function () {
        console.log("whats up");
    };
    return Greeter;
}());
var greeter = new Greeter("Halit");
greeter.sayHi();
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = []; //undefined hatası için boş array e atadık
    }
    UserService.prototype.add = function (user) {
        this.users.push(user);
    };
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    return UserService;
}());
var userService = new UserService();
userService.add({ age: 15, name: "Engin", surname: "Demiroğ" });
console.log(userService.getUsers());
