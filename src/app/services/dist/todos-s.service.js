"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TodosSService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var TodosSService = /** @class */ (function () {
    function TodosSService(http) {
        this.http = http;
        this.https = core_1.inject(http_1.HttpClient);
        var Httapdata = http;
    }
    TodosSService.prototype.getHttpData = function () {
        var url = 'https://jsonplaceholder.typicode.com/todos/';
        return this.http.get(url);
    };
    TodosSService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TodosSService);
    return TodosSService;
}());
exports.TodosSService = TodosSService;
