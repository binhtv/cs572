"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Faculty = /** @class */ (function () {
    function Faculty(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    Faculty.prototype.sayHello = function () {
        console.log("Hello " + this.name + " with number of people is " + this.amount);
    };
    return Faculty;
}());
exports.Faculty = Faculty;
