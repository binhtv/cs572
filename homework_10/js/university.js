"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faculty_1 = require("./faculty");
var University = /** @class */ (function () {
    function University(name, dept) {
        var _this = this;
        this.name = name;
        this.dept = dept;
        this.faculties = [];
        this.graduation = function (year) {
            console.log("Graduating " + _this.dept + " " + year + " students");
        };
    }
    University.prototype.addFaculty = function (faculty) {
        this.faculties.push(faculty);
        this.faculties.forEach(function (fal) { return console.log(fal); });
    };
    return University;
}());
var mum = new University('MUM', 'Computer Science');
mum.graduation(2019);
mum.addFaculty(new faculty_1.Faculty('Faculty1', 100));
